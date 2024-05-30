import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native';
import { FIREBASE_AUTH, FIRESTORE_DB, FIREBASE_DB, FIREBASE_APP} from '../../FirebaseConfig';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { setDoc, addDoc, doc , collection, getFirestore } from 'firebase/firestore';
import { firebase } from '../../FirebaseConfig';

const SignupScreen = ({ navigation }: { navigation: any }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastname] = useState('');
    const [loading, setLoading] = useState(false);
    const [faculty, setFaculty] = useState('');
    const [yearofstudy, setYear] = useState('');
    const [docRefID, setDocRefID] = useState('');
    const auth = FIREBASE_AUTH;
    const fsdb = FIRESTORE_DB;

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
        { label: 'Year 1', value: 'y1' },
        { label: 'Year 2', value: 'y2' },
        { label: 'Year 3', value: 'y3' },
        { label: 'Year 4', value: 'y4' },
        { label: 'Year 5', value: 'y5' },
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

    const signUp = async () => {
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setLoading(false);
            alert('Check your email!');
            setFirstName(firstname);
            setLastname(lastname);
            setFaculty(faculty);
            setYear(yearofstudy);
            const data: any = {
                email: email,
                firstname: firstname,
                lastname: lastname,
                faculty: faculty,
                yearofstudy: yearofstudy,
            };
            try {
                const addRef = await firebase.firestore().collection("users").doc(email).set(data);
                console.log("User data updated successfully");
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
                <Text style={{
                    flexDirection: "row", color: "black", justifyContent: "center", alignContent: "stretch", textAlign: 'center',
                    fontWeight: "bold", fontSize: 40, padding: 10
                }}>BrainBuddies</Text>
                <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput value={password} style={styles.input} placeholder='Password' autoCapitalize='none' secureTextEntry={true} onChangeText={(text) => setPassword(text)}></TextInput>
                <TextInput value={firstname} style={styles.input} placeholder='First name' autoCapitalize='none' onChangeText={(text) => setFirstName(text)}></TextInput>
                <TextInput value={lastname} style={styles.input} placeholder='Last name' autoCapitalize='none' onChangeText={(text) => setLastname(text)}></TextInput>
                <FacultySelect></FacultySelect>
                <YearSelect></YearSelect>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <>
                        <TouchableOpacity style={styles.button} onPress={signUp}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOrange} onPress={() => navigation.goBack()}>
                            <Text style={styles.buttonText}>Go back to Welcome</Text>
                        </TouchableOpacity>
                    </>
                )}
            </KeyboardAvoidingView>
        </View>
    );
};

export default SignupScreen;

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
        marginBottom:30,
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
        marginTop: 15,
        borderRadius: 30,
        alignSelf: 'center',
    },
    buttonOrange: {
        backgroundColor: '#F1948A',
        alignSelf: 'center',
        padding: 12,
        width: '80%',
        justifyContent: 'center',
        margin: 10,
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
});