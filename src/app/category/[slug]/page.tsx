import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Plus } from "lucide-react";
import BookmarkList from "@/components/bookmark-list";
import SignOut from "@/app/(auth)/sign-out";

export default async function Category({ params }: { params: { slug: number } }) {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getUser();

    const { data: bookmarks, error: bookmarksError } = await supabase
        .from('bookmarks')
        .select(`*`)
        .eq('category_id', params.slug);

    async function addBookmark(formData: FormData) {
        "use server"

        const urlItem = formData.get('urlText')?.toString();
        const supabase = createClient();


        const { error: bookmarkErrorOnInsert } = await supabase
            .from('bookmarks')
            .insert([
                {
                    url: urlItem,
                    created_by: data?.user?.id,
                    is_pinned: false,
                    category_id: params.slug
                }
            ])

        console.log(bookmarkErrorOnInsert)

    }

    if (data.user === null || error) {
        redirect('/login')
    }

    return (
        <div className="container max-w-2xl py-12">
            <span className="flex justify-between mb-4 items-center">
                <p>Logged in as {data.user?.email}</p>
                <SignOut />
            </span>

            <div className="flex flex-col gap-4">
                <div className="relative w-full ">
                    <form action={addBookmark}>
                        <Input type="text" placeholder="Enter a URL" className="pl-9" name="urlText" />
                    </form>
                    <Plus className="absolute left-0 top-0 m-2.5 h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                    <div className="flex justify-between">
                        <p className="text-sm">Title</p>
                        <p className="text-sm">Created at</p>
                    </div>
                    <Separator className="my-2" />
                    <BookmarkList bookmarks={bookmarks} bookmarksError={bookmarksError} />
                </div>
            </div>
        </div>
    );
}
