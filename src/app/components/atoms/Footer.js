"use client";

import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import { FaCode } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-gray rounded-[30px] dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a
                        href="#"
                        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        <div className="bg-gradient-to-r from-blue-900 to-sky-600 p-2 rounded-lg">
                            <FaCode className="text-white text-2xl" />
                        </div>
                        <span className="px-3 self-center text-2xl font-bold whitespace-nowrap bg-gradient-to-r from-blue-900 to-sky-600 bg-clip-text text-transparent dark:text-white">
                            CodeYatra
                        </span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <p
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                amolrathod5655@gmail.com
                            </p>
                        </li>
                        <li>
                            <p
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                Bengaluru, India
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                    <a
                        href="https://www.linkedin.com/in/amol-rathod-b84746281/"
                        target="_blank"
                        aria-label="Amol Rathod's LinkedIn profile"
                        rel="noopener noreferrer"
                        className="mr-5 group w-10 hover:w-44 h-10 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-7 before:hover:left-40 before:w-5 before:h-5 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45"
                    >
                        <svg
                            y="0"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0"
                            width="24"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="xMidYMid meet"
                            height="24"
                            className="shrink-0 fill-neutral-50"
                        >
                            <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
                        </svg>
                        <span className="origin-left text-[13px] inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                            Amol Rathod
                        </span>
                    </a>

                    <a
                        href="https://github.com/AmolRathod18"
                        target="_blank"
                        aria-label="Amol Rathod's GitHub profile"
                        className="flex gap-3 items-center cursor-pointer text-neutral font-tight text-xl bg-gradient-to-r from-gray-800 to-black px-5 py-2 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            height="24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="#FFFFFF"
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                            ></path>
                        </svg>
                        Github
                    </a>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    ©2025 Amol Rathod
                </span>
            </div>
        </footer>
    );
};
