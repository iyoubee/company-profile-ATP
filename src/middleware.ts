import createIntlMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Step 1: Use the incoming request
  const defaultLocale = request.headers.get('x-default-locale') || 'id'

  // Step 2: Create and call the next-intl middleware
  const handleI18nRouting = createIntlMiddleware({
    locales: ['en', 'id'],
    defaultLocale,
    localePrefix: 'always',
  })
  const response = handleI18nRouting(request)

  // Step 3: Alter the response
  response.headers.set('x-default-locale', defaultLocale)

  // enhanced middleware
  const url = request.nextUrl.clone()
  const pathname = url.pathname
  if (pathname.includes('/product') && !pathname.endsWith('/product')) {
    console.log('here')
    if (!pathname.endsWith('/coffee') && !pathname.endsWith('/atsiri')) {
      console.log(pathname)
      url.pathname = '/404'
      return NextResponse.redirect(url)
    }
  }
  return response
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
