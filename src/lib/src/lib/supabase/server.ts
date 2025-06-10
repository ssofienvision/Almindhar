import { createServerClient } from '@supabase/ssr'

export const createSupabaseServerClient = (cookies: {
  get: (name: string) => string | null
  set: (name: string, value: string, options: any) => void
  remove: (name: string, options: any) => void
}) => {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies,
    }
  )
}
