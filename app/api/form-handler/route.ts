import { NextResponse, NextRequest } from "next/server";
import crypto from 'crypto';
import NodeCache from 'node-cache';
import { cleanString } from "@/utils/string-modeling";
import { saveMap } from "@/database/save-map";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import { getMapFromHash } from "@/database/get-map";
const cache = new NodeCache();
// @ts-ignore
import Cors from 'cors';
import { couldStartTrivia } from "typescript";

export async function GET(request: NextRequest, response: any) {

  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const hash = searchParams.get("hash")
  // const dados = cache.get(hash as string);
  console.log(hash)
  // const mockData = JSON.stringify({"firstName":"Ivan ","lastName":"Zichtl ","email":"izichtl@gmail.com","health":["Bom","Bom","Ruim"],"accept":"Sim","motivo":"OEOEOEOEOEOEOE"})
  // console.log(mockData)
  const mapData = await getMapFromHash(hash as string)
  console.log(mapData)
  return new NextResponse(JSON.stringify(mapData) as string, {
    status: 200,
  });

}
// export async function PUT(request: NextRequest, response: any) {
//   console.log('@@@@@@@@@@@@@@')
//   const jsonData = {
//     submission_id: '19191919191',
//   }
//   const resultOfDB = await saveMap(jsonData)
//   console.log(resultOfDB)
//   return new NextResponse('' as string, {
//     status: 200,
//   });

// }

// const cors = Cors({
//   origin: 'https://www.jotform.com/',
//   methods: ['POST', 'GET'], // Adjust the methods as needed
// });


export async function POST(request: Request, response: Response) {
  console.log('Headers:', request.headers);
  // await cors(request, response);
  const bodyData = await request.formData() // bodyData now contains body
  console.log(bodyData)
  // TRANSFORMA EM ARRAY A KEYS PODENDO ITERAR SOBRE ELAS
  // const keysArray = Array.from(bodyData.keys());

  const submission_id = bodyData.get('submission_id')
  const fullName = bodyData.get('name')
  const email = bodyData.get('email')
  const birth = `${bodyData.get('birth[day]')}/${bodyData.get('birth[month]')}/${bodyData.get('birth[year]')}`
  const ageGroup = bodyData.get('agegroup')

  const mindMap = [
    ['Rede de Suporte', bodyData.get('mind_supportnetwork')],
    ['Trabalho', bodyData.get('mind_work')],
    ['Finanças', bodyData.get('mind_finance')],
  ].map((item: any, index) => {
    return [item[0], cleanString(item[1])]
  })
  const bodyMap = [
    ['Exercício Físico', bodyData.get('body_workout')],
    ['Alimentação', bodyData.get('body_food')],
    ['Hobbies', bodyData.get('body_hobbies')],
  ].map((item: any, index) => {
    return [item[0], cleanString(item[1])]
  })
  const spiritMap = [
    ['Propósito', bodyData.get('spirit_reason')],
    ['Experiências', bodyData.get('spirit_experience')],
    ['Tribo Correta', bodyData.get('spirit_tribe')],
  ].map((item: any, index) => {
    return [item[0], cleanString(item[1])]
  })

  const reasons = [
    bodyData.get('reasonslist[0]'),
    bodyData.get('reasonslist[1]'),
    bodyData.get('reasonslist[2]'),
    bodyData.get('reasonslist[3]'),
    bodyData.get('reasonslist[4]'),
    bodyData.get('reasonslist[5]'),
    bodyData.get('reasonslist[6]'),
    bodyData.get('reasonslist[7]'),
    bodyData.get('reasonslist[8]'),
    bodyData.get('reasonslist[9]'),
  ]

  const jsonData = {
    submission_id,
    fullName,
    email,
    birth,
    ageGroup,
    maps: [mindMap, bodyMap, spiritMap],
    reasons: reasons.filter((reason: any) => reason !== null),
  }
  const hash = uuidv4()
  const resultOfDB = await saveMap(jsonData, hash)
  console.log(resultOfDB)

  return NextResponse.redirect(`https://ee27-2804-14d-1685-a1e3-4856-c4bc-23ba-b7b6.ngrok-free.app/loading?hash=${hash}`, {
    status: 301,
  });
}


