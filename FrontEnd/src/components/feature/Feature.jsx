import "./feature.scss"

function Feature({img, alt, title, text}) {
    return (
        <div className="feature-item">
            <img className="feature-icon" src={img} alt={alt}></img>
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Feature