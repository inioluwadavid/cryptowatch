
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [clientWindowHeight, setClientWindowHeight] = useState("");
    const [changeBg, setChangeBg] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    });
  
    const handleScroll = () => {
      setClientWindowHeight(window.scrollY);
    };

    useEffect(() =>{
      let backgroundTransparacyVar = clientWindowHeight / 50;
      if (backgroundTransparacyVar < 1) {
          setChangeBg(true)
      }
      else{
        setChangeBg(false)
      }
    }, [clientWindowHeight])

    return (
        <nav className= {changeBg ? `w-full bg-black  md:bg-transparent fixed z-50 `: `w-full bg-black  fixed z-50 ` }>
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a >
                        
                            <Image src='/logoo.png' width='174' className=" pt-3" height='40'  alt=" logo" />
                            
                            
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2  text-white rounded-md outline-none focus:border-white focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 text-white h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 text-white h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                    <div className=" flex justify-evenly">
                        <ul className="items-start justify-start space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-gray-700">
                                <Link href='#home'>
                                <a >Home</a>
                                </Link>
                            </li>
                            <li className="text-white hover:text-gray-700">
                            <Link href='#market'>
                                <a >Market</a>
                                </Link>
                            </li>
                            <li className="text-white hover:text-gray-700">
                            <Link href='#blog'>
                                <a >Blog</a>
                                </Link>
                            </li>
                          
                            <li className="text-white hover:text-gray-700">
                            <Link href='#features'>
                                <a >Features</a>
                                </Link>
                            </li>
                        </ul>
                          
                        </div>
                    </div>
                </div>
                <div className=" hidden md:flex md:order-2">
                <button type="button" className=" text-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-md  font-medium border-2 border-blue-500 rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Get started</button>
                </div>
            </div>
        </nav>
  
    );
}