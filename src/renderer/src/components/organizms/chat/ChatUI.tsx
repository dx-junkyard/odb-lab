import React, { FC } from 'react'
import { ChatInput } from './ChatInput'
import { ChatMessages } from './ChatMessages'
import { useInputPrompt } from '@renderer/hooks/use-input-prompt'
import { Message } from '@renderer/types/message'

interface ChatUIProps {
  history: Message[]
}

const ChatUI: FC<ChatUIProps> = ({ history }) => {
  const {
    prompt,
    updatePrompt,
    actionUsePrompt,
    fileList,
    addFile,
    removeFile,
    messages,
    isChatting,
    cancelChat
  } = useInputPrompt('', '')

  return (
    <div className="relative flex w-full h-full flex-col items-center mb-[200px]">
      <div className="flex h-full w-full flex-col">
        <ChatMessages chatMessages={messages} />
      </div>

      <div className="fixed z-50 w-[80vw] end-0 items-end text-black bg-white border-t flex justify-center">
        <div className="w-full md:w-[768px] mx-3">
          <ChatInput
            addFile={addFile}
            fileList={fileList}
            removeFile={removeFile}
            prompt={prompt}
            updatePrompt={updatePrompt}
            actionUsePrompt={actionUsePrompt}
            isChatting={isChatting}
            cancelChat={cancelChat}
          />
        </div>
      </div>
    </div>
  )
}

export default ChatUI
