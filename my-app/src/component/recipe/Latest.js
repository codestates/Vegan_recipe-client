import { Component } from "react";
import imgg from '../../img/itemimg.png'
class Latest extends Component {
  constructor(props) {
    super(props);

    this.printLatestMain = this.printLatestMain.bind(this);
  }

  printLatestMain() {
    
    // return listItems;
  }
  render() {
    const tempdata = [{
      img: '../../img/itemimg.png',
      tag: 'FRUIT',
      time: '5min',
      name: 'APPLE JUICE'
    },{
      img: '../../img/itemimg.png',
      tag: 'FRUIT',
      time: '5min',
      name: 'APPLE JUICE'
    },{
      img: '../../img/itemimg.png',
      tag: 'FRUIT',
      time: '5min',
      name: 'APPLE JUICE'
    }]
    // const listItems = tempdata.map((data, idx) => (
    //   <div classname='latestitems' key={idx}>
    //     {/* <img src={data.img} alt=''/> */}
    //     <img src={imgg} alt=''/>
    //     <p> {data.tag} {data.time}</p>
    //     <div>{data.name}</div>
    //   </div>
    //   ))

    return(
    <div className='latest_main'>
      {/* {listItems} */}
      {tempdata.map((data, idx) => (
      <div className='latestitems' key={idx}>
        {/* <img src={data.img} alt=''/> */}
        <img className='latest_img' src={imgg} alt=''/>
        <p> {data.tag} {data.time}</p>
        <div>{data.name}</div>
      </div>
      ))}
    </div>
    )}
}

export default Latest;