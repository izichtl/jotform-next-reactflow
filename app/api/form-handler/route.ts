import { NextResponse, NextRequest } from "next/server";
import { cleanString } from "@/utils/string-modeling";
import { saveMap } from "@/database/save-map";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';



export async function POST(request: Request) {
  const bodyData = await request.formData() // bodyData now contains body
  // TRANSFORMA EM ARRAY A KEYS PODENDO ITERAR SOBRE ELAS
  // const keysArray = Array.from(bodyData.keys());
  console.log(bodyData)
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
  console.log(jsonData)
  const hash = uuidv4()
  const resultOfDB = await saveMap(jsonData, hash)
  console.log(resultOfDB)

  return NextResponse.redirect(`https://lifeflow.vercel.app/loading?hash=${hash}`, {
    status: 301,
  });
}


