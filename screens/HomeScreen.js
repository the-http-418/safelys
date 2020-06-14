import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends Component {
  render(){
        return (
          <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

              <View style={styles.welcomeContainer}>
                <Image
                  source={
                    require('../assets/images/shop.jpg')
                  }
                  style={styles.welcomeImage}
                />
              </View>
              <View style={styles.getStartedContainer}>
                <Text style={styles.logo}>
                SAFELYS

                </Text>
              </View>
              <View style={styles.getStartedContainer}>
                <DevelopmentModeNotice />
              </View>

              <View style={styles.helpContainer}>
                <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>Visit our Online Website</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        );
    }
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
    return (
      <>
      <Text style={styles.developmentModeText}>
        Click on the Explore Icon to see stores near you!
      </Text>
      </>
    );
}



function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  logo:{
    color:'green',
    fontSize:40,

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 18,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
