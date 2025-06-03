"use client";

import Link from "next/link";

const Header = () => {
    return(
        <>
            <nav className="flex">
                <Link href="/about" className="text-white px-4 py-2 hover:bg-gray-700 rounded">
                    About
                </Link>
                <Link href="/movieExplorer" className="text-white px-4 py-2 hover:bg-gray-700 rounded">
                    Movie Explorer
                </Link>
                
            </nav>
        </>
    )
}

export default Header;