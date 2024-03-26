import React from 'react';
import Image from "next/image";
import LoadingIcon from "../../public/loading.gif";

export default function Loader() {
    return (
        <div className='w-full h-32 flex justify-center items-center'>
            <Image
                width={200}
                height={50}
                src={LoadingIcon}
                alt="Loading gif for delayed fetch"
            />
        </div>
    );
}