

const HalfBox = ({children, className}) => {
  return (
    <div className={"flex justify-center items-center min-h-[480px] " + className}>
        <div className="max-w-[420px]">
          {children}
        </div>
    </div>
  )
}

export default HalfBox