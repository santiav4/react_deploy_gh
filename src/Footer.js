const Footer = ({items}) => {
    return (
        <footer className="footer">
            {items.length === 1 ? `${items.length} item left` : `${items.length} items left`}
        </footer>
    )
}

export default Footer
