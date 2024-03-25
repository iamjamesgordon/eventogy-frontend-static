import React from 'react';

type ButtonProps = {
    label: string;
    icon?: string;
    iconPos: 'right' | 'left';
    rounded: 'lg' | 'xl';
    active?: boolean | undefined;
    styles?: string | undefined;
};

export default function ButtonRounded({label, icon, iconPos, rounded, active, styles}: ButtonProps){

    let BtnClasses = 'flex items-center justify-between m-0 py-2 px-4 ' + styles;
    BtnClasses = rounded == 'lg' ? BtnClasses + ' rounded-lg ' : BtnClasses + ' rounded-full ';
    BtnClasses = active ? BtnClasses + ' bg-eventogy-blue border-2 border-transparent ' : BtnClasses + ' border-2 border-black ';

    let labelClasses = ' ';
    labelClasses = iconPos == 'right' ? labelClasses + ' mr-4 ' : labelClasses + ' ml-4 ';
    labelClasses = active ? labelClasses + ' text-white ' : labelClasses;

    let IconClasses = 'w-auto h-4 ';
    IconClasses = active ? IconClasses + ' fill-white ' : IconClasses;

    if (icon == 'calendar') {
        return (
            <button className={BtnClasses}>
                {iconPos == 'right' ? (
                    <>
                        <span className={labelClasses}>{label}</span>
                        <svg
                            className={IconClasses}
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 448 512'
                        >
                            <path d='M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z' />
                        </svg>
                    </>
                ) : (
                    <>
                        <svg
                            className={IconClasses}
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 448 512'
                        >
                            <path d='M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z' />
                        </svg>
                        <span className={labelClasses}>{label}</span>
                    </>
                )}
            </button>
        );
    } else if (icon == 'template') {
        return (
            <button className={BtnClasses}>
                {iconPos == 'right' ? (
                    <>
                        <span className={labelClasses}>{label}</span>
                        <svg
                            className={IconClasses}
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 576 512'
                        >
                            <path d='M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z' />
                        </svg>
                    </>
                ) : (
                    <>
                        <svg
                            className={IconClasses}
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 576 512'
                        >
                            <path d='M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z' />
                        </svg>
                        <span className={labelClasses}>{label}</span>
                    </>
                )}
            </button>
        );
    } else if (icon == 'archives') {
        return (
            <button className={BtnClasses}>
                {iconPos == 'right' ? (
                    <>
                        <span className={labelClasses}>{label}</span>
                        <svg
                            className={IconClasses}
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                        >
                            <path d='M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z' />
                        </svg>
                    </>
                ) : (
                    <>
                        <svg
                            className={IconClasses}
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                        >
                            <path d='M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z' />
                        </svg>
                        <span className={labelClasses}>{label}</span>
                    </>
                )}
            </button>
        );
    } else {
        return (
            <button className={BtnClasses}>
                {iconPos == 'right' ? (
                    <>
                        <span className={labelClasses}>{label}</span>
                        <svg
                            className={`${IconClasses} rotate-180`}
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 448 512'
                        >
                            <path d='M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z' />
                        </svg>
                    </>
                ) : (
                    <>
                        <svg
                            className={IconClasses}
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 448 512'
                        >
                            <path d='M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z' />
                        </svg>
                        <span className={`${labelClasses} rotate-180`}>{label}</span>
                    </>
                )}
            </button>
        );
    }
}