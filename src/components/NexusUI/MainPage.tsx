import React, { useContext, useState } from "react";
import VerticalSidebar from "./VerticalSidebar";
import ChatList from "./ChatList";
import ChatArea from "./ChatArea";

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
