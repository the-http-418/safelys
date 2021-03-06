import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image,StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
//import { Avatar } from "react-native-elements";


export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.welcomeContainer}>

    <Image
      source={
        __DEV__
          ? require('../assets/images/robot-dev.png')
          : require('../assets/images/robot-prod.png')
      }
      style={styles.welcomeImage}
    />
    <Text style={styles.profdeet}>
    {"\n"}
    Username!
    {"\n\n\n"}
  ____  More Details :)_____
    </Text>
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  profdeet : {
    color:'black',
    fontSize : 18,
    textAlign:'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
});
