import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.topBorder}>
          <Text style={styles.welcome}>Welcome Admin,</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.welcome}>Welcome to LabManager</Text>

          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Scanner')} // Navigate to scanner screen
              >
                <Image
                  source={require('../assets/scanner.png')}
                  style={styles.buttonIcon}
                />
                <Text style={styles.buttonText}>Open QR Scanner</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('AccountProfile')}
              >
                <Image
                  source={require('../assets/profile.png')}
                  style={styles.buttonIcon}
                />
                <Text style={styles.buttonText}>Account Profile</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Inventory')}
              >
                <Image
                  source={require('../assets/inventory.png')}
                  style={styles.buttonIcon}
                />
                <Text style={styles.buttonText}>Inventory</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Notification')}
              >
                <Image
                  source={require('../assets/notification.png')}
                  style={styles.buttonIcon}
                />
                <Text style={styles.buttonText}>Notification</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBorder: {
    height: 50,
    backgroundColor: 'maroon',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  welcome: {
    color: 'white',
    fontSize: 20,
    textAlign: 'right',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  buttonWrapper: {
    width: '40%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'maroon',
    width: 150,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
  buttonIcon: {
    width: 30,
    height: 30,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default HomeScreen;
