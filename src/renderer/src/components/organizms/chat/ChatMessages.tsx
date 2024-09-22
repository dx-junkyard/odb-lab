import { FC } from 'react'
import { ChatMessage } from '@renderer/components/organizms/chat/ChatMessage'
import { Message } from '@renderer/types/message'

interface ChatMessagesProps {
  chatMessages: Message[]
}

export const ChatMessages: FC<ChatMessagesProps> = ({ chatMessages }) => {
  return chatMessages.map((message, index) => {
    return (
      <ChatMessage
        key={index}
        message={message}
        isLoading={message.content.length === 0 && index === chatMessages.length - 1}
      />
    )
  })
}
