import createMiddleware from 'next-intl/middleware'
// import { NextRequest, NextResponse } from 'next/server'

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'id'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'id',
  localePrefix: 'always',
})

// export function middleware(request: NextRequest) {
//   const url = request.nextUrl.clone()
//   console.log(url.pathname)
//   return NextResponse.next()
// }

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
