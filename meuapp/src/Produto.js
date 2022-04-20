import React from 'react'

export const Produto = ({nome, propriedades}) => {
  return (
    <div style={{border: 'solid 1px', margin: '1rem', padding: '1rem'}}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade) =>(
          <li>{propriedade}</li>
        ))}
      </ul>
    </div>
  )
}
