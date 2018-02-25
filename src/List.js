import React, {Component} from 'react';
import Blocks from './Blocks.js';



const wall = {
    position: 'absolute',
    marginTop: 90,
    width: '70%',
    height: '100%',
    backgroundColor: 'rgb(255, 255, 255)',
    overflow: 'scroll'
}
const columnOne = {
    position: 'absolute',
    marginLeft:'0%',
    width: '33.3%',
    height: '100%',
    borderRight: 'solid',
    borderTop: 'solid',
    borderBottom: 'solid',
    borderColor: 'rgb(125,125,125)',
    borderWidth: 1,
    backgroundColor: 'rgb(255,255,255)',
    overflow:'scroll'
}
const oneTitle = {
    position: 'absolute',
    marginLeft: '5%',
    marginTop: 5,
    fontSize: 16,
    fontFamily: 'Montserrat, sans-serif'

}
//create column one into component
const oneStructure = {
    position: 'absolute',
    marginLeft: '0%',
    marginTop: 45,
    width: '100%',
    backgroundColor: 'blue'

}
const note = {
  position: 'absolute',
  marginLeft: '-25%'
}
const columnTwo = {
    position: 'absolute',
    marginLeft: '33.4%',
    width: '33.3%',
    height: '100%',
    borderRight: 'solid',
    borderTop: 'solid',
    borderBottom: 'solid',
    borderColor: 'rgb(0,0,0)',
    borderWidth: 1,
    backgroundColor: 'rgb(255, 255,255)'
}
const twoTitle = {
  position: 'absolute',
  marginLeft: '5%',
  marginTop: 5,
  fontSize: 16,
  fontFamily: 'Montserrat, sans-serif'

}
const columnThree = {
    position: 'absolute',
    marginLeft: '66.6%',
    width: '33.3%',
    height: '100%',
    borderRight: 'solid',
    borderTop: 'solid',
    borderBottom: 'solid',
    borderColor: 'rgb(0,0,0)',
    borderWidth: 1,
    backgroundColor: 'rgba(10,10,10, .6)'
}
const threeTitle = {
  position: 'absolute',
  marginLeft: '5%',
  marginTop: 5,
  fontSize: 16,
  fontFamily: 'Montserrat, sans-serif'
}

class List extends Component{

  constructor(props){
      super(props);
          this.state = {
              restaurants: []
          }
  }

  componentWillMount(){
          let app = this.props.db.database().ref('res');
          app.on('value', (snapshot) => {
              let newList = [];
              let more = snapshot.val();
                if(more != null){
                    let moreTwo = Object.keys(more);
                }
                        for(let i in more){
                          newList.push({
                            id: i,
                            restaurant: more[i].restaurant,
                            menu: more[i].menu,
                            categories: more[i].categories,
                            hours: more[i].hours
                          })
                        }
                  //console.log("new list: " + newList[0].restaurant);

                this.setState({
                    restaurants: newList
                })
          })
  }


  render(){

      return(


              <div>
                <div style = {wall}>
                    <div style = {columnOne}>
                      <h1 style = {oneTitle}>To Do</h1>
                        <div style = {oneStructure}>
                          <ul style = {note}>
                              {this.state.restaurants.map((restaurant) =>{
                                console.log(restaurant.id);
                                console.log(restaurant.restaurant);
                                return(
                                  <ul key = {restaurant.id}>{<Blocks restaurant = {restaurant.restaurant} menu = {restaurant.menu} categories = {restaurant.categories} item = {restaurant.id} hours = {restaurant.hours} db = {this.props.db}/>}</ul>
                                  )
                                })}
                          </ul>
                        </div>
                    </div>
                  <div style = {columnTwo}>

                      <h1 style = {twoTitle}>In Progress</h1>

                  </div>
                  <div style = {columnThree}>
                    <h1 style = {threeTitle}>Done</h1>

                  </div>
                </div>
              </div>
      );
  }

}

export default List;
