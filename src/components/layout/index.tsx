interface Prop {
    children: JSX.Element
}
import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'


const Layout = ({ children }: Prop) => {
    return (
        <>
            <div className="flex flex-col">
                <Header />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout