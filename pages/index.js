import Head from "next/head";
import {useState} from "react";
import {BsFillMoonStarsFill, BsFillSunFill} from "react-icons/bs";
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import Image from "next/image";

import avatar from "../public/avatar.jpg"

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode?"dark":""}>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main className="bg-white px-10 dark:bg-gray-700 dark:text-white">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">Abhi Trivedi</h1>
            <ul className="flex items-center">
              <li>
              {
                darkMode ? 
                <BsFillSunFill onClick={()=>setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/>
                : <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/>
              }
                
              </li>
              <li><a href="#" className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8">Resume</a></li>
            </ul>
          </nav>

          {/* simple introduction */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-500 font-medium">Abhi Trivedi</h2>
            <h3 className="text-2xl py-2">Information Technology</h3>
            
          </div>

          {/* icons */}
          <div className="text-5xl flex justify-center gap-16 py-13 text-gray-600 dark:text-white">
            <AiFillLinkedin/>
            <AiFillGithub />
          </div>

          {/* Avatar */}
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={avatar} width={400} height={400}></Image>
          </div>
        </section>

        {/* projects */}
        <section>
          <div></div>
        </section>
      </main>
    </div>
  )
}
