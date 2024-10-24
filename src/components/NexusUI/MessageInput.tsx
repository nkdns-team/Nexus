import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Paperclip, Send, Smile } from "lucide-react";

import styles from "@/styles/NexusUI/MessageInput.module.css";

export default function MessageInput() {
	return (
		<div className={styles.container}>
			<Button variant="ghost" size="icon" aria-label="Insert emoji">
				<Smile className={styles.icon} />
			</Button>
			<Button variant="ghost" size="icon" aria-label="Attach file">
				<Paperclip className={styles.icon} />
			</Button>
			<Input className={styles.input} placeholder="输入消息..." />
			<Button variant="ghost" size="icon" aria-label="Record voice message">
				<Mic className={styles.icon} />
			</Button>
			<Button variant="ghost" size="icon" aria-label="Send message">
				<Send className={styles.icon} />
			</Button>
		</div>
	);
}
