"use client"
import { createClient } from '@/lib/supabase/client'
import React from 'react'
import { Button, ButtonProps } from '@/components/ui/button'
import { Provider } from '@supabase/supabase-js'

type OAuthButtonProps = {
    children: React.ReactNode,
    provider: Provider;
    variant?: ButtonProps['variant']
}

export default function OAuthButton({ children, provider, variant }: OAuthButtonProps) {
    const supabase = createClient();

    const signInWithGoogle = () => {
        supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `http://localhost:3000/callback`,
            },
        });
    }

    return (
        <Button onClick={signInWithGoogle} variant={variant}>{children}</Button>
    )
}
