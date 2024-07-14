"use client";
import  { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { getProviders, signOut, signIn, useSession } from 'next-auth/react';
const NavMobile = () => {
    const { data: session, status } = useSession();
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const setUpProviders = async () => {
        const response = await getProviders();
        setProviders(response);
        };
        setUpProviders();
    }, []);

  return (
    <div className='sm:hidden flex relative'>
    {session?.user ? (
      <div className='flex'>
        <Image
          src={session?.user.image}
          width={37}
          height={37}
          className="rounded-full"
          alt="Profile"
          onClick={() => setToggleDropdown((prev) => !prev)}
        />

        {toggleDropdown && (
          <div className='dropdown'>
            <Link
              href="/profile"
              className='dropdown_link'
              onClick={() => setToggleDropdown(false)}
            >
              My Profile
            </Link>
            <Link
              href="/create-prompt"
              className='dropdown_link'
              onClick={() => setToggleDropdown(false)}
            >
              Create Prompt
            </Link>
            <button
              type="button"
              onClick={() => {
                setToggleDropdown(false);
                signOut();
              }}
              className='mt-5 w-full outline_btn'
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    ) : (
      providers && Object.values(providers).map((provider) => (
        <button
          type="button"
          key={provider.name}
          onClick={() => signIn(provider.id)}
          className="outline_btn"
        >
          Sign In
        </button>
      ))
    )}
  </div>
  )
}

export default NavMobile