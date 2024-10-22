import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function MessageList() {
	const messages = [
		{ id: 1, sender: "test", content: "test msg", time: "2024/2/28 11:47:50" },
		{ id: 2, sender: "test", content: "test", time: "2024/2/28 11:48:25" },
		{ id: 3, sender: "user", content: "test msg", time: "2024/2/28 12:11:02" },
		{ id: 4, sender: "test", content: "ok", time: "19:00:30" },
		{ id: 5, sender: "user", content: "test msg", time: "19:24:55" },
	];

	return (
		<div className="flex-1" style={{ position: "relative" }}>
			<ScrollArea className="p-4" style={{ position: "absolute", height: "100%", width: "100%" }}>
				{messages.map((message) => (
					<div key={message.id} className={`mb-4 ${message.sender === "user" ? "text-right" : ""}`}>
						<div
							className={`inline-block p-2 rounded-lg ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
							{message.content}
						</div>
						<div className="text-xs text-gray-500 mt-1">{message.time}</div>
					</div>
				))}
			</ScrollArea>
		</div>
	);
}
