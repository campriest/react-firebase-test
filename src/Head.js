import React, {Component} from 'react';

const headStyle = {
  position:'fixed',
  marginTop: 0,
  width: '100%',
  height: 30,
  borderBottom: 'solid',
  borderColor: 'rgb(0,0,0)',
  borderWidth: 1,

}

const headLogo = {
  position: 'fixed',
  marginLeft: '94%',
  marginTop: 5,
  fontSize: 18,
  fontFamily: 'Montserrat, sans-serif',

}
const time = {
  position: 'fixed',
  width: '100%',
  marginTop: 50,
  height: 10,
  borderBottom: 'solid',
  borderColor: 'rgb(0,0,0)',
  borderWidth:1

}


class Head extends Component{
  constructor(props){
      super(props);


  }



  render(){
      return(
        <div>
            <div style = {headStyle}>
              <h1 style = {headLogo}>Simple</h1>
            </div>
              <div style = {time}>

              </div>


        </div>


      );
  }
}
export default Head;
