import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation';
import React from 'react'

function SignOut() {

  const handleSignOut = async () => {
    "use server"
    const supabase = createClient();
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.log(error)
    }

    redirect('/login');

  }

  return (
    <form action={handleSignOut}>
      <Button>Signout</Button>
    </form>

  )
}

export default SignOut