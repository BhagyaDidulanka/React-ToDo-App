import Logo from "../assets/logo.svg"

export const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="ToDo Logo" />
            <span>ToDo</span>
        </div>
    </header>
  )
}
