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
};

export default function Card({ post }: PostProps) {

    return (
        <a
            title={`Click here to find more infomration about ${post.name}`}
            href={post.slug}
            className="relative block h-full rounded-b-xl bg-white pb-4 pl-4 pr-4 pt-6 shadow-md"
        >
            <h2 className='my-4 block text-lg'>{post.name}</h2>
        </a>
    );

}