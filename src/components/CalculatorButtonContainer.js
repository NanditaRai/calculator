import React ,{Component} from 'react';
import {View} from 'react-native';
import CalculatorButton from './CalculatorButton';

class CalculatorButtonContainer extends Component{
    render(){

        const {handleButtonPress} = this.props;

        return(
            <View style = {styles.containerStyle}>
                <View style={styles.rowStyle}>
                    <CalculatorButton operator={'+'} handleButtonPress={handleButtonPress}/>
                    <CalculatorButton operator={'-'} handleButtonPress={handleButtonPress}/>
                    <CalculatorButton operator={'x'} handleButtonPress={handleButtonPress}/>
                    <CalculatorButton operator={'/'} handleButtonPress={handleButtonPress}/>
                </View>
 
                <View style={styles.rowStyle}>
                    <CalculatorButton operator={'7'} handleButtonPress={handleButtonPress}/>
                    <CalculatorButton operator={'8'} handleButtonPress={handleButtonPress}/>
                    <CalculatorButton operator={'9'} handleButtonPress={handleButtonPress}/>
                </View>
 
                <View style={styles.rowStyle}>
                    <CalculatorButton operator={'4'} handleButtonPress={handleButtonPress}/>
                    <CalculatorButton operator={'5'} handleButtonPress={handleButtonPress}/>
                    <CalculatorButton operator={'6'} handleButtonPress={handleButtonPress}/>
                </View>
 
                <View style={styles.rowStyle}>
                    <CalculatorButton operator={'1'} handleButtonPress={handleButtonPress}/>
                    <CalculatorButton operator={'2'} handleButtonPress={handleButtonPress}/>
                    <CalculatorButton operator={'3'} handleButtonPress={handleButtonPress}/>
                </View>
 
                <View style={styles.rowStyle}>
                    <CalculatorButton operator={'0'} handleButtonPress={handleButtonPress}/>
                    <CalculatorButton operator={'.'} handleButtonPress={handleButtonPress}/>
                    <CalculatorButton operator={'='} handleButtonPress={handleButtonPress}/>
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle : {
        flex : 1
    },

    rowStyle : {
        flex : 1,
        flexDirection: 'row'
    }
}

export default CalculatorButtonContainer;