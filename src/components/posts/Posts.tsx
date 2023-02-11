import React, { useRef, useState } from 'react';
import PostCard from './PostCard';
import SendPost from '../posts/SendPost';
import { Button } from '@material-tailwind/react';
import { useFetchDB } from '../../hooks/useFetch';
import { IPost } from './types';
import { toast } from 'react-toastify';

function Posts() {
	const [openPostFields, setOpenPostFields] = useState<boolean>(false);
	const postRef = useRef<HTMLDivElement>(null);
	const posts: IPost[] = useFetchDB('posts', 'desc');
	return (
		<div className="flex flex-col h-full relative">
			
			<div className="flex top-0 z-200 w-full justify-end">
				{openPostFields ? (
					<SendPost setOpenPostFields={setOpenPostFields} />
				) : (
					<Button className="" onClick={() => setOpenPostFields(true)}>
						POST
					</Button>
				)}
			</div>
			<div
				ref={postRef}
				className="relative overflow-y-auto flex flex-col scrollbar-hide md:scrollbar-default scroll-bar"
			>
				{posts?.map((post: IPost) => (
					<PostCard
						id={post.id}
						key={post.id}
						text={post.text}
						photoURL={post.photoURL}
						uid={post.uid}
						createdAt={post.createdAt}
						likes={post.likes}
						comments={post.comments}
						timeStamp={post.timeStamp}
					/>
				))}
			</div>
		</div>
	);
}

export default Posts;
