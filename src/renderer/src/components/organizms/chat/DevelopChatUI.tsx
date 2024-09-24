import { FC } from 'react'
import { ChatInput } from '@renderer/components/organizms/chat/ChatInput'
import { ChatMessages } from '@renderer/components/organizms/chat/ChatMessages'
import { useInputPrompt } from '@renderer/hooks/use-input-prompt'

export const DevelopChatUI: FC = () => {
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
    <div className="relative w-full flex h-full flex-col items-center mb-[200px]">
      <div className="flex h-full w-full flex-col">
        <ChatMessages chatMessages={messages} />
      </div>

      <div className="fixed w-[80vw] z-50 bottom-0 right-0 items-end text-black bg-white border-t-2 flex justify-center">
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
