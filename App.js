import React, {Component} from 'react';
import {View, Alert, StatusBar, BackAndroid} from 'react-native';
import CalculatorResponse from './src/components/CalculatorResponse';
import CalculatorButtonContainer from './src/components/CalculatorButtonContainer';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      result : 0
    }
  }

  componentDidMount(){
    BackAndroid.addEventListener('hardwareBackPress', this.onBackPres);
  }

  componentWillUnmount(){
    BackAndroid.removeEventListener('hardwareBackPress', this.onBackPres);
  }

  onBackPres(){
    Alert.alert('Confirm Exit', 'Do you want to quit calculator?', [
      {
        text : 'CANCEL',
        onPress : () => console.log('cancel pressed')
      },{
        text : 'OK',
        onPress : () => BackAndroid.onBackPres()
      }
    ])
    return true;
  }

  refresh(){
    this.setState({ result : 0})
  }

  handleButtonPress(button){
    debugger
    let oldinput = this.state.result, lastLetter;
    if (oldinput == 0) {
      oldinput = '';
    }

    switch(button){
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.setState({result : oldinput + button});
        break;
      case '+':
      case '-':
      case '/':
      case 'x':
          lastLetter : oldinput.slice(-1);
          if(lastLetter === '+' || lastLetter === '-' || lastLetter === 'x' || lastLetter === '/')
            this.setState({ result : oldinput.slice(0,-1) + button})
          else
             this.setState({ result : oldinput + button})
        break;
      case '=':
          try {
            this.setState({
             result: eval(this.state.result) + ''
           });
          } catch (e) {
            this.setState({result: 'NaN'});
         }
        break;
      case '.':
         lastLetter = oldinput.slice(-1);
         if (lastLetter !== '.') {
           this.setState({
             result: oldinput + button
           });
         }
       break;
    }
  }

  render(){
    const {result} = this.state;

    return(
      <View style = {styles.container}>
         <CalculatorResponse 
            result = {result}
            refresh = {this.refresh.bind(this)} />
          
          <CalculatorButtonContainer
            handleButtonPress = {this.handleButtonPress.bind(this)} />
          
          <StatusBar barStyle="light-content"/>
      </View>
    );
  }

}

const styles = {
  container: {
    flex: 1
  }
};