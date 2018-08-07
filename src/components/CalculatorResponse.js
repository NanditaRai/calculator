import React, {Component} from 'react';
import {View, Text, TouchableOpacity}  from 'react-native';

class CalculatorResponse extends Component{
    render(){
        const { refresh, result} = this.props;

        return(
            <View>
                <View style = {styles.resultContainer}>
                    <Text style = {styles.result}>
                        {result}
                    </Text>
                </View>

                <View style = {styles.inputContainer}>
                    <TouchableOpacity
                       onPress = {refresh}>
                       <Text style = {styles.delete}>
                            { }
                            AC
                       </Text>
                    </TouchableOpacity>   

                    <Text>
                        Enter your operation
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = {
    resultContainer: {
        alignItems: 'flex-end',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginTop: 25,
        paddingVertical: 25,
        paddingRight: 10,
        margin: 1
    },
 
    result: {
        color: '#000',
        fontSize: 42
    },
 
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        paddingVertical: 10,
        paddingHorizontal: 5
    },
 
    delete: {
        color: '#000',
        fontSize: 23,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
 
    input: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 23,
        padding: 5
    }
}

export default CalculatorResponse;