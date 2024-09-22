import { DevelopChatUI } from '@renderer/components/organizms/chat/DevelopChatUI'
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

function App(): JSX.Element {
  return (
    <>
      <div className="w-full pt-[80px] flex justify-center items-center max-w-[1000px] mx-auto">
        <article className="w-full flex flex-col justify-center items-center">
          <DevelopChatUI />
        </article>
      </div>
    </>
  )
}

export default App
