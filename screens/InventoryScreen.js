import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, ImageBackground, Image } from 'react-native';
import axios from 'axios';

const InventoryScreen = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const addItem = async () => {
    try {
      const response = await axios.post('http://localhost:5000/add-item', { name, description });
      setQrCodeUrl(response.data.item.qrCodeUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text>Add New Item</Text>
        <TextInput placeholder="Item Name" value={name} onChangeText={setName} style={styles.input} />
        <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.input} />
        <Button title="Add Item" onPress={addItem} />
        {qrCodeUrl ? <Image source={{ uri: qrCodeUrl }} style={styles.qrCode} /> : null}
      </View>
    </ImageBackground>
  );
};

export default InventoryScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  qrCode: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});
