import React from 'react';

type ChildrenProps = {
    children: React.ReactNode;
};

export default function Container({children}: ChildrenProps) {
    return (
        <div>{children}</div>
    );
}