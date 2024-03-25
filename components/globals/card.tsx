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

function dateFormat(date: string) {
    const newDate = new Date(Date.parse(date.replace(' ', 'T')));

    const weekDay = newDate.toLocaleDateString('en-UK', { weekday: 'long' });
    const day = newDate.toLocaleDateString('en-UK', { day: 'numeric' });
    const month = newDate.toLocaleDateString('en-UK', { month: 'long' });
    const year = newDate.toLocaleDateString('en-UK', { year: 'numeric' });

    return weekDay + " " + day + " " + month + ", " + year
}

export default function Card({ post, index }: PostProps) {

    const myLoader = ({ src }: Loader) => {
        return `https://${src}/featured/600x600?q=8${index}/`;
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
                    width={600}
                    height={600}
                    loader={myLoader}
                    src='source.unsplash.com'
                    alt='Eventogy logo'
                    blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACeAJ4DASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAHBABAQEBAQEBAQEAAAAAAAAAAAECERIDITFB/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAECETH/2gAMAwEAAhEDEQA/ADDQsNFHiZUh4nDwXTk8NCwYMWyZgEysYGAx2pRpaaMzAxoWszMeJ0WZjROswsYrkh4nDxwccmVIeEh4zpyaGhYJl8mYA6KsHoWhaFoma0LQtL0RN1ul63TQtMJZRh4nTQQhoeEsZhYS8cEp8pT+q5cfHDhSHicPG46snglg9Nx0ZN0LQ6FoqxrS2haW1jjaXpbS2synW6n0ZTQtVlNE5T5PCWKQ0LDw8LwRaCwceVFMpKZc/HnYVh5U5TShx1ZUlbpet03HRk1pbQtLaKsa0lrWp3QHg3RfRbovoo8U6aVGU+aMLYvmqZQzVsqQnFcqRPKkUgcNDBBZuPHUylFJUHl4ikp5UpTSs68qdbpOt0y+RtLaFpLWWjaqetNrSetFp5Bui+iWh0lHisp81CVXNGFsdGarmoYq2FIXi+Vco5VyrA4eGLBZuPGh5SGlQeZmHlN1OUes6Mn61pOhdGXya1PWmuk7plo2qnqjqp2lqka0Oh1onaKmaplLKuWlLV8LZQytlXJF81TNRzVJVYCspupym6Znkt0G65uvPkN1ul6HRVyboXRLot0K+TXRLot0W6bq0G0toWgS1SCMCHkStY2YrkmYpmDC1TKuUsqZVyVbNPKlKaVaArKbqUo+jM84OsFrk64uNaW1rSWj08G6JdF1pO6N1XJ7ovol0HoLV8qdNE5VMp2nPIfMDMUzCAOYpIEh5DQBh4WCrCnlHpOt1WAp0fSXpvR2coUS1x9cvC6qWqfVQ3W6wa0lrYb0jrQ9NmqezTTm9/qmNFunTl1Zq2HPh0YJ062YpmExFcxgNIeQJDQ8BmEKpCh0LWpbVIA9b0S0vTgUtMWuNFLSH0q+3N9GLUd1DdW259p6qmIS39W+dc/+r/ImvF47Pm6sOX5Or5tmnXwtlLCuVICkEIZSFAKYtPAJSWn0npSAW0vWoHhX/9k='
                    placeholder='blur'
                />
            </figure>
            <h2 className='my-4 block text-lg'>{post.name}</h2>
            <div className=''>
                {post.data.scheduled_dates?.map((date, index) => {
                    return (
                        <time
                            key={index}
                            className="block text-sm text-neutral-400"
                            dateTime={date}
                        >
                                {dateFormat(date)}
                        </time>
                    );
                })}
            </div>
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