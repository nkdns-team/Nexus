import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Paperclip, Send, Smile } from "lucide-react";

export default function MessageInput() {
	return (
		<div className="bg-white p-4 border-t flex items-center">
			<Button variant="ghost" size="icon">
				<Smile className="h-6 w-6" />
			</Button>
			<Button variant="ghost" size="icon">
				<Paperclip className="h-6 w-6" />
			</Button>
			<Input className="flex-1 mx-2" placeholder="输入消息..." />
			<Button variant="ghost" size="icon">
				<Mic className="h-6 w-6" />
			</Button>
			<Button variant="ghost" size="icon">
				<Send className="h-6 w-6" />
			</Button>
		</div>
	);
}
