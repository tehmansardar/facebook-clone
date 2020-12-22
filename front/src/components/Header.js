import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './css/Header.css';
import { Avatar, IconButton } from '@material-ui/core';
const Header = () => {
	return (
		<div className='header'>
			<div className='header__left'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
					alt='Logo'
					className='header__icon'
				/>
				<div className='header__input'>
					<SearchIcon />
					<input type='text' placeholder='Facebook search' />
				</div>
			</div>

			<div className='header__center'>
				<div className='header__option header__option--hover '>
					<HomeIcon fontSize='large' />
				</div>
				<div className='header__option'>
					<FlagIcon fontSize='large' />
				</div>
				<div className='header__option'>
					<SubscriptionsIcon fontSize='large' />
				</div>
				<div className='header__option'>
					<StorefrontIcon fontSize='large' />
				</div>
				<div className='header__option'>
					<SupervisedUserCircleIcon fontSize='large' />
				</div>
			</div>
			<div className='header__right'>
				<div className='header__info'>
					<Avatar src='https://avatars0.githubusercontent.com/u/62337866?s=460&u=668648f1129b2589d5c27a650268aa69ede9db40&v=4' />
					<h4>Tehman</h4>
				</div>
				<IconButton>
					<AddIcon />
				</IconButton>
				<IconButton>
					<ForumIcon />
				</IconButton>
				<IconButton>
					<NotificationsActiveIcon />
				</IconButton>
				<IconButton>
					<ExpandMoreIcon />
				</IconButton>
			</div>
		</div>
	);
};

export default Header;
