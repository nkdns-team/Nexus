import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

import styles from '@/styles/NexusUI/MessageList.module.css'

export default function MessageList() {
	const messages = [
		{ id: 1, sender: "test", content: "test msg", time: "2024/2/28 11:47:50" },
		{ id: 2, sender: "test", content: "test", time: "2024/2/28 11:48:25" },
		{ id: 3, sender: "user", content: "test msg", time: "2024/2/28 12:11:02" },
		{ id: 4, sender: "test", content: "ok", time: "19:00:30" },
		{ id: 5, sender: "user", content: "test msg", time: "19:24:55" },
	];

	return (
		<div className={styles.container}>
			<ScrollArea className={styles.scrollArea}>
				{messages.map((message) => (
					<div key={message.id}
						 className={`${styles.messageWrapper} ${message.sender === "user" ? styles.userMessage : ''}`}>
						<div
							className={`${styles.messageContent} ${message.sender === "user" ? styles.userMessageContent : styles.otherMessageContent}`}>
							{message.content}
						</div>
						<div className={styles.messageTime}>{message.time}</div>
					</div>
				))}
			</ScrollArea>
		</div>
	);
}
