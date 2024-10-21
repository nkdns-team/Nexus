import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ChatHeaderProps {
  selectedChat: string
}

export default function ChatHeader({ selectedChat }: ChatHeaderProps) {
  return (
    <div className="bg-white p-4 border-b flex items-center">
      <Avatar className="h-10 w-10">
        <AvatarImage src="/placeholder.svg?height=40&width=40" alt={selectedChat} />
        <AvatarFallback>{selectedChat[0]}</AvatarFallback>
      </Avatar>
      <span className="ml-3 font-semibold">{selectedChat}</span>
    </div>
  )
}