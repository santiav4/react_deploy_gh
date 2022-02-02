const Header = ({title}) => {
    return (
        <header className="header">
            {title}
        </header>
    )
}

Header.defaultProps = {
    title:'To Do List'
}

export default Header
