import { Component } from "react";
import imgg from '../../img/arrow.png'

class Popular extends Component{

  render() {
    const tempdata = [
      {name : 'Fruit juices to boost your immune' },
      {name : 'Juice variations using avocado'}
    ]
    return (
      <div className='popular_main'>
        <p>Popular</p>
        {tempdata.map(data => (
          <div className='recipe_table'>
            <div>
              <p>{data.name}</p>
            </div>
            <div className='arrowdiv'>
              <img className='arrow' src={imgg} alt='' />
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Popular;