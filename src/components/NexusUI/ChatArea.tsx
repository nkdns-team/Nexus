import React from 'react'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageInput from './MessageInput'

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