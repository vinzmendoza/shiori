"use client"

import React from 'react'
import { Button } from './ui/button'
import { PostgrestError } from '@supabase/supabase-js';

type ListProps = {
    bookmarks: Bookmarks[] | null;
    bookmarksError: PostgrestError | null;
}


function List({ bookmarks, bookmarksError }: ListProps) {
    const clicked = () => {
        console.log('clicked');
    }

    if (bookmarksError) return <p>Sorry something went wrong.</p>

    if ((bookmarks?.length && bookmarks?.length === 0) === 0) {
        return <p className="text-sm">No bookmarks yet.</p>
    }

    return (
        <ul>
            {
                bookmarks?.map(bookmark => (
                    <Button
                        key={bookmark.id}
                        className="w-full bg-transparent text-neutral-900 hover:bg-neutral-100 shadow-none justify-start"
                        onClick={clicked}
                    >
                        {bookmark.url}
                    </Button>)
                )
            }


        </ul>
    )
}

export default List