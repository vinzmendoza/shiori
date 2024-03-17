"use client"

import React from 'react'
import { Button } from './ui/button'

function List() {
    const clicked = () => {
        console.log('clicked');
    }

    return (
        <ul>
            <Button className="w-full bg-transparent text-neutral-900 hover:bg-neutral-100 shadow-none justify-start" onClick={clicked}>Url Here</Button>
            <Button className="w-full bg-transparent text-neutral-900 hover:bg-neutral-100 shadow-none justify-start">Url Here</Button>
        </ul>
    )
}

export default List