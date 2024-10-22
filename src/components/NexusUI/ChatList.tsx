import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus } from "lucide-react";

interface ChatListProps {
	selectedChat: string;
	setSelectedChat: (chat: string) => void;
}

export default function ChatList({ selectedChat, setSelectedChat }: ChatListProps) {
	const chats = [
		{
			id: 1,
			name: "test",
			avatar: "/placeholder.svg?height=40&width=40",
			lastMessage: "test",
			time: "19:25",
			unread: 7,
		},
		{
			id: 2,
			name: "test1",
			avatar: "/placeholder.svg?height=40&width=40",
			lastMessage: "test",
			time: "19:01",
			unread: 0,
		},
		{
			id: 3,
			name: "test2",
			avatar: "/placeholder.svg?height=40&width=40",
			lastMessage: "test",
			time: "18:54",
			unread: 0,
		},
	];

	return (
		<div className="w-80 bg-white border-r">
			<div className="p-4 border-b flex items-center">
				<Input placeholder="搜索" className="w-full mr-2" />
				<Button variant="ghost" size="icon">
					<Plus className="h-6 w-6" />
				</Button>
			</div>
			<ScrollArea className="h-[calc(100vh-68px-32px-5px)]">
				{chats.map((chat) => (
					<div
						key={chat.id}
						className={`flex items-center p-4 cursor-pointer hover:bg-gray-100 ${selectedChat === chat.name ? "bg-blue-50" : ""}`}
						onClick={() => setSelectedChat(chat.name)}
					>
						<Avatar className="h-10 w-10">
							<AvatarImage src={chat.avatar} alt={chat.name} />
							<AvatarFallback>{chat.name[0]}</AvatarFallback>
						</Avatar>
						<div className="ml-3 flex-1">
							<div className="flex justify-between">
								<span className="font-semibold">{chat.name}</span>
							</div>
							<p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
						</div>
						<div className="flex flex-col items-end">
							<span className="text-xs text-gray-500 mb-1">{chat.time}</span>
							{chat.unread > 0 && (
								<div
									className="bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
									{chat.unread}
								</div>
							)}
						</div>
					</div>
				))}
			</ScrollArea>
		</div>
	);
}
