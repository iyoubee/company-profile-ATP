import createIntlMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.redirect(
    new URL(
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUcbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXAgbGl2ZQ%3D%3D'
    )
  )
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

  return response
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
