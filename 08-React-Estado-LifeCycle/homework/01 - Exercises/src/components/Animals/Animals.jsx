import React from 'react'

export default class Animals extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return(
      <div>
        {
          this.props.animals.map((animal, index)=>{
            return(
              <div key={index}>
                <h5>{animal.name}</h5>
                <img src={animal.image} alt={animal.name} width='300px'></img>
                <br/>
                <span>{animal.specie}</span>

              </div>
            )
          })
        }
      </div>
    ) 
  }
}
