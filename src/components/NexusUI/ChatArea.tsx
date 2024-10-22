import React, { useContext, useEffect } from "react";
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageInput from './MessageInput'
import { WindowStatusContext } from "@/components/Contexts/WindowStatusContext";

interface ChatAreaProps {
  selectedChat: string
}

export default function ChatArea({ selectedChat }: ChatAreaProps) {
  return (
    <div className="flex-1 flex flex-col">
      <ChatHeader selectedChat={selectedChat} />
      <MessageList />
      <MessageInput />
    </div>
  )
}
