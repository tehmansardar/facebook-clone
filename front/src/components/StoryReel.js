import React from 'react';
import Story from './Story';
import './css/StoryReel.css';
const StoryReel = () => {
	return (
		<div className='storyReel'>
			<Story
				image='https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/113d1046-6bdc-4475-a781-99f6cf7d1acd/001-understand-yourself-large-opt.png'
				profileSrc='https://avatars0.githubusercontent.com/u/62337866?s=460&u=668648f1129b2589d5c27a650268aa69ede9db40&v=4'
				title='Zeeshan'
			/>
			<Story
				image='https://img.freepik.com/free-vector/young-people-jumping-together-illustration_52683-27019.jpg?size=626&ext=jpg'
				profileSrc='https://i.pinimg.com/originals/f1/3f/e9/f13fe9b1a6c7a6eea91f9c5f13852989.jpg'
				title='Rachel'
			/>
			<Story
				image='https://cms.qz.com/wp-content/uploads/2020/02/friends-cast-e1582558282192.jpeg?quality=75&strip=all&w=1200&h=900&crop=1'
				profileSrc='https://tvguide1.cbsistatic.com/i/r/2020/01/08/77d4bbb1-0ff6-4065-8929-bf9d30744d76/thumbnail/600x404/9942fff1eb1e1a77992e20bf7880fd18/friends-perry-now.jpg'
				title='TV Guide'
			/>
		</div>
	);
};

export default StoryReel;
