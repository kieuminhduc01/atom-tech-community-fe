const Logo = ({ width, height }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 1080 1080"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1018 509C1018 790.113 790.113 1018 509 1018C227.887 1018 0 790.113 0 509C0 227.887 227.887 0 509 0C790.113 0 1018 227.887 1018 509ZM43.4708 509C43.4708 766.105 251.895 974.529 509 974.529C766.105 974.529 974.529 766.105 974.529 509C974.529 251.895 766.105 43.4708 509 43.4708C251.895 43.4708 43.4708 251.895 43.4708 509Z"
          fill="black"
        />
        <circle cx="509" cy="509" r="260" fill="black" />
        <circle cx="769" cy="120" r="120" fill="black" />
      </svg>
    </>
  )
}

export default Logo
