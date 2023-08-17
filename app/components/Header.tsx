'use client';

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

import { useRouter } from 'next/navigation';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import Button from './Button';

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const handleLogout = () => {
    //logout
  };

  return (
    <div
      className={twMerge(
        `
  h-fit
  bg-gradient-to-b
  from-emerald-800
  p-6`,
        className
      )}>
      <div className="w-full mb-4 flex item-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button>
            <RxCaretLeft
              className="text-white rounde-full bg-black flex 
              items-center
              justify-center
              rounded-full
              hover:opacity-75
              transition"
              size={35}
              onClick={() => router.back()}
            />
          </button>
          <button>
            <RxCaretRight
              className="text-white rounde-full bg-black flex 
              items-center
              justify-center
              rounded-full
              hover:opacity-75
              transition"
              size={35}
              onClick={() => router.forward()}
            />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
            
          <Button
            className="
          bg-transparent
          text-neutral-300
          font-medium">
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
