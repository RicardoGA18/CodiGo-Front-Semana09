import React from 'react'

const Card = ({img,descripcion,price}) => {
  return (
    <div className="Card">
      <div className="Card__Img">
        <img src={img} />
      </div>
      <div className="Card__Body">
        <p className="Card__Price">{`S/.${price}.00`}</p>
        <p className="Card__Description">{descripcion}</p>
        <button className="Card__Add">Agregar al carrito</button>
      </div>
    </div>
  )
}

export default Card