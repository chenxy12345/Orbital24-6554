import React, { FC, useContext } from 'react';
import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { NavigationContext } from '@react-navigation/native';

const UserComponent: FC<{ image: any; title: string, faculty: string, year: string }> = ({ image, title, faculty, year }) => {

  const navigation = useContext(NavigationContext);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.infoContainerVertical}>
          <View style={styles.infoContainerHorizontal}>
            <Text style={styles.name}>{title}</Text>
            <Text style={styles.faculty}>{year}, {faculty}</Text>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.bubble}
              source={require('../../assets/chat_bubble.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: 20,
  },
  container: {
    height: 500,
    width: 360,
    borderRadius: 12,
    overflow: 'hidden',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 11,
    borderWidth: 1,
    borderColor: 'black',
  },
  infoContainerHorizontal: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '80%',
  },
  infoContainerVertical: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '90%',
    paddingTop: 6,
  },
  image: {
    padding: 0,
    height: 400,
    width: 400,
    marginBottom: 5,
  },
  bubble: {
    marginTop: 10,
    height: 60,
    width: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  name: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Audiowide-Regular',
    color: 'black',
  },
  faculty: {
    fontSize: 18,
    fontFamily: 'Audiowide-Regular',
    color: 'black',
  },
});
export default UserComponent;