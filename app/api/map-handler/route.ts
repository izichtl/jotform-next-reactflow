import { NextResponse, NextRequest } from "next/server";
import { getMapFromHash } from "@/database/get-map";
import { getMapFromUserData } from "@/database/get-maps";

export async function GET(request: NextRequest, response: any) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const hash = searchParams.get("hash")
  const mapData = await getMapFromHash(hash as string)
  return new NextResponse(JSON.stringify(mapData) as string, {
    status: 200,
  });
}

export async function POST(request: Request, response: Response) {
  const data = await request.json()
  const mapData = await getMapFromUserData(data.day, data.mount, data.year, data.email)
  if (mapData[0] === undefined) {
      return new NextResponse(JSON.stringify({
          success: false,
          data: ['no-data']
      }) as string, {
          status: 200,
  });
  }
  return new NextResponse(JSON.stringify({
      success: true,
      data: mapData
  }) as string, {
      status: 200,
  });

}


