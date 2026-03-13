'use client'

import { useState } from 'react'
import { ChatList } from '@/components/chat/chat-list'
import { ChatRoom } from '@/components/chat/chat-room'

interface Message {
  id: string
  author: string
  avatar?: string
  content: string
  timestamp: Date
  isOwn: boolean
}

interface ChatGroup {
  id: string
  name: string
  badge: string
  members: number
  unread: number
  lastMessage: string
  avatar?: string
  messages: Message[]
}

const mockGroups: ChatGroup[] = [
  {
    id: 'forex-batch1',
    name: 'Forex Trading Batch 1',
    badge: 'Batch 1',
    members: 24,
    unread: 5,
    lastMessage: 'Anyone analyzed the USD movement today?',
    messages: [
      {
        id: '1',
        author: 'Mentor Jean',
        content: 'Welcome to the Forex Trading forum! This is where we discuss trading strategies, market analysis, and support each other.',
        timestamp: new Date(Date.now() - 3600000),
        isOwn: false,
      },
      {
        id: '2',
        author: 'You',
        content: 'Thanks! Looking forward to learning from everyone here.',
        timestamp: new Date(Date.now() - 3000000),
        isOwn: true,
      },
      {
        id: '3',
        author: 'Sarah K',
        content: 'The GBP/USD pair is looking interesting today',
        timestamp: new Date(Date.now() - 2400000),
        isOwn: false,
      },
      {
        id: '4',
        author: 'Ahmed M',
        content: 'I noticed the resistance level at 1.2750',
        timestamp: new Date(Date.now() - 1800000),
        isOwn: false,
      },
      {
        id: '5',
        author: 'Mentor Jean',
        content: 'Good observation! What timeframe are you trading on?',
        timestamp: new Date(Date.now() - 1200000),
        isOwn: false,
      },
      {
        id: '6',
        author: 'Ahmed M',
        content: 'Primarily 4-hour and daily charts',
        timestamp: new Date(Date.now() - 600000),
        isOwn: false,
      },
      {
        id: '7',
        author: 'You',
        content: 'Anyone analyzed the USD movement today?',
        timestamp: new Date(Date.now() - 300000),
        isOwn: true,
      },
    ],
  },
  {
    id: 'digital-marketing-batch1',
    name: 'Digital Marketing Batch 1',
    badge: 'Batch 1',
    members: 18,
    unread: 2,
    lastMessage: 'How do you approach TikTok content strategy?',
    messages: [
      {
        id: '1',
        author: 'Mentor Alex',
        content: 'Welcome to Digital Marketing! Share your wins, ask questions, and grow together.',
        timestamp: new Date(Date.now() - 7200000),
        isOwn: false,
      },
      {
        id: '2',
        author: 'You',
        content: 'Hi everyone! Excited to be here',
        timestamp: new Date(Date.now() - 6600000),
        isOwn: true,
      },
      {
        id: '3',
        author: 'Maria L',
        content: 'How do you approach TikTok content strategy?',
        timestamp: new Date(Date.now() - 900000),
        isOwn: false,
      },
      {
        id: '4',
        author: 'Mentor Alex',
        content: 'Great question! TikTok is all about authenticity and consistency',
        timestamp: new Date(Date.now() - 300000),
        isOwn: false,
      },
    ],
  },
  {
    id: 'forex-advanced',
    name: 'Forex Trading Advanced',
    badge: 'Advanced',
    members: 12,
    unread: 0,
    lastMessage: 'Risk management is key to long-term success',
    messages: [
      {
        id: '1',
        author: 'Mentor Jean',
        content: 'Advanced traders discussing complex strategies',
        timestamp: new Date(Date.now() - 86400000),
        isOwn: false,
      },
    ],
  },
]

export default function LearnerForumPage() {
  const [selectedGroupId, setSelectedGroupId] = useState('forex-batch1')
  const [groups, setGroups] = useState(mockGroups)

  const selectedGroup = groups.find((g) => g.id === selectedGroupId)

  const handleSendMessage = (content: string) => {
    if (!selectedGroup) return

    const newMessage: Message = {
      id: Date.now().toString(),
      author: 'You',
      content,
      timestamp: new Date(),
      isOwn: true,
    }

    setGroups(
      groups.map((g) => {
        if (g.id === selectedGroupId) {
          return {
            ...g,
            messages: [...g.messages, newMessage],
            lastMessage: content,
            unread: 0,
          }
        }
        return g
      })
    )
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Chat List Sidebar */}
      <div className="w-80 hidden md:flex">
        <ChatList groups={groups} selectedId={selectedGroupId} onSelect={setSelectedGroupId} />
      </div>

      {/* Chat Room */}
      <div className="flex-1 flex flex-col">
        {selectedGroup ? (
          <ChatRoom
            groupId={selectedGroup.id}
            groupName={selectedGroup.name}
            badge={selectedGroup.badge}
            members={selectedGroup.members}
            messages={selectedGroup.messages}
            onSendMessage={handleSendMessage}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            <p>Select a forum to start chatting</p>
          </div>
        )}
      </div>
    </div>
  )
}
