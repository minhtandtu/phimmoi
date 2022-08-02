import React from "react";
import Image from "next/image";
import { ClockIcon } from '@heroicons/react/solid'

export default function Treding(){
    const movies = [{
		src: '/batman_begins.jpg',
		title: 'Batman Begins',
		main: 'Christian Bale',
		runtime: '120m'
	},
	{ src: '/dune.jpg', title: 'Dune', main: 'Timothée Chalamet', runtime: '120m' },
	{ src: '/sing_2.jpg', title: 'Sing 2', main: 'Matthew McConaughey', runtime: '120m' },
	{
		src: '/spider_man.jpg',
		title: 'Spider-Man: No Way Home',
		main: 'Tom Holland',
		runtime: '120m'
	},
	{
		src: '/the_dark_knight.jpg',
		title: 'The Dark Knight Rises',
		main: 'Christian Bale',
		runtime: '120m'
	},
	{
		src: '/the_dark_knight_rises.jpg',
		title: 'The Dark Knight',
		main: 'Christian Bale',
		runtime: '120m'
	}
]
    return(
        <>
            <h3 className="mx-4 border-b border-primary mt-5">Trending</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-4 min-h-400">
               {movies.map((movie) => 
                    
					<>
					<div className="rounded-md my-4 bg-primary overflow-hidden relative shadow-md shadow-primary hover:shadow-lg hover:shadow-red-500">
						<Image className="w-full" src={movie.src} alt='movie' width='300%' height='400' />
						<div className="text-white mx-2 my-1"> 
							<h4 >{movie.title}</h4>
							<p>{movie.main}</p>
						</div>
						<div className=" flex absolute top-2 left-2 bg-cyan-50 rounded px-2">
							<ClockIcon className="h-4 w-4 text-primary mt-1 mr-1"/>
							<p>{movie.runtime}</p>
							
						</div>
					</div>
					</>
               )}
            </div>
            <div>
                <button className="btn m-auto hover:scale-125 transition ease-out duration-500">Load More</button>
            </div>
        </>
    )
}