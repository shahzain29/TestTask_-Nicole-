import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Entypo';

const CustomTextInput = (props) => {
    const {
        placeholder,
        placeholderColor,
        secureTextEntry,
        keyboardType,
        type,
        value,
        onChangeText,
        showHidePassword,
        onEyeClick

    } = props
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.inputInnerContainer}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                value={value}
            />
            {type === 'password' ? <Icons
                onPress={onEyeClick}
                name={showHidePassword ? 'eye' : 'eye-with-line'} size={30} color={'black'}
                style={{ alignSelf: 'center', marginRight: 17 }}
            /> : null}
        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    inputContainer: {
        borderColor: 'gray',
        borderWidth: 1,
        width: '90%',
        height: 60,
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputInnerContainer: {
        color: 'black',
        fontSize: 15,
        padding: 15,

    }
})