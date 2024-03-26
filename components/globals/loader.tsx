import React from 'react';
import Image from 'next/image';
import LoadingIcon from '../../public/loading.gif';

export default function Loader() {
  return (
    <div className='flex h-32 w-full items-center justify-center'>
      <Image
        width={200}
        height={50}
        src={LoadingIcon}
        alt='Loading gif for delayed fetch'
      />
    </div>
  );
}
