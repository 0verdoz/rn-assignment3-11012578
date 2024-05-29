import React, { useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [searchText, setSearchText] = useState('');

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
      
      <View style={{height: 70}}/>
      <View style={styles.frame2}>
        <View style={styles.textContainer1}>
          <Image source={require('./assets/mynaui_search.png')} style={styles.searchIcon} />
          { searchText === '' && (
            <Text style={styles.text3}>Search</Text>
          )}
          <TextInput style={styles.searchBar} 
              value={searchText}
              onChangeText={setSearchText}
          />
        </View>
        <View style={styles.profileImageContainer}>
          <View style={styles.ellipse2} />
          <Image source={require('./assets/bx_slider.png')} style={styles.image2} />
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
  text3: {
    left: 9,
    fontSize: 16,
    lineHeight: 19.2,
    fontWeight: '700',
    color: 'black',
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
  frame2: {
    width: 354,
    height: 52,
    position: 'absolute',
    top: 134,
    left: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  textContainer1: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingLeft: 10,
    backgroundColor: '#fff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'white',
    height: 48,
    marginRight: 20,
  },
  text1: {
    fontWeight: '700',
    color: 'black',
    fontSize: 32,
    lineHeight: 38.4,
  },
  text2: {
    fontWeight: '500',
    color: 'black',
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
    top: -1,
  },
  image2: {
    width: 28.33,
    height: 25.5,
    position: 'absolute',
    zIndex: 2,
    
  },
  ellipse1: {
    width: 50,
    height: 50,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    position: 'absolute',
    zIndex: 1,
  },
  ellipse2: {
    width: 50,
    height: 48,
    borderRadius: 14,
    backgroundColor: 'rgba(240, 82, 47, 1)',
    position: 'absolute',
    zIndex: 1,
  },
});