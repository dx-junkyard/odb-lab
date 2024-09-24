import { DevelopChatUI } from '@renderer/components/organizms/chat/DevelopChatUI'
import { config } from '@fortawesome/fontawesome-svg-core'
import { useState } from 'react'
import useSWR from 'swr'

config.autoAddCss = false

// データ取得用のfetcher関数
const fetcher = (url: string) => fetch(url).then((res) => res.json())

function Sidebar({
  apiKey,
  setApiKey
}: {
  apiKey: string
  setApiKey: (apiKey: string) => void
}): JSX.Element {
  // フォーカスが外れた際にAPIキーを保存する処理
  const handleApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value)
  }

  // フォーカスが外れたときに保存する処理（サーバーに送信などがある場合）
  const handleApiKeyBlur = async () => {
    const formData = new FormData()
    formData.append('api_key', apiKey)

    await fetch('http://0.0.0.0:58912/api/interpreter/api-key', {
      method: 'POST',
      body: formData
    })
  }

  return (
    <aside className="w-[20vw] h-screen fixed top-0 left-0 border-r-2 p-4 shadow-md bg-white z-50">
      <h2 className="text-lg font-bold mb-6">User Settings</h2>

      <label htmlFor="apiKey" className="text-sm font-bold mb-2 block">
        Open AI API Key
      </label>
      <input
        id="apiKey"
        type="text"
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
        placeholder="Enter your API Key"
        value={apiKey}
        onChange={handleApiKeyChange}
        onBlur={handleApiKeyBlur} // フォーカスが外れた時のイベント
      />

      <h3 className="text-sm font-bold mb-4">履歴一覧</h3>
      <nav className="flex flex-col space-y-2">
        <button className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
          こんにちは
        </button>
        <button className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
          今日の天気は？
        </button>
      </nav>
    </aside>
  )
}

function App(): JSX.Element {
  const [apiKey, setApiKey] = useState<string>('')

  // 定期的にAPIエンドポイントをチェックする
  const { data, error } = useSWR('http://0.0.0.0:58912/api/health/', fetcher, {
    refreshInterval: 5000, // 5秒ごとにリクエストを送る,
    shouldRetryOnError: true, // エラーが発生してもポーリングを継続する
    errorRetryInterval: 5000
  })

  // ロード中の表示
  if (!data || error) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="flex">
      <Sidebar apiKey={apiKey} setApiKey={setApiKey} />
      <div className="flex-1 pt-[80px] ml-[20vw] flex justify-center items-center">
        <article className="flex flex-col justify-center items-center">
          {apiKey === '' ? (
            <h1 className="text-lg">APIキーを入力してください</h1>
          ) : (
            <DevelopChatUI />
          )}
        </article>
      </div>
    </div>
  )
}

export default App
