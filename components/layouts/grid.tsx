import React from 'react';

type ChildrenProps = {
  children: React.ReactNode;
};

export default function Grid({ children }: ChildrenProps) {
  return (
    <ul className='grid auto-rows-max gap-6 xs:grid-cols-2 lg:grid-cols-4'>
      {children}
    </ul>
  );
}
