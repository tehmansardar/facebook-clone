import React, { useState } from 'react';
import { Avatar, Input } from '@material-ui/core';
import './css/MessageSender.css';
const MessageSender = () => {
	const [input, setInput] = useState('');
	const [image, setImage] = useState(null);

	const handleChange = (e) => {
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
		}
	};
	const handleSubmit = () => {
		console.log('Submitting');
	};
	return (
		<div className='messageSender'>
			<div className='messageSender__top'>
				<Avatar src='https://avatars0.githubusercontent.com/u/62337866?s=460&u=668648f1129b2589d5c27a650268aa69ede9db40&v=4' />
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						className='messageSender__input'
						placeholder="what's your mind?"
						onChange={(e) => setInput(e.target.value)}
						value={input}
					/>
					<Input
						type='file'
						className='messageSender__fileSelector'
						onChange={handleChange}
					/>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</div>
	);
};

export default MessageSender;
