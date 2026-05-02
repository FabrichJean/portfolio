import { useState } from 'react'

interface MenuDrawerMobileProps {
  navItems: { label: string; href: string }[]
}

const MenuDrawerMobile = ({ navItems }: MenuDrawerMobileProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  const closeDrawer = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleDrawer}
        className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-opacity-20 hover:bg-white transition"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={closeDrawer}
        ></div>
      )}

      {/* Drawer Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-linear-to-b from-iris to-cyan shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={closeDrawer}
            className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-2 px-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeDrawer}
              className="py-3 px-4 text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-20 transition duration-300 block"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="absolute bottom-6 left-4 right-4">
          <a
            href="#contact"
            onClick={closeDrawer}
            className="block w-full py-3 px-4 bg-white text-iris font-bold rounded-lg text-center hover:bg-opacity-90 transition"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </>
  )
}

export default MenuDrawerMobile
