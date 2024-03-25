import React from 'react';
import Container from '../layouts/container';

type ChildrenProps = {
    children: React.ReactNode;
};

export default function PageTitle({children}: ChildrenProps) {
    return (
        <div className='bg-white py-10 shadow-md'>
            <Container>
                <h1 className='text-3xl font-bold'>{children}</h1>
            </Container>
        </div>
    );
}