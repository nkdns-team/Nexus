import React, { useState } from "react";
import VerticalSidebar from "./VerticalSidebar";
import ChatList from "./ChatList";
import ChatArea from "./ChatArea";

import styles from '@/styles/NexusUI/MainPage.module.css'

export default function MainPage() {
	const [selectedChat, setSelectedChat] = useState("test");

	return (
		<div
			className={styles.container}
		>
			<VerticalSidebar />
			<ChatList selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
			<ChatArea selectedChat={selectedChat} />
		</div>
	);
}
