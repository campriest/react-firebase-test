import React, {Component} from 'react';


const formStyle = {
  position: 'absolute',
  marginLeft: '75%',
  marginTop: 80,
  width: '20%',
  backgroundColor: 'rgb( 255, 255,255)',
  borderLeft: 'solid',
  borderColor: 'rgb(0,0,0)',
  borderWidth: 1
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
      marginLeft: '65%',
      width: 60,
      height: 30,
      backgroundColor: 'rgba(20,20,20, .6)',
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
              restaurant: 'enter table',
              menu: 'enter dish',
              categories:'enter special instructions',
              hours:'enter time'
            }
                this.onRestaurant = this.onRestaurant.bind(this);
                this.onMenu       = this.onMenu.bind(this);
                this.onCategories = this.onCategories.bind(this);
                this.onHours      = this.onHours.bind(this);
                this.onPush       = this.onPush.bind(this);
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
            <button style = {buttonStyle} onClick = {this.onPush} value = "Submit">Order</button>
          </form>
        </div>
      );
    }
  }
export default Main;
