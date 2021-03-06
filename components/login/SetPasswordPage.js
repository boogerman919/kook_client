'use strict';
import React, {useState, useEffect, useRef, useContext} from 'react';
import {
  View,
  Dimensions,
  Animated,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {AuthContext} from './context';

const window = Dimensions.get('window');

var rem = window.width / 390;
EStyleSheet.build({$rem: rem});

const SetPasswordPage = ({route, navigation}) => {
  const {signUp} = useContext(AuthContext);

  const {username} = route.params.username;
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.backBtnContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}>
          <Text style={styles.backBtnText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Set Password</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>enter password</Text>
      </View>
      <TextInput
        value={password}
        autoCapitalize="none"
        onChangeText={setPassword}
        secureTextEntry
        style={styles.textInput}></TextInput>
      <View style={styles.textContainer}>
        <Text style={styles.text}>confirm password</Text>
      </View>
      <TextInput
        autoCapitalize="none"
        secureTextEntry
        style={styles.textInput}></TextInput>
      <TouchableOpacity
        onPress={() => signUp({username, password})}
        style={styles.btn}>
        <Text style={styles.btnText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  backBtnContainer: {
    alignSelf: 'stretch',
  },
  backBtn: {
    alignSelf: 'stretch',
    marginTop: '45rem',
    left: '30rem',
  },
  backBtnText: {
    color: 'black',
    fontSize: '20rem',
    fontFamily: 'Montserrat-SemiBold',
  },
  titleContainer: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: '100rem',
    marginBottom: '40rem',
  },
  title: {
    color: 'black',
    fontSize: '35rem',
    fontFamily: 'Montserrat-Bold',
    left: '55rem',
  },
  textContainer: {
    alignSelf: 'stretch',
    left: '63rem',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: '10rem',
    marginTop: '20rem',
  },
  text: {
    color: 'black',
    fontSize: '16rem',
    fontFamily: 'Montserrat-Medium',
  },
  textInput: {
    backgroundColor: '#F8F8F8',
    borderColor: '#05F2BC',
    borderWidth: '2rem',
    width: '280rem',
    height: '50rem',
    borderRadius: '2rem',
    fontFamily: 'Montserrat-Medium',
    paddingLeft: '10rem',
    autoCapitalize: 'none'
  },
  btn: {
    width: '220rem',
    aspectRatio: 4,
    backgroundColor: '#00EBB6',
    shadowOffset: {width: 0, height: '-2rem'},
    shadowOpacity: 0.15,
    shadowRadius: '10rem',
    borderRadius: '8rem',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '35rem',
    marginBottom: '300rem',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: '26rem',
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default SetPasswordPage;
