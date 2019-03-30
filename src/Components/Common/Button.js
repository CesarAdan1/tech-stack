import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, children }) => {
    const { 
        buttonStyle, 
        textStyle 
    } = styles;

    return (
        <TouchableOpacity 
            onPress={ onPress } 
            style={buttonStyle}
        >
            <Text 
                style={textStyle}
            >
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        zIndex: 1,
    },
    buttonStyle: {
        backgroundColor: 'blue',
        borderRadius: 5,
        paddingTop: 40,
        paddinBottom: 40,
        borderColor: '#007aff',
        width: '100%',
        height: 50,
        zIndex: 1
    }
}
//export an object, see index.js
export { Button };