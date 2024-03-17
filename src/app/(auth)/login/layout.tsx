import React from 'react'

type LayoutProps = {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: LayoutProps) {
    return (
        <div className='flex justify-center h-full py-36'>
            {children}
        </div>
    )
}
