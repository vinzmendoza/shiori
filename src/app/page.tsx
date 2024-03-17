import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Search } from "lucide-react";
import BookmarkList from "@/components/bookmark-list";
import SignOut from "./(auth)/sign-out";

export default async function Home() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (!data || error) {
    redirect('/login')
  }

  return (
    <main className="container max-w-2xl py-12">
      <span className="flex justify-between mb-4"><p>Logged in as {data.user?.email}</p>
        <SignOut /></span>

      <div className="flex flex-col gap-4">
        <div className="relative w-full">
          <Input type="text" placeholder="Enter a URL" className="pl-9" />
          <Search className="absolute left-0 top-0 m-2.5 h-4 w-4 text-muted-foreground" />
        </div>
        <div>
          <div className="flex justify-between">
            <p className="text-sm">Title</p>
            <p className="text-sm">Created at</p>
          </div>
          <Separator className="my-2" />
          <BookmarkList />
        </div>
      </div>
    </main>
  );
}
