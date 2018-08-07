import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';

const styles = {
    buttonContainer :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        margin: 1
    },
    buttonTextStyle : {
        color : '#000',
        fontSize: 26
    }
}

class CalculatorButton extends Component{
    render() {
        const {operator, handleButtonPress} = this.props;
 
        return (
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => handleButtonPress(operator)}>
                <Text style={styles.buttonTextStyle}>
                    {operator}
                </Text>
            </TouchableOpacity>
        );
    }
}

export default CalculatorButton;