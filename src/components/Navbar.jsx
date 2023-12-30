import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0 inner">
                <div className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">MyanDreamDictionary</div>
            </div>

            <div className="sm:mb-0 self-center flex flex-row">
                <Link to="/">
                    <div className="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">Home</div>
                </Link>
                <Link to="/search">
                    <div className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">Search</div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar