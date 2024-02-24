import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {  
  const cookieStore = cookies()

  const URL = process.env.NEXT_PUBLIC_SERVER_URL as string + "/auth/user"
  const token = cookieStore.get("token")?.value  

  if  (!token)
    return NextResponse.redirect(req.nextUrl.origin)

  const responce = await fetch(URL, {
    method: "GET",
    credentials: "include",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })


  if (responce.status !== 200)
    return NextResponse.redirect(req.nextUrl.origin)
}

export const config = {
  matcher: ['/student/:path*', '/faculty/:path*']
}