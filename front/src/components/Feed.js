import React from 'react';
import './css/Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

const Feed = () => {
	return (
		<div className='feed'>
			<StoryReel />
			<MessageSender />
			<Post
				profilePic='https://avatars0.githubusercontent.com/u/62337866?s=460&u=668648f1129b2589d5c27a650268aa69ede9db40&v=4'
				message='This is the 1st post'
				timestamp='11164562658'
				imgValue=''
				username='temi'
			/>
			<Post
				profilePic='https://avatars0.githubusercontent.com/u/62337866?s=460&u=668648f1129b2589d5c27a650268aa69ede9db40&v=4'
				message='This is the 1st post'
				timestamp='11164562658'
				imgValue=''
				username='temi'
			/>
			<Post
				profilePic='https://avatars0.githubusercontent.com/u/62337866?s=460&u=668648f1129b2589d5c27a650268aa69ede9db40&v=4'
				message='This is the 1st post'
				timestamp='11164562658'
				imgValue=''
				username='temi'
			/>
		</div>
	);
};

export default Feed;
