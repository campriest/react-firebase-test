import React, {Component} from 'react';
import Blocks from './Blocks.js';



const wall = {
    marginTop: 30,
    width: '50%',
    height: 400,
    backgroundColor: 'rgb(170,170,170)',
    overflow: 'scroll'


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

                          <ul>
                              {this.state.restaurants.map((restaurant) =>{
                                console.log(restaurant.id);
                                console.log(restaurant.restaurant);
                                return(

                                  <li key = {restaurant.id}>{<Blocks restaurant = {restaurant.restaurant} menu = {restaurant.menu} categories = {restaurant.categories} item = {restaurant.id} hours = {restaurant.hours} db = {this.props.db}/>}</li>
                                  )
                              })}


                          </ul>


                    </div>





              </div>


      );
  }

}

export default List;
