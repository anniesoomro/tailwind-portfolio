"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        
        <header className="bg-gradient-to-r from-gray-400 to-green-200 shadow-lg text-white p-4">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="flex items-center justify-between w-full sm:w-auto">

                <Image src="/logo.png"alt="my-logo"width={35} height={40} />
                <h1 className="text-xl text-gray-900 font-serif sm:text-2xl font-bold">Qurratulain Soomro</h1>
                <button className="md:hidden text-gray-900 hover:text-gray-500 ml-auto"

                onClick={() => setIsOpen(!isOpen)}>
                    Menu
                    </button>
                    </div>
                <nav className={`mt-2 sm:mt-2 ${isOpen ? "block" : "hidden"} md:flex space-x-2`}> 

                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-1 sm:space-x-2">
                
            
                    <Link href="/"
                    className="hover: text-gray-900 font-serif transition">Home</Link>
                    <Link href="/about"
                    className="hover: text-gray-900 font-serif transition">About</Link>
                    <Link href="/services"
                    className="hover: text-gray-900 font-serif transition">Services</Link>
                    <Link href="/portfolio"
                    className="hover: text-gray-900 font-serif transition">Portfolio</ Link>
                    <Link href="/contact"
                    className="hover: text-gray-900 font-serif transition">Contact</Link>
                    </div>
                    <div className="sm:mt-5 mb-2 p-4">
                    <a href="/my-portfolio.pdf"
                    download="My-portfolio.pdf"
                    className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition sm:mt-5 mb-2 space-x-6">Download
                    
                    </a>
                 </div>
                </nav>
                </div>
            </header>
    );
}

export default Header;