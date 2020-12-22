import React from 'react';
import SidebarRow from './SidebarRow';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

import './css/Sidebar.css';
const Sidebar = () => {
	return (
		<div className='sidebar'>
			<SidebarRow
				src='https://avatars0.githubusercontent.com/u/62337866?s=460&u=668648f1129b2589d5c27a650268aa69ede9db40&v=4'
				title='Tehman'
			/>
			<SidebarRow
				src=''
				title='Covid-19 Information'
				Icon={LocalHospitalOutlinedIcon}
			/>
			<SidebarRow src='' title='Pages' Icon={EmojiFlagsIcon} />
			<SidebarRow src='' title='Friends' Icon={PeopleAltOutlinedIcon} />
			<SidebarRow
				src=''
				title='Messanger'
				Icon={ChatBubbleOutlineOutlinedIcon}
			/>
			<SidebarRow src='' title='Videos' Icon={VideoLibraryOutlinedIcon} />
			<SidebarRow src='' title='More' Icon={ExpandMoreOutlinedIcon} />
		</div>
	);
};

export default Sidebar;
