'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { resizePage } from '../utils/resizePage'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  useEffect(() => {
    resizePage()
    window.addEventListener('resize', resizePage)
    return () => window.removeEventListener('resize', resizePage)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 to-pink-100">
      {/* Navbar */}
      <nav className="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 z-10 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Colorful Responsive Webpage</h1>
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white border-white hover:bg-white hover:text-purple-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex flex-grow flex-shrink-0">
        {/* Left menu */}
        <aside className={`bg-gradient-to-b from-purple-200 to-pink-200 p-4 transition-all duration-300 ease-in-out ${isMenuOpen ? 'w-64' : 'w-0 overflow-hidden'} md:w-64`}>
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mb-4 hidden md:flex text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
          {isMenuOpen && (
            <ul className="space-y-2">
              <li><Button variant="ghost" className="w-full justify-start text-purple-700 hover:text-purple-900 hover:bg-purple-100">Menu Item 1</Button></li>
              <li><Button variant="ghost" className="w-full justify-start text-purple-700 hover:text-purple-900 hover:bg-purple-100">Menu Item 2</Button></li>
              <li><Button variant="ghost" className="w-full justify-start text-purple-700 hover:text-purple-900 hover:bg-purple-100">Menu Item 3</Button></li>
            </ul>
          )}
        </aside>

        {/* Main content area and right panel wrapper */}
        <div className="flex flex-col flex-grow md:flex-row">
          {/* Main content area */}
          <main className="flex-grow p-6 bg-white rounded-lg shadow-xl m-4">
            <h2 className="text-3xl font-bold mb-4 text-purple-800">Main Content</h2>
            <p className="text-gray-700 leading-relaxed">
              This is the main content area of the webpage. It's designed with a clean white background to ensure readability and contrast with the colorful surrounding elements. Feel free to add more content, images, or interactive elements here to engage your visitors!
            </p>
          </main>

          {/* Right-side panel */}
          <aside className="w-full md:w-64 bg-gradient-to-b from-pink-200 to-purple-200 p-4 rounded-lg shadow-xl m-4">
            <h3 className="text-xl font-semibold mb-2 text-pink-800">Right Panel</h3>
            <p className="text-gray-700">Additional information or widgets can go here. This panel adds balance to the layout and can be used for supplementary content, navigation, or interactive elements.</p>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 flex-shrink-0">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Colorful Responsive Webpage. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

