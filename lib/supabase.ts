import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://tddylpcsyjptiumolwss.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkZHlscGNzeWpwdGl1bW9sd3NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyMDI3OTcsImV4cCI6MjA4OTc3ODc5N30.3zKdY1WxPrPKCeEDzANvfGd22wudHaUZbMyhS-5r7EI";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
