import React, { useState } from "react"
import "./ListItem.css"

const ListItem = ({title, caption, imageUrl}) => {
    const [imageError, setImageError] = useState(false);
    
    // Handle image load errors
    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className="list-item-container">
            <div className="left">
                <img 
                    src={imageError ? "https://cdn-icons-png.flaticon.com/512/1047/1047503.png" : imageUrl} 
                    alt={title}
                    className="thumbnail" 
                    onError={handleImageError}
                />
            </div>
            <div className="center">
                <h4>{title}</h4>
                <p>{caption}</p>
            </div>
            <div className="right">
                <p>&#8250;</p>
            </div>
        </div>
    )
}

export default ListItem