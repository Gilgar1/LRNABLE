# Lrnable Chat Forum Feature

## Overview
The chat forum feature enables group discussions organized by class batches and badges. Students and mentors can collaborate, ask questions, and share knowledge in dedicated forums for their mentorship programs.

## Routes & Access

### Learner Forum
**Route**: `/dashboard/forum`
**Features**:
- Browse forums organized by badge (Batch 1, Batch 2, Advanced, etc.)
- Real-time messaging within each forum
- View unread message counts
- Search forums by name or badge
- See member count and last message preview
- Audio/video call buttons (ready for integration)
- Current forums in demo:
  - Forex Trading Batch 1 (24 members)
  - Digital Marketing Batch 1 (18 members)
  - Forex Trading Advanced (12 members)

### Mentor Forum
**Route**: `/mentor/forum`
**Features**:
- Manage all your class forums
- Communicate with students in batches
- Track discussions per course
- Monitor student engagement
- All mentorship groups you teach are listed
- Current forums in demo:
  - Forex Trading Batch 1 (24 members)
  - Forex Trading Batch 2 (20 members)
  - Digital Marketing Batch 1 (18 members)

### Admin Forum (Optional)
**Route**: `/admin/forum` (can be implemented for platform-wide announcements)
**Features**:
- Monitor all forums
- Moderate discussions
- View flagged content
- Make platform announcements

## Components

### ChatList Component
**File**: `/components/chat/chat-list.tsx`
**Props**:
- `groups`: Array of chat groups
- `selectedId`: Currently selected group ID
- `onSelect`: Callback when selecting a forum

**Features**:
- Search forums by name or badge
- Display unread message counts
- Show member count and last message preview
- Visual selection indicator
- Add new forum button (placeholder)

### ChatRoom Component
**File**: `/components/chat/chat-room.tsx`
**Props**:
- `groupId`: ID of the chat group
- `groupName`: Display name of the forum
- `badge`: Batch/badge identifier
- `members`: Number of members
- `messages`: Array of messages
- `onSendMessage`: Callback to send new message

**Features**:
- Display message history with timestamps
- Auto-scroll to latest messages
- Show message author avatars
- Distinguish own messages from others
- Message input field
- Send button (disabled when empty)
- Action buttons: Phone, Video, Info

## Data Structure

### ChatGroup Interface
```typescript
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
```

### Message Interface
```typescript
interface Message {
  id: string
  author: string
  avatar?: string
  content: string
  timestamp: Date
  isOwn: boolean
}
```

## Features Implemented

1. **Group Organization by Badges**
   - Forums automatically grouped by batch/class
   - Easy identification of your cohort

2. **Real-time Messaging**
   - Send messages to the forum
   - See messages from all members
   - Timestamps on every message

3. **Search Functionality**
   - Search forums by name
   - Filter by badge/batch
   - Quick access to specific forums

4. **Unread Tracking**
   - Unread message count badges
   - Resets when forum is opened

5. **User Context**
   - Messages show author name
   - Own messages highlighted differently
   - Avatar initials for quick identification

6. **Mobile Responsive**
   - Sidebar hides on small screens on mobile
   - Full-width chat room on mobile
   - Touch-friendly buttons

## Integration Points (Backend Ready)

When integrating with backend, implement:

1. **Real-time Updates**
   - WebSocket connection for live messages
   - Optimistic updates for user experience

2. **Database Schema**
   - `chat_groups` table (id, name, badge, created_at)
   - `chat_messages` table (id, group_id, user_id, content, created_at)
   - `group_members` table (group_id, user_id, joined_at)

3. **API Endpoints**
   ```
   GET /api/forums - List all forums for user
   GET /api/forums/:id - Get forum details with messages
   POST /api/forums/:id/messages - Send message
   GET /api/forums/:id/messages - Load message history (with pagination)
   POST /api/forums - Create new forum (admin/mentor)
   ```

4. **Authentication**
   - Verify user has access to forum
   - Role-based permissions (learner vs mentor vs admin)

5. **Notifications**
   - New message notifications
   - @ mentions
   - Forum activity digests

## Styling

The forum uses the Lrnable color scheme:
- Primary: Deep Teal (#42747B)
- Secondary: Neutral Grey (#9CA3AF)
- Uses existing design tokens from globals.css

Message bubbles:
- Own messages: Primary background with white text
- Others' messages: Muted background with foreground text
- Rounded corners with subtle shadow

## Future Enhancements

1. **Rich Text Editing**
   - Format messages (bold, italic, code blocks)
   - Embed links and media

2. **File Sharing**
   - Upload documents, PDFs, images
   - File preview support

3. **Reactions & Emojis**
   - React to messages with emojis
   - Quick reactions on hover

4. **Threading**
   - Reply to specific messages
   - Threaded conversations

5. **Video/Audio Chat**
   - Integrate WebRTC for calls
   - Connect existing call buttons

6. **Role-Based Moderation**
   - Mentors can pin important messages
   - Mute/block users
   - Delete inappropriate messages

7. **Analytics**
   - Track engagement metrics
   - Most active members
   - Forum performance stats

## Navigation

**From Learner Dashboard**: 
- Click "Class Forums" button or link in quick access section
- Route: `/dashboard/forum`

**From Mentor Dashboard**:
- Click "Forums" button in header
- Route: `/mentor/forum`

**From Admin Dashboard**:
- Click "Forums" button in header
- Route: `/admin/forum`

## Mock Data

Current implementation includes realistic mock data:
- Multiple batch forums
- Sample conversations between mentors and students
- Realistic timestamps and unread counts
- Mock student names and mentor responses

All data is client-side for demo purposes. Backend integration will replace this with real database calls.
