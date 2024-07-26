import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User, UserCredential, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Image, View, Text, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, TextInput, StyleSheet, Alert } from 'react-native';
import { FIREBASE_AUTH, FIRESTORE_DB, FIREBASE_DB, storage } from '../../FirebaseConfig';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { setDoc, addDoc, doc, collection, getFirestore } from 'firebase/firestore';
import { firebase } from '../../FirebaseConfig';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from "expo-image-picker"
import "firebase/compat/storage";

const ProfileScreen = () => {

  const auth = FIREBASE_AUTH;

  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastname] = useState('');
  const [loading, setLoading] = useState(false);
  const [faculty, setFaculty] = useState('');
  const [yearofstudy, setYear] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const url = auth.currentUser?.photoURL;

  const faculties = [
    { label: 'Faculty of Arts and Social Sciences', value: 'FASS' },
    { label: 'School of Business', value: 'BIZ' },
    { label: 'School of Computing', value: 'SOC' },
    { label: 'School of Continuing and Lifelong Education', value: 'SOCLE' },
    { label: 'Faculty of Dentistry', value: 'DENT' },
    { label: 'College of Design and Engineering', value: 'CDE' },
    { label: 'NUS College', value: 'NUSC' },
    { label: 'NUS Graduate School', value: 'GRAD' },
    { label: 'Faculty of Law', value: 'LAW' },
    { label: 'Yong Loo Lin School of Medicine', value: 'YLLSOM' },
    { label: 'Yong Siew Toh Conservatory of Music', value: 'YSTCOM' },
    { label: 'Saw Swee Hock School of Public Health', value: 'SSHSPH' },
    { label: 'Faculty of Science', value: 'FOS' },
  ]

  const FacultySelect = () => {
    const [isFocus1, setIsFocus1] = useState(false);

    const renderLabel = () => {
      if (faculty || isFocus1) {
        return (
          <></>
        );
      }
      return null;
    };

    return (
      <View style={[styles.dropdowncontainer]}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus1 && { borderColor: 'grey' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={faculties}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus1 ? 'Faculty' : '...'}
          searchPlaceholder="Search..."
          value={faculty}
          onFocus={() => setIsFocus1(true)}
          onBlur={() => setIsFocus1(false)}
          onChange={item => {
            setFaculty(item.value);
            setIsFocus1(false);
          }}
        />
      </View>
    );
  };

  const year = [
    { label: 'Year 1', value: 'Year 1' },
    { label: 'Year 2', value: 'Year 2' },
    { label: 'Year 3', value: 'Year 3' },
    { label: 'Year 4', value: 'Year 4' },
    { label: 'Year 5', value: 'Year 5' },
  ]

  const YearSelect = () => {
    const [isFocus2, setIsFocus2] = useState(false);

    const renderLabel = () => {
      if (yearofstudy || isFocus2) {
        return (
          <></>
        );
      }
      return null;
    };

    return (
      <View style={[styles.dropdowncontainer]}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus2 && { borderColor: 'grey' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={year}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus2 ? 'Year of study' : '...'}
          searchPlaceholder="Search..."
          value={yearofstudy}
          onFocus={() => setIsFocus2(true)}
          onBlur={() => setIsFocus2(false)}
          onChange={item => {
            setYear(item.value);
            setIsFocus2(false);
          }}
        />
      </View>
    );
  };

  const selectImage = async () => {
    try {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      })
      if (!result.canceled) {
        await saveImage(result.assets[0].uri);
      }
    } catch (error: any) {
      alert("Error uploading image: " + error.message);
    }
  }

  const saveImage = async (image) => {
    try {
      setImage(image);
    } catch (error) {
      throw error
    }
  }

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => console.log('User signed out!'))
      .catch((error) => console.log(error));
  }

  const updateDetails = async () => {
    setLoading(true);
    try {
        const user = auth.currentUser;

        const { uri } = await FileSystem.getInfoAsync(image);
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError('Network request failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', uri, true);
            xhr.send(null);
        })

        const storageRef = firebase.storage().ref();
        const filename = image.substring(image.lastIndexOf('/') + 1);
        const ref = storageRef.child(filename);
        console.log(ref);
        await ref.put(blob);
        const url = await ref.getDownloadURL();
        setImageUrl(url);

        const em = auth.currentUser?.email;
        setLoading(false);
        setFirstName(firstname);
        setLastname(lastname);
        setFaculty(faculty);
        setYear(yearofstudy);
        try {
            const data: any = {
                email: em,
                firstname: firstname,
                lastname: lastname,
                faculty: faculty,
                yearofstudy: yearofstudy,
                image: image,
                imageURL: url,
            };
            const addRef = await firebase.firestore().collection("users").doc(em).set(data);
            await updateProfile(user, { photoURL: url, password: password});
            console.log("User data updated successfully");
            alert("User data updated successfully")
        } catch (e) {
            console.error("Error adding data: ", e);
        }
    } catch (error: any) {
        console.log(error);
        alert('Registration failed: ' + error.message);
        setLoading(false);
    }
}

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <TouchableOpacity
          onPress={() => {
            selectImage()
          }
          }>
          <Image testID="profile-picture"
            style={styles.profilePicture}
            source={image ? { uri: image } : { uri: auth.currentUser?.photoURL }}
          />
        </TouchableOpacity>
        <TextInput testID="password-input" value={password} style={styles.input} placeholder='Password' autoCapitalize='none' secureTextEntry={true} onChangeText={(text) => setPassword(text)}></TextInput>
        <TextInput testID="first-name-input" value={firstname} style={styles.input} placeholder='First name' autoCapitalize='none' onChangeText={(text) => setFirstName(text)}></TextInput>
        <TextInput testID="last-name-input"value={lastname} style={styles.input} placeholder='Last name' autoCapitalize='none' onChangeText={(text) => setLastname(text)}></TextInput>
        <FacultySelect></FacultySelect>
        <YearSelect></YearSelect>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <TouchableOpacity testID="update-profile-button" style={styles.buttonOrange} onPress={updateDetails}>
              <Text style={styles.buttonText}>Update Profile</Text>
            </TouchableOpacity>
          </>
        )}
      </KeyboardAvoidingView>
      <TouchableOpacity testID="sign-out-button"
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  dropdowncontainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff"
  },
  button: {
    backgroundColor: 'black',
    padding: 12,
    justifyContent: 'center',
    width: '80%',
    margin: 10,
    marginTop:6,
    borderRadius: 30,
    alignSelf: 'center',
  },
  buttonOrange: {
    backgroundColor: '#F1948A',
    alignSelf: 'center',
    padding: 12,
    width: '80%',
    justifyContent: 'center',
    margin: 12,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  profilePicture: {
    borderRadius: 1200,
    borderWidth: 1,
    marginBottom: 15,
    height: 180,
    width: 180,
    alignSelf: 'center',
  }
});