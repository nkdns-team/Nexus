import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import styles from "@/styles/NexusUI/ChatHeader.module.css";

interface ChatHeaderProps {
	selectedChat: string;
}

export default function ChatHeader({ selectedChat }: ChatHeaderProps) {
	return (
		<div className={styles.container}>
			<Avatar className={styles.avatar}>
				<AvatarImage src="/placeholder.svg?height=40&width=40" alt={selectedChat} />
				<AvatarFallback>{selectedChat[0]}</AvatarFallback>
			</Avatar>
			<span className={styles.chatName}>{selectedChat}</span>
		</div>
	);
}
