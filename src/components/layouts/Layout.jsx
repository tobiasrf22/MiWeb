import React from 'react'
import { NavBar, Footer } from '../ui'
export const Layout = ({ children }) => {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  )
}

