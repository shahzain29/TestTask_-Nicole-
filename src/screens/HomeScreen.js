import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text, View,
  SafeAreaView,
  TouchableOpacity,
  FlatList
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import CustomTextInput from '../componets/CustomTextInput';
import CustomButton from '../componets/CustomButton';
const HomeScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(true)
  const [data, setData] = useState([])

  const [isValidName, setIsValidName] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isValidPassword, setIsValidPassword] = useState(false)

  let pid = 0
  const addNewForm = () => {
    pid = pid + 1
    const newValue = {
      id: pid
    }
    setData(olddata => [...olddata, newValue]);

  }
  const removeForm = () => {
    const tempArray = [...data]
    tempArray.pop()
    setData([...tempArray])
  }

  // To Check Input Fields
  const inputcheck = async () => {
    if (name != '') {
      setIsValidName(true)
    }
    if (password != '') {
      setIsValidPassword(true)
    }
    if (email != undefined ||
      email != '' ||
      email.length <= 0 ||
      !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      setIsValidEmail(true)
    }
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: 60 }}>
        <Text style={styles.textStyle}>Assignment</Text>
      </View>
      <View style={styles.iconStyle}>
        <TouchableOpacity>
          <Icon
            name='minuscircle' size={40} color='black'
            onPress={() => removeForm()}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name='pluscircle' size={40} color='black'
            onPress={() => addNewForm()}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        extraData={data.length}
        renderItem={({ item }) =>
          <View style={{ justifyContent: 'center', marginVertical: 10 }}>
            <View style={{ backgroundColor: 'black', height: 2 }} />
            <Text style={styles.headingText}>Employee Form</Text>
            <CustomTextInput
              placeholder={'Name'}
              placeholderColor={'black'}
              onChangeText={(text) => setName(text)}
              value={name}
            />
            <Text style={[styles.validText, { color: isValidName ? 'green' : 'red' }]}>{`${isValidName ? 'Valid' : 'Invalid'} Name`}</Text>
            <CustomTextInput
              placeholder={'Email'}
              placeholderColor={'black'}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <Text style={[styles.validText, { color: isValidEmail ? 'green' : 'red' }]}>{`${isValidEmail ? 'Valid' : 'Invalid'} Email`}</Text>

            <View>
              <CustomTextInput
                placeholder={'Password'}
                placeholderColor={'black'}
                secureTextEntry={showPassword}
                iconName={'eye'}
                type={'password'}
                onChangeText={(text) => setPassword(text)}
                onEyeClick={() => setShowPassword(!showPassword)}
                showHidePassword={showPassword}
                value={password}
              />
            </View>
            <Text style={[styles.validText, { color: isValidEmail ? 'green' : 'red' }]}>{`${isValidEmail ? 'Valid' : 'Invalid'}Password`}</Text>
            <CustomButton
              title={'Submit'}
              onPress={() => inputcheck()}
            />
          </View>
        }
      />
    </SafeAreaView >
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black'
  },
  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 10
  },
  invalidText: {
    marginLeft: '5%',
    color: 'red'
  },
  validText: {
    marginLeft: '5%',
  },
  headingText: {
    color: 'black',
    fontSize: 15,
    marginLeft: '5%',
    marginTop: 10
  }

})
