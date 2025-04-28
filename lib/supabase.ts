import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kalmtgagwekwmbptzqnc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthbG10Z2Fnd2Vrd21icHR6cW5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2NzUyODcsImV4cCI6MjA1NzI1MTI4N30.s1DR--lHSyIvC7knDvtChCOS_oi_-AQw4nN-7KldBQQ";

export const supabase = createClient(supabaseUrl, supabaseKey);
