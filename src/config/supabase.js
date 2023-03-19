import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jojdwgktxkbdsdtltmgx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvamR3Z2t0eGtiZHNkdGx0bWd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkwNTgzNzUsImV4cCI6MTk5NDYzNDM3NX0.MEoznHgnL2VzB03m5RAHAiqkk6MYr7Tc5hOHX9NwtXM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
