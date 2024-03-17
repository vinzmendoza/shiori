import OAuthButton from "@/app/(auth)/oauth-button";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Separator } from "@/components/ui/separator";

export default async function LoginPage() {
    const supabase = createClient()
    const { data, error } = await supabase.auth.getUser();

    if (data?.user) {
        redirect('/')
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-lg">Welcome to Shiori</h1>
            <p className="font-light text-sm">Save those important hyperlinks</p>
            <Separator className="my-4" />
            <OAuthButton provider="google" variant="outline">Login with Google</OAuthButton>
        </div>
    )
}