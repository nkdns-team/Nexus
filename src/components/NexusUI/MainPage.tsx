import React from 'react'
import VerticalSidebar from './VerticalSidebar'
import ChatList from './ChatList'
import ChatArea from './ChatArea'
import { useState } from 'react'

export default function MainPage() {
  const [selectedChat, setSelectedChat] = useState('test')

  return (
    <div
      className="flex bg-gray-100"
    >
      <VerticalSidebar />
      <ChatList selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
      <ChatArea selectedChat={selectedChat} />
    </div>
  )
}
