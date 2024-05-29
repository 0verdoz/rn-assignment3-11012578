import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  let [fontsLoaded, setFontsLoaded] = useState(false);

  let loadFontsAsync = async () => {
    await useFonts({
      'Lato': require('./assets/Lato/Lato-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  if(!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFontsAsync}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
        />
    );
    }

  return (
    <View style={styles.container}>
      <View style={styles.frame1}>
        <View style={styles.textContainer}>
          <Text style={[styles.text1, { fontFamily: 'Lato'}]}>Hello , Devs</Text>
          <Text style={styles.text2}>14 tasks today</Text>
        </View>
        <View style={styles.profileImageContainer}>
          <View style={styles.ellipse1} />
          <Image source={require('./assets/face.png')} style={styles.image1} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(247, 240, 232, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  frame1: {
    width: 354,
    height: 52,
    position: 'absolute',
    top: 52,
    left: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  text1: {
    fontWeight: '700',
    color: 'blue',
    fontSize: 32,
    lineHeight: 38.4,
  },
  text2: {
    fontWeight: '500',
    color: 'blue',
    fontSize: 12,
    lineHeight: 14.4,
  },
  profileImageContainer: {
    width: 50,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image1: {
    width: 46,
    height: 45,
    position: 'absolute',
    zIndex: 2,
  },
  ellipse1: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    position: 'absolute',
    zIndex: 1,
  },
});
