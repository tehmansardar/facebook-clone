import React from 'react';
import { Avatar } from '@material-ui/core';

import './css/Story.css';

const Story = ({ image, profileSrc, title }) => {
	return (
		<div style={{ backgroundImage: `url(${image})` }} className='story'>
			<Avatar src={profileSrc} className='storyAvatar' />
			<h4>{title}</h4>
		</div>
	);
};

export default Story;
