import React, { useContext, useState } from "react";
import VerticalSidebar from "../components/NexusUI/VerticalSidebar";
import ChatList from "../components/NexusUI/ChatList";
import ChatArea from "../components/NexusUI/ChatArea";

import styles from "@/styles/NexusUI/MainPage.module.css";
import { WindowStatusContext } from "@/components/Contexts/WindowStatusContext";

export default function MainPage() {
	const [selectedChat, setSelectedChat] = useState("test");

	const status: WindowStatus = useContext(WindowStatusContext);

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
