'use client';

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

import { useRouter } from 'next/navigation';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { FaUserAlt } from 'react-icons/fa';
import Button from './Button';
import useAuthModal from '@/hooks/useAuthModal';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useUser } from '@/hooks/useUser';
import toast from 'react-hot-toast';

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const authModal = useAuthModal();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    //TODO: reset any playing songs
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Logged out!');
    }
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
          {user ? (
            <div className="flex gap-x-4 items-center text-black">
              <Button
                onClick={handleLogout}
                className="bg-white px-6 py-2">
                Logout
              </Button>
              <Button
                onClick={() => router.push('/account')}
                className="bg-white">
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <Button
                onClick={authModal.onOpen}
                className="
          bg-transparent
          text-neutral-300
          font-medium">
                Sign up
              </Button>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="bg-white px-6 py-2 text-black">
                  Login
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
