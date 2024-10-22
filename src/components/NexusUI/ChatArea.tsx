import React from "react";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

import styles from '@/styles/NexusUI/ChatArea.module.css'

interface ChatAreaProps {
	selectedChat: string;
}

export default function ChatArea({ selectedChat }: ChatAreaProps) {
	return (
		<div className={styles.container}>
			<ChatHeader selectedChat={selectedChat} />
			<MessageList />
			<MessageInput />
		</div>
	);
}
