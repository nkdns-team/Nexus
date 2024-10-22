import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

import styles from '@/styles/NexusUI/VerticalSidebar.module.css'

export default function VerticalSidebar() {
	return (
		<div className={styles.sidebar}>
			<Avatar className={styles.avatar}>
				<AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
				<AvatarFallback>U</AvatarFallback>
			</Avatar>
			<div className={styles.spacer}></div>
			<Button variant="ghost" size="icon" className={styles.settingsButton} aria-label="Settings">
				<Settings className={styles.settingsIcon} />
			</Button>
		</div>
	);
}
