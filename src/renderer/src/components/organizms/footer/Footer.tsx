import './footer.scss'

export const Footer = () => (
  <footer className="w-full footer bg-white text-black text-center">
    <div className="grid grid-cols-1 place-items-center content-stretch gap-y-5 md:gap-y-0 md:grid-cols-4 max-w-[1500px] mx-auto py-[30px]">
      <div className="font-bold text-2xl leading-none md:text-left">
        Opendata
        <br />
        Bridge
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 place-items-center underline text-xs gap-x-0 md:gap-x-2 col-span-2 md:text-left">
        <a href="/" className="hover:bg-gray-100">
          プライバシーポリシー
        </a>
        <a href="/" className="hover:bg-gray-100">
          リンク・著作権について
        </a>
        <a href="/" className="hover:bg-gray-100">
          免責事項
        </a>
      </div>
      <div className="md:text-right text-xs">
        &copy; dx-junkyard
        <br />
        All rights reserved.
      </div>
    </div>
  </footer>
)
