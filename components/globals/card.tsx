'use client';

import React from 'react';
import Image from 'next/image';

type PostProps = {
    post: {
        name: string;
        slug: string;
        data: {
            scheduled_dates: string[];
        };
    };
    index: number;
};

type Loader = {
    src: string;
};

export default function Card({ post, index }: PostProps) {

    const myLoader = ({ src }: Loader) => {
        return `https://source.unsplash.com/featured/300x30${index}?q=80`;
    };

    return (
        <a
            title={`Click here to find more infomration about ${post.name}`}
            href={post.slug}
            className="relative block h-full rounded-b-xl bg-white pb-4 pl-4 pr-4 pt-6 shadow-md"
        >
            <figure className='relative block h-48 w-full overflow-hidden xs:h-32 md:h-48 lg:h-32'>
                <Image
                    width={300}
                    height={300}
                    loader={myLoader}
                    src='source.unsplash.com'
                    alt='Eventogy logo'
                />
            </figure>
            <h2 className='my-4 block text-lg'>{post.name}</h2>
        </a>
    );

}