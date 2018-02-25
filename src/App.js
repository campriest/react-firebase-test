import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import Main from './Main.js';
import List from './List.js';
import Head from './Head.js';


const mainStyle = {

  position:'fixed'
}
class App extends Component {

constructor(props){
  super(props);
    var config = {
      apiKey: "AIzaSyBLPklJLKarCPeuHp7KzEZh00kof3cUdR8",
      authDomain: "foodprac-51f6c.firebaseapp.com",
      databaseURL: "https://foodprac-51f6c.firebaseio.com",
      projectId: "foodprac-51f6c",
      storageBucket: "foodprac-51f6c.appspot.com",
      messagingSenderId: "606851141726"
      };
      firebase.initializeApp(config)
}

render() {
    return (
      <div>

        <List db = {firebase}/>
        <Main style = {mainStyle} db = {firebase}/>
        <Head/>
      </div>
    );
  }
}

export default App;
