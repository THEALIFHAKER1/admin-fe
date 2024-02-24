import Header from "@/components/navigation/header"
import HeaderMobile from "@/components/navigation/header-mobile"
import Sidebar from "@/components/navigation/sidebar"
import MarginWidthWrapper from "@/components/wrapper/margin-width-wrapper"
import PageWrapper from "@/components/wrapper/page-wrapper"

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <style>
        {`
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background-color: transparent;
          }
          ::-webkit-scrollbar-thumb {
            background-color: #888;
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background-color: #555;
          }
        `}
      </style>
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <MarginWidthWrapper>
            <Header />
            <PageWrapper>{children}</PageWrapper>
          </MarginWidthWrapper>
        </main>
      </div>
    </div>
  )
}
