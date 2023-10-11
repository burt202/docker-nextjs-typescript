import {ReactNode} from "react"

import {validateConfig} from "../config"

validateConfig()

interface LayoutProps {
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default Layout
