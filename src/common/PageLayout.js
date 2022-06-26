import Navbar from "../components/Navbar"

function PageLayout({children}) {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col font-poppins">
        <Navbar />
        {children}
    </div>
  )
}

export default PageLayout