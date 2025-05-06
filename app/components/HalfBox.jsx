

const HalfBox = ({children, className}) => {
  return (
    <div className={"flex justify-center items-center " + className}>
        <div className="max-w-[420px]">
          {children}
        </div>
    </div>
  )
}

export default HalfBox