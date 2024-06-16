import React, { FC, useContext, useState } from 'react';
import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { NavigationContext } from '@react-navigation/native';
import { FIREBASE_AUTH, FIRESTORE_DB, FIREBASE_DB, storage } from '../../FirebaseConfig';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const UserComponent: FC<{ imageURL: string, image: any; title: string, faculty: string, year: string, email: string }> = ({ imageURL, image, title, faculty, year, email }) => {

  const navigation = useContext(NavigationContext);

  const auth = FIREBASE_AUTH;

  const [like, setLike] = useState(false);

  const myEmail = auth.currentUser?.email;

  const onLike = async () => {
    const likedUserData = {
      email: email,
      firstname: title,
      imageURL: imageURL
    }
    setLike(true);
    if (myEmail) {
      const addRef = await firebase.firestore().collection('users').doc(myEmail).collection('liked').doc(email).set(likedUserData);
    }
  };

  const onUnlike = async () => {
    const emailData = {
      email: email
    }
    setLike(false);
    if (myEmail) {
      const addRef = await firebase.firestore().collection('users').doc(myEmail).collection('liked').doc(email).delete()
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.infoContainerVertical}>
          <View style={styles.infoContainerHorizontal}>
            <Text style={styles.name}>{title}</Text>
            <Text style={styles.faculty}>{year}, {faculty}</Text>
          </View>
          <TouchableOpacity
            onPress={() => like ? onUnlike() : onLike()}>
              <MaterialCommunityIcons name={like? "heart" : "heart-outline"}
                size={78} color={like? "#f1948a" : "black"} />
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