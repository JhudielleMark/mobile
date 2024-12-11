import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

const NotificationScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationTitle}>New Notification</Text>
        <Text style={styles.notificationMessage}>
          You have a new message. Tap to view more details.
        </Text>
        <Text style={styles.notificationTimestamp}>Just now</Text>
      </View>
    </ImageBackground>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    padding: 20,
  },
  notificationContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  notificationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  notificationMessage: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 10,
  },
  notificationTimestamp: {
    fontSize: 12,
    color: '#bbb',
  },
})
