'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Search, Plus, Users } from 'lucide-react'

interface ChatGroup {
  id: string
  name: string
  badge: string
  members: number
  unread: number
  lastMessage: string
  avatar?: string
}

interface ChatListProps {
  groups: ChatGroup[]
  selectedId?: string
  onSelect: (id: string) => void
}

export function ChatList({ groups, selectedId, onSelect }: ChatListProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = groups.filter((group) =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.badge.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col h-full bg-background border-r border-border">
      {/* Header */}
      <div className="p-4 border-b border-border space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground">Forums</h2>
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search forums..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 border-border"
          />
        </div>
      </div>

      {/* Chat Groups List */}
      <div className="flex-1 overflow-y-auto">
        {filtered.length === 0 ? (
          <div className="p-4 text-center text-muted-foreground">
            <p className="text-sm">No forums found</p>
          </div>
        ) : (
          <div className="space-y-2 p-2">
            {filtered.map((group) => (
              <button
                key={group.id}
                onClick={() => onSelect(group.id)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  selectedId === group.id
                    ? 'bg-primary/10 border border-primary/30'
                    : 'hover:bg-muted/50 border border-transparent'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate text-sm">
                      {group.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs bg-secondary/20">
                        {group.badge}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {group.members}
                      </span>
                    </div>
                  </div>
                  {group.unread > 0 && (
                    <div className="ml-2 flex-shrink-0">
                      <div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                        {group.unread > 99 ? '99+' : group.unread}
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-xs text-muted-foreground truncate">{group.lastMessage}</p>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
