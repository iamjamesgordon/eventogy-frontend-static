import { Suspense } from 'react';
import React from 'react';
import Grid from '../layouts/grid';
import Card from './card';

type PostProps = {
    id: number;
    name: string;
    slug: string;
    data: {
        scheduled_dates: string[];
    }
}[];

async function getPosts(): Promise<PostProps> {
    try {
        const res = await fetch('https://www.eventogy.com/api/events.json');
        const posts = await res.json();
        return posts.data;
    } catch (error) {
        throw new Error('faled to fetch posts' + error);
    }
}

export default async function PostsList() {
    const posts = await getPosts();
    console.log(posts);
    return (
        <Suspense fallback={'Loading....'}>
            <Grid>
                {posts?.map((post, index) => {
                    return (
                        <li>
                        <Card post={post} index={index}></Card>
                        </li>
                    );
                })}
            </Grid>
        </Suspense>
    );
}