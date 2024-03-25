import React from 'react';

export default function SearchBar() {
    return (
        <form>
            <label className='relative mt-2 md:mt-0' htmlFor='search-form'>
                <input
                    className='w-full rounded-2xl bg-white py-1.5 pl-12 pr-6'
                    id='search-form'
                    type='search'
                    placeholder='Search Event, Attendees and Venues...'
                />
                <svg
                    className='absolute left-4 top-0 h-4 w-4'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                >
                    <path d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z' />
                </svg>
            </label>
        </form>
    );
}