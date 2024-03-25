import type { Database as DB } from "@/lib/supabase/database.types";

declare global {
  type Database = DB;
  type Categories = DB["public"]["Tables"]["categories"]["Row"];
  type Bookmarks = DB["public"]["Tables"]["bookmarks"]["Row"];
}
