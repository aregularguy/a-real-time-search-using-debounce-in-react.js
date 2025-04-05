import React from "react"
import "./ListItem.css"

const ListItem = ({title,caption,imageUrl}) => {
    return (
        <div className="list-item-container">
            <div className="left" >
            <img src ={imageUrl} alt="Image" className="thumbnail" />
            </div>
            <div className="center" >
            <h4>{title}</h4>
            <p>{caption}</p>
            </div>
            <div className="right" >
                <p>&#8250;</p>
            </div>
        </div>
    )
}
export default ListItem