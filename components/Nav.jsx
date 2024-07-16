"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getProviders, signOut, signIn, useSession } from 'next-auth/react';
import NavMobile from './NavMobile';

const Nav = () => {
  const { data: session, status } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/" className='flex gap-2 flex-center'>
        <Image 
          src="/assets/images/logo.svg"
          alt="Promptopia Logo"
          width={50}
          height={50}
          className="object-contain sm:scale-125 my-3 "
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {status === "loading" ? (
          <div>...</div> // Placeholder loading state
        ) : session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href="/create-prompt" className="black_btn shadow">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn shadow">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="Profile"
              />
            </Link>
          </div>
        ) : (
          providers && Object.values(providers).map((provider) => (
            <button
              type="button"
              key={provider.name}
              onClick={() => signIn(provider.id)}
              className="outline_btn transition duration-300 ease-in-out"
            >
              Sign In
            </button>
          ))
        )}
      </div>

      <NavMobile />
    </nav>
  );
};

export default Nav;
