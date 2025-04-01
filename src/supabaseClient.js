// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://SEU-SUPABASE-URL.supabase.co';
const supabaseAnonKey = 'SEU-ANON-KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
