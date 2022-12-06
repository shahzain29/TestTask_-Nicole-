import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = (props) => {
    const {title,onPress} = props
    return (
        <TouchableOpacity style={[styles.buttonStyle, { flexDirection: 'row' }]}
        onPress={onPress}
        >
            <Text style={{ color: 'white', fontSize: 20 }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 60,
        width: '90%',
        alignSelf: 'center',
        marginVertical: 10,
    }
})