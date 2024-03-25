import React from 'react';
import Button from './button';

export default function Filter() {
    return (
        <div className='block flex-col py-6 sm:flex sm:justify-between lg:flex-row'>
            <div className='mb-4 flex flex-wrap align-middle lg:mb-0'>
                <Button>Events</Button>
                <Button>Templates</Button>
                <Button>Archive</Button>
            </div>
            <div className='flex flex-wrap align-middle'>
                <Button>Grid</Button>
                <Button>List</Button>
                <Button>Sliders</Button>
                <Button>Create New</Button>
            </div>
        </div>
    );
}