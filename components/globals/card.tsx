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

    // Setting classes here for svg to avoid duplicate code
    const svgStyle = 'w-4 fill-neutral-400';

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
            <p className='text-sm'>London</p>
            <div className='mt-6 flex justify-between'>
                <svg
                    className={svgStyle}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'
                >
                    <path d='M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z' />
                </svg>
                <svg
                    className={svgStyle}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                >
                    <path d='M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z' />
                </svg>
            </div>
        </a>
    );

}