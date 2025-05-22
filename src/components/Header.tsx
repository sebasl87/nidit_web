'use client';

import Link from 'next/link';
import React, {useState} from 'react';
import {Transition} from '@headlessui/react';
import Image from 'next/image';
import Container from './Container';


const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-transparent fixed top-0 left-0 right-0 md:relative z-50 mx-auto w-full bg-lilac">
            <Container className="!px-0">
                <nav
                    className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center">
                    {/* Logo */}

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 items-center w-full justify-between px-5">
                        <li>

                            <Image
                                src="/niditApp-logo.webp"
                                alt="Nidit Logo"
                                width={100}
                                height={100}
                                className="mx-auto"
                            />
                        </li>
                        <li>
                            <Link href="#cta"
                                  className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors">
                                Download
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
                        <li>
                            <Link href="#cta"
                                  className="text-black bg-primary hover:bg-primary-accent px-5 py-2 rounded-full block w-fit"
                                  onClick={toggleMenu}>
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
