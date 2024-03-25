import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EventogyLogo from '../../public/eventogy-logo.svg';

export default function Logo() {
    return (
        <Link
            href={{pathname: '/'}}
            title='Eventogy frontend test home'
            className='mb-4 md:mb-0'
        >
            <Image
                width={150}
                src={EventogyLogo}
                alt='The Eventogy logo'
            />
        </Link>
    );
}