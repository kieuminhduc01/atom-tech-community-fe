const Header = ({ children }) => {
  return (
    <div className="w-full bg-white h-16">
      <div className="m-auto max-w-screen-xl flex items-center h-full">{children}</div>
    </div>
  )
}

export default Header
