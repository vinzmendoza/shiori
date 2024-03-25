import React from 'react'

type LayoutProps = {
    children: React.ReactNode;
}

function CategoryLayout({ children }: LayoutProps) {
    return (
        <div>{children}</div>
    )
}

export default CategoryLayout