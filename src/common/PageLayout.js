import Navbar from "../components/Navbar"

function PageLayout({children}) {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col">
        <Navbar />
        {children}
    </div>
  )
}

export default PageLayout