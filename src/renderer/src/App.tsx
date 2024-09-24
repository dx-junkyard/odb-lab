import { DevelopChatUI } from '@renderer/components/organizms/chat/DevelopChatUI'
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

function Sidebar(): JSX.Element {
  return (
    <aside className="w-[20vw] h-screen fixed top-0 left-0 bg-gray-800 text-white flex flex-col items-center py-4 pt-[80px]">
      <h2 className="text-lg font-bold">Sidebar</h2>
      <nav className="flex flex-col space-y-2">
        <a href="#" className="hover:bg-gray-700 px-4 py-2 rounded">Home</a>
        <a href="#" className="hover:bg-gray-700 px-4 py-2 rounded">About</a>
        <a href="#" className="hover:bg-gray-700 px-4 py-2 rounded">Contact</a>
      </nav>
    </aside>
  )
}

function App(): JSX.Element {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pt-[80px] ml-[250px] flex justify-center items-center">
        <article className="w-full flex flex-col justify-center items-center">
          <DevelopChatUI />
        </article>
      </div>
    </div>
  )
}

export default App
