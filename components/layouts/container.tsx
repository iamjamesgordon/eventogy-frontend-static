import React from 'react';

type ChildrenProps = {
    children: React.ReactNode;
};

export default function Container({children}: ChildrenProps) {
    return (
        <div className='relative mx-auto w-full max-w-7xl px-4 md:px-10'>
            {children}
        </div>
    );
}