import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (data.user !== null) {
    redirect('/category/general')
  }

  return (
    <main className="container max-w-2xl py-12">
      <span className="flex justify-between mb-4">
        <h1>Homepage for Shiori</h1>
        <Link href="/login" className="font-bold hover:text-neutral-600">Sign in</Link>
      </span>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur sint ex error ad adipisci mollitia ratione perspiciatis assumenda eos aperiam expedita, aut, fugiat dolorum at praesentium a velit, tenetur alias.</p>
    </main>
  );
}
