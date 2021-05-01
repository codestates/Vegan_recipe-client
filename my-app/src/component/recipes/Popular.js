import { Component } from "react";
import imgg from '../../img/arrow.png'

function Popular (){


    const tempdata = [
      {name : 'Fruit juices to boost your immune' , good : 140},
      {name : 'Juice variations using avocado', good: 122 }
    ]
    return (
      <div className='PopularMain'>
        <span className='PopularHeader'>Popular</span>
        <div className='PopularUpSpace'/>
        {tempdata.map(data => (
          <div>
          <div className='PopularTitleTable'>
            <div className='PopularTitle'>{data.name}</div>
            <img className='PopularArrow' src={imgg}/>
          </div>
          <div className='PopularDownSpace'/>
          <span className="PopularGood">{data.good} good</span>
          <div className='PopularDownSpace2'/>
          <div className="PopularLine"/>
          <div className='PopularDownSpace'/>
          </div>
        ))}
      </div>
    )

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
  }


export default Popular;