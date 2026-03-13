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

const mockMentorGroups: ChatGroup[] = [
  {
    id: 'forex-batch1-mentor',
    name: 'Forex Trading Batch 1',
    badge: 'Batch 1',
    members: 24,
    unread: 3,
    lastMessage: 'Excellent analysis! Keep practicing your technical skills.',
    messages: [
      {
        id: '1',
        author: 'You (Mentor)',
        content: 'Good morning everyone! Today we\'ll be discussing support and resistance levels.',
        timestamp: new Date(Date.now() - 3600000),
        isOwn: true,
      },
      {
        id: '2',
        author: 'Ahmed M',
        content: 'Looking forward to it!',
        timestamp: new Date(Date.now() - 3300000),
        isOwn: false,
      },
      {
        id: '3',
        author: 'You (Mentor)',
        content: 'Remember, the key is identifying levels where price has bounced multiple times.',
        timestamp: new Date(Date.now() - 2700000),
        isOwn: true,
      },
      {
        id: '4',
        author: 'Sarah K',
        content: 'How do you determine which levels are most significant?',
        timestamp: new Date(Date.now() - 1800000),
        isOwn: false,
      },
      {
        id: '5',
        author: 'You (Mentor)',
        content: 'Great question! Volume and price action confluence are key indicators.',
        timestamp: new Date(Date.now() - 1200000),
        isOwn: true,
      },
      {
        id: '6',
        author: 'Ahmed M',
        content: 'I\'ve been tracking these on the 4H chart',
        timestamp: new Date(Date.now() - 600000),
        isOwn: false,
      },
      {
        id: '7',
        author: 'You (Mentor)',
        content: 'Excellent analysis! Keep practicing your technical skills.',
        timestamp: new Date(Date.now() - 300000),
        isOwn: true,
      },
    ],
  },
  {
    id: 'forex-batch2-mentor',
    name: 'Forex Trading Batch 2',
    badge: 'Batch 2',
    members: 20,
    unread: 1,
    lastMessage: 'Assignment deadline is next Friday. Submit your trading journal.',
    messages: [
      {
        id: '1',
        author: 'You (Mentor)',
        content: 'Welcome to Batch 2! Excited to help you master forex trading.',
        timestamp: new Date(Date.now() - 7200000),
        isOwn: true,
      },
      {
        id: '2',
        author: 'New Student',
        content: 'Thanks! Looking forward to learning',
        timestamp: new Date(Date.now() - 6600000),
        isOwn: false,
      },
      {
        id: '3',
        author: 'You (Mentor)',
        content: 'Assignment deadline is next Friday. Submit your trading journal.',
        timestamp: new Date(Date.now() - 300000),
        isOwn: true,
      },
    ],
  },
  {
    id: 'digital-marketing-batch1-mentor',
    name: 'Digital Marketing Batch 1',
    badge: 'Batch 1',
    members: 18,
    unread: 0,
    lastMessage: 'Next week we\'ll cover Instagram Reels strategy.',
    messages: [
      {
        id: '1',
        author: 'You (Mentor)',
        content: 'Today\'s topic: Creating viral content on TikTok',
        timestamp: new Date(Date.now() - 5400000),
        isOwn: true,
      },
      {
        id: '2',
        author: 'Maria L',
        content: 'What\'s the secret to going viral?',
        timestamp: new Date(Date.now() - 4800000),
        isOwn: false,
      },
      {
        id: '3',
        author: 'You (Mentor)',
        content: 'It\'s about understanding your audience and trending sounds',
        timestamp: new Date(Date.now() - 4200000),
        isOwn: true,
      },
      {
        id: '4',
        author: 'You (Mentor)',
        content: 'Next week we\'ll cover Instagram Reels strategy.',
        timestamp: new Date(Date.now() - 600000),
        isOwn: true,
      },
    ],
  },
]

export default function MentorForumPage() {
  const [selectedGroupId, setSelectedGroupId] = useState('forex-batch1-mentor')
  const [groups, setGroups] = useState(mockMentorGroups)

  const selectedGroup = groups.find((g) => g.id === selectedGroupId)

  const handleSendMessage = (content: string) => {
    if (!selectedGroup) return

    const newMessage: Message = {
      id: Date.now().toString(),
      author: 'You (Mentor)',
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
