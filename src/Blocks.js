import React, {Component} from 'react';

const blockStyle = {
  marginTop: 12,
  width: 240,
  height: 25,
  border:'none',
  backgroundColor: 'rgba(255,255,255, .6)',
  resize: 'none'

}


const boxStyle = {

  marginTop: 8,
  width: 250,
  height: 200,
  backgroundColor: 'rgba(255, 255, 255, .6)',
  borderRadius: 4,
  borderStyle: 'solid',
  borderWidth: '1px',
  textDecoration: 'none'


}

const xStyle = {
  position: 'absolute',
  marginTop: '2px',
  marginLeft: '70%',
  color:'rgb(255, 0 ,0)'

}


class Blocks extends Component {


    constructor(props){

        super(props);
        this.state = {
            restaurant: this.props.restaurant,
            menu: this.props.menu
        }
        this.removeBlock = this.removeBlock.bind(this);
        this.onChangeRes = this.onChangeRes.bind(this);
        this.onUpdateRes = this.onUpdateRes.bind(this);
        this.onChangeMenu = this.onChangeMenu.bind(this);
        this.onUpdateMenu = this.onUpdateMenu.bind(this);
    }


    removeBlock(item){
      console.log("here" + item);

        const itemRemove = this.props.db.database().ref('/res/' + item);
        console.log("works");

        itemRemove.remove();

    }

    onChangeRes(e){
      this.setState({
        restaurant: e.target.value
      })
    }

    onChangeMenu(e){
      this.setState({
        menu: e.target.value
        })
    }
    onUpdateRes(e){
      if(e.keyCode === 13){
        e.preventDefault();
        const res = this.props.db.database().ref('/res/' + this.props.item).update({restaurant: this.state.restaurant});
        console.log("fire" + this.props.item);
      }
    }
    onUpdateMenu(e){
      if(e.keyCode === 13){
        e.preventDefault();
        const res = this.props.db.database().ref('/res/' + this.props.item).update({menu: this.state.menu});
        console.log("fire" + this.props.item);
      }
    }
    render(){
        return (
          <div>
            <div style = {boxStyle}>
              <div style = {xStyle} onClick = {() => {this.removeBlock(this.props.item)}}>x</div>
              <textarea style = {blockStyle} onChange = {this.onChangeRes} onKeyUp = {this.onUpdateRes}>{this.props.restaurant}</textarea>
              <textarea style = {blockStyle} onChange = {this.onChangeMenu} onKeyUp = {this.onUpdateMenu}>{this.props.menu}</textarea>
              <textarea style = {blockStyle}>{this.props.categories}</textarea>
              <textarea style = {blockStyle}>{this.props.hours}</textarea>

            </div>
          </div>
        )
    }
}


export default Blocks;
