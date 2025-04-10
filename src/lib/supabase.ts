// src/lib/supabase.ts

import { createClient } from '@supabase/supabase-js'

// Ces variables doivent être définies dans les variables d’environnement de Render
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Les variables d'environnement Supabase ne sont pas définies.")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
