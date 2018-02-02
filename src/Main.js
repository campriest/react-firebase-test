import React, {Component} from 'react';


const formStyle = {
  marginTop: 50,
  width: "50%",
  backgroundColor: 'rgb( 170, 170,170)'


}

const inputStyle = {
  display: 'block',
  top: 20,
  marginTop: 20,
  marginLeft: 20,
  width: 200,
  height: 30,
  backgroundColor: 'rgba(50, 50, 50, .6)',

  borderRadius: 6


}

const buttonStyle = {
      marginLeft: 380,
      width: 60,
      height: 30,
      backgroundColor: "rgb(50,50,50)",
      borderRadius: 6,
      color: 'white'

}

const room = {

  top:20
}


class Main extends Component{

    constructor(props){
        super(props);


        this.state = {

              restaurant: 'enter restaurant',
              menu: 'enter menu',
              categories:'enter categories',
              hours:'enter hours'

            }


        this.onRestaurant =  this.onRestaurant.bind(this);
        this.onMenu       = this.onMenu.bind(this);
        this.onCategories = this.onCategories.bind(this);
        this.onHours      = this.onHours.bind(this);
        this.onPush       =  this.onPush.bind(this);
        }


        onRestaurant(e){
            e.preventDefault();

            this.setState({

                  restaurant: e.target.value


            });



        }

        onMenu(e){
          e.preventDefault();

          this.setState({

              menu: e.target.value

          });


        }

        onCategories(e){

            e.preventDefault();

            this.setState({

                categories: e.target.value

            });


        }

        onHours(e){
            e.preventDefault();

            this.setState({

              hours: e.target.value
            });


        }





        onPush(e) {
              e.preventDefault();
              let app = this.props.db.database().ref('/res');

              app.push({



                  restaurant: this.state.restaurant,
                  menu: this.state.menu,
                  categories: this.state.categories,
                  hours: this.state.hours



              });

              this.setState({

                  restaurant: '',
                  menu:'',
                  categories: '',
                  hours: ''


              })

        }


  render(){

    return(


        <div>

            <form style = {formStyle}>



                    <input onChange = {this.onRestaurant} type = "text" value = {this.state.restaurant} style = {inputStyle} />
                    <input onChange = {this.onMenu} type = "text" value = {this.state.menu} style = {inputStyle}/>
                    <input onChange = {this.onCategories} type = "text" value = {this.state.categories} style = {inputStyle}/>
                    <input onChange = {this.onHours} type = "text" value = {this.state.hours} style = {inputStyle}/>

                  <button style = {buttonStyle} onClick = {this.onPush} value = "Submit"></button>
              </form>


        </div>

      );

    }

  }



export default Main;
