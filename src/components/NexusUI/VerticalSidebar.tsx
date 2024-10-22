import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export default function VerticalSidebar() {
	return (
		<div className="w-16 bg-gray-800 flex flex-col items-center py-4">
			<Avatar className="h-10 w-10 mb-8">
				<AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
				<AvatarFallback>U</AvatarFallback>
			</Avatar>
			<div className="flex-grow"></div>
			<Button variant="ghost" size="icon" className="text-white">
				<Settings className="h-6 w-6" />
			</Button>
		</div>
	);
}
