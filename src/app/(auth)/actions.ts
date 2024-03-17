"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function SignOutUser() {
  const supabase = createClient();
  await supabase.auth.signOut();

  redirect("/login");
}
