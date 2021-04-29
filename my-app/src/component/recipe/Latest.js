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
      time: '5minss',
      name: 'APPLE JUICE'
    },{
      img: '../../img/itemimg.png',
      tag: 'FRUIT',
      time: '5minwqqw',
      name: 'APPLEqweqwe JUICE'
    },{
      img: '../../img/itemimg.png',
      tag: 'FRUIT',
      time: '5min',
      name: 'APP123123LE JUICE'
    }]
    console.log(tempdata)
    return (
      <div className="latest_main">
        <div className="Latelytitle">
          Lately
        </div>
        <div className="Latelycontent">
        {tempdata.map((data,idx) => (
            <div key={idx} className="Latelyitem">
              <img className="mainLatelyimg" src={imgg} />
              <div className="Latelyfont1">
                <span className="latelyTag">{data.tag}</span>
                <div className='latelyspace'/>
                <div className="latelyLine"/>
                <div className='latelyspace'/>
                <span className="latelyTime">{data.time}</span>
              </div>
              {/* <div className="Latelyfont2">{data.time}</div> */}
              <div className="latelyName">{data.name}</div>
            </div>
        ))}
        </div>
      </div>
    );}
}

export default Latest;