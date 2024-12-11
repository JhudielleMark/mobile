import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import React from 'react';

const AccountProfile = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.infoText}>Email: example@student.com</Text>
        <Text style={styles.infoText}>Student ID: 123456</Text>
        <Text style={styles.infoText}>Name: John Doe</Text>
        <Text style={styles.infoText}>Number: 09478275872</Text>


        <Button title="Log out" onPress={() => navigation.navigate('Login')} />
      </View>
    </ImageBackground>
  );
};

export default AccountProfile;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: 10,
    margin: 20,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
});
