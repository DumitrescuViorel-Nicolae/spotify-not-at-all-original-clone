'use client';

import AuthModal from '@/app/components/AuthModal';
import UploadModel from '@/app/components/UploadModal';
import { useEffect, useState } from 'react';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UploadModel />
    </>
  );
};

export default ModalProvider;
