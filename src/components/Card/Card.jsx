import React from 'react'
import './Card.css';

const Card = ({id, title, tag, status}) => {
  return (
    <div className="cardContainer flex-gap-10" style={{gap : '5px'}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-grey'>{id}</span>
            <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
                <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="UserImg" />
                <div className="showStatus"></div>
            </div>
        </div>
        <div className="cardTitle" style={{fontWeight : 200}} >
            <p>{title}</p>
        </div>
        <div className="cardTags">
        <div className="tags color-grey"><box-icon type='solid' name='calendar-exclamation' color='grey'></box-icon></div>
            {
                tag?.map((elem, index) => {
                    return <div key={index} className="tags color-grey"><box-icon type='solid' name='circle' color='grey'></box-icon>{elem}</div>
                })
            }
        </div>
    </div>
  )
}

export default Card;