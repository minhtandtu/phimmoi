import React, { useState } from "react";
import { BeakerIcon, MenuIcon } from '@heroicons/react/solid'
import { HomeIcon } from '@heroicons/react/solid'
import { FilmIcon } from '@heroicons/react/solid'
import { PhoneIcon } from '@heroicons/react/solid'
import { IdentificationIcon } from '@heroicons/react/solid'

import Link from 'next/link'
export default function Nav(){
    const [isNavMobileOpen, setIsNavMobileOpen] = useState(true)

    return (
        <>
        <nav className="block col-span-4  md:col-span-1 bg-cyan-400  ">
        <h4 className=" mx-4 font-bold text-left md:text-right px-4 py-4 border-b border-cyan-0">PHIMMOI.COM</h4>
        <div className="flex justify-end">
        <MenuIcon className="h-7 w-7 text-primary mr-4 md:hidden" onClick={() => setIsNavMobileOpen(!isNavMobileOpen)}></MenuIcon>
        </div>
        <ul className={` text-right px-4 cursor-pointer  ${ isNavMobileOpen ? " ": " hidden" } md:block `} >
            <li className="flex justify-end" key ="home">
                
                <h3>Home</h3>
                <HomeIcon className="h-7 w-7 text-primary mt-1 ml-1"/>
            </li>
            <li className="flex justify-end" key ="movies">
                <h3>Movies</h3>
                <FilmIcon className="h-7 w-7 text-primary mt-1.5 ml-1"/>
            </li>
            <li className="flex justify-end" key ="about">
                <h3>About</h3>
                <IdentificationIcon className="h-7 w-7 text-primary mt-1.5 ml-1"/>
            </li>
            <li className="flex justify-end" key ="hotline">
                <Link href ="https://www.youtube.com/watch?v=mSR-g4CxkE8&t=2835s"><a className="text-3xl ">Hotline</a></Link>
                <PhoneIcon className="h-7 w-7 text-primary mt-1.5 ml-1"/>
            </li>
        </ul>
        </nav>
        </>
    )
}