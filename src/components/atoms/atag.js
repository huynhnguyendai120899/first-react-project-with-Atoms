const AtagAtoms = ({itemAtag}) => {
    return (
        <a className="footer-button" href={itemAtag.url}>{itemAtag.title}</a>
    )
}

export default AtagAtoms;