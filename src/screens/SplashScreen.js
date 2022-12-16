import React, {Component} from "react";
import { StyleSheet, View,Image } from "react-native";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigation('Home');
    }, 5000);
  }
  
  render() {
    return (
      <View style={styles.body}>
        <View style={{ flex: 3, alignItems:'center', justifyContent:'center'}} />
        <Image style={styles.Image} source={require('../images/Logo.png')} />
        <View style={{ flex: 1, flexDirection:"row", padding:100, justifyContent:'flex-start'}}>
          <Image style={{width: 75, height: 75, resizeMode: 'contain' }} 
          source={require('../images/KotaCilegon.png')} />
          <Image style={{width: 75, height: 75, resizeMode: 'contain' }} 
          source={require('../images/BBanten.png')} />
        </View> 
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2193b0',
    flexDirection: "column",
  },
  Image: {
    margin: 0,
    color: '#ffffff',
    width: 300, 
    height: 300,
    resizeMode: 'contain',
  },
});

export default SplashScreen;