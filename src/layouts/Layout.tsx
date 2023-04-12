import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({}) => {
  const [isChecked, setIsChecked] = useState(false)
  isChecked
    ? (document.documentElement.dataset.theme = "emerald")
    : (document.documentElement.dataset.theme = "dark")
  return (
    <div className="h-full min-w-screen">
      <Navbar />
      <main className="h-full px-8 md:px-16 pb-4 overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
