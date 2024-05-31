import React, {useState, useEffect} from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import { Pressable, FlatList, TextInput } from 'react-native';

import { ScrollView } from 'react-native';
import * as Font from 'expo-font';

const categories = [
  { id: '1', name: 'Exercise', tasks: 12, image: require('./assets/exercise.png') },
  { id: '2', name: 'Study', tasks: 8, image: require('./assets/study.png') },
  { id: '3', name: 'Code', tasks: 5, image: require('./assets/code2.png') },
  { id: '4', name: 'Cook', tasks: 7, image: require('./assets/cook3.png') },
  { id: '5', name: 'Meditation', tasks: 8, image: require('./assets/meditation.png') },
  { id: '6', name: 'Rest', tasks: 10, image: require('./assets/rest.png') },
  { id: '7', name: 'Music', tasks: 5, image: require('./assets/music1.png') },
  { id: '8', name: 'Art', tasks: 6, image: require('./assets/art.png') },
  { id: '9', name: 'Workout', tasks: 9, image: require('./assets/workout.png') },
  { id: '10', name: 'Travel', tasks: 6, image: require('./assets/travel.png') },
];

const loadFonts = async () => {
  await Font.loadAsync({
    'Lato': require('./assets/fonts/Lato-Regular.ttf'),
  });
};


export default function App() {
  const [searchText, setSearchText] = useState('');

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => {
      setFontsLoaded(true);
    });
  }, []);

  if(!fontsLoaded) {
    return null;
  }

    const renderCategoryItem = ({ item }) => (
      <View style={styles.categoryCard}>
      <Image source={item.image} style={styles.categoryImage} />
      <View style={styles.categoryTextContainer}>
        <Text style={styles.categoryName}>{item.name}</Text>
        <Text style={styles.categoryTasks}>{item.tasks} Tasks</Text>
      </View>
    </View>
    );

  return (
    <View style={styles.container}>
      <View style={styles.frame1}>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Hello , Devs</Text>
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
        <Pressable onPress={() => console.log('Menu button pressed.')}>
        <View style={styles.profileImageContainer}>
          <View style={styles.ellipse2} />
          <Image source={require('./assets/bx_slider.png')} style={styles.image2} />
        </View>
        </Pressable>
      </View>
      <View style={{height: 70}} />
      <Text style={styles.text4}>Categories</Text>
      <View style={{height: 20}} />
      <View style={styles.categoryListContainer}>
          <FlatList 
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}/>
        </View>
        <View />
        <Text style={[styles.text5, {fontFamily: "Lato"}]}>Ongoing Tasks</Text>
        <ScrollView style={styles.scrollView}>
            <View style={styles.ongoingTaskCard}>
              <Text style={styles.ongoingTaskName}>
                  Mobile App Development
              </Text>
            </View>
            <View style={styles.ongoingTaskCard}>
              <Text style={styles.ongoingTaskName1}>
                  Web Development
              </Text>
            </View>
             <View style={styles.ongoingTaskCard}>
              <Text style={styles.ongoingTaskName2}>
                  Push Ups
              </Text>
            </View>
            <View style={styles.ongoingTaskCard}>
              <Text style={styles.ongoingTaskName3}>
                  Exercise
              </Text>
            </View>
            <View style={styles.ongoingTaskCard}>
              <Text style={styles.ongoingTaskName4}>
                Data Analysis
              </Text>
            </View>
            <View style={styles.ongoingTaskCard}>
              <Text style={styles.ongoingTaskName5}>
                Content Writing
              </Text>
            </View>
            <View style={styles.ongoingTaskCard}>
              <Text style={styles.ongoingTaskName6}>
                Graphic Design
              </Text>
            </View>
            <View style={styles.ongoingTaskCard}>
              <Text style={styles.ongoingTaskName7}>
                Video Editing
              </Text>
            </View>
            <View style={styles.ongoingTaskCard}>
              <Text style={styles.ongoingTaskName8}>
                Software Testing
              </Text>
            </View>
            <View style={styles.ongoingTaskCard}>
              <Text style={styles.ongoingTaskName9}>
                Marketing Campaign
              </Text>
            </View>
            <View style={styles.ongoingTaskCard}>
              <Text style={styles.ongoingTaskName10}>
                Research Project
              </Text>
            </View>
            <View style={styles.ongoingTaskCard}>
              <Text style={styles.ongoingTaskName11}>
                Database Management
              </Text>
            </View>
            <View style={styles.ongoingTaskCard}>
              <Text style={styles.ongoingTaskName12}>
                Network Security
              </Text>
            </View>
            <View style={styles.ongoingTaskCard}>
              <Text style={styles.ongoingTaskName13}>
                Customer Support
              </Text>
            </View>
            <View style={styles.ongoingTaskCard}>
              <Text style={styles.ongoingTaskName14}>
                UI/UX Design
              </Text>
            </View>
        </ScrollView>
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
  text5: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    top: 460,
    position: 'absolute',
    marginTop: 20,
    left: 20,
    height: 24,
    width: 150,
  },
  text4: {
    fontWeight: '700',
    fontFamily: "Lato",
    fontSize: 20,
    lineHeight: 24,
    top: 200,
    position: 'absolute',
    marginTop: 20,
    left: 20,
    height: 24,
    width: 98,
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
    left: 18,
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
    left: 16,
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
  searchIcon: {
    width: 16,
    height: 16,
    borderWidth: 1.5,
    tintColor: 'black',
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
  categoryCard: {
    width: 186,
    height: 192,
    borderRadius: 15,
    backgroundColor: 'rgba(251, 249, 247, 1)',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    marginRight: 15,
  },
  categoryImage: {
    width: 158,
    height: 146,
    top: 37,
    left: 8,
  },
  categoryTextContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  categoryName: {
    fontWeight: '700',
    fontSize: 16,
    color: 'black',
  },
  categoryTasks: {
    fontWeight: '500',
    fontSize: 12,
    color: 'gray',
  },
  categoryListContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    marginTop: 75,
    justifyContent: 'space-between',
  },
  categoryList: {
    paddingVertical: 20,
  },
  scrollView: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: 50,
  },
  ongoingTaskCard: {
    width: 345,
    height: 128,
    left: 1,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E8D1BA',
    backgroundColor: '#FBF9F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  ongoingTaskName: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    left: -50,
  },
  ongoingTaskName1: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    left: -77,
  },
  ongoingTaskName2: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    left: -113,
  },
  ongoingTaskName3: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    left: -118,
  },
  ongoingTaskName4: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    left: -97,
  },
  ongoingTaskName5: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    left: -89,
  },
  ongoingTaskName6: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    left: -91,
  },
  ongoingTaskName7: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    left: -97,
  },
  ongoingTaskName8: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    left: -82,
  },
  ongoingTaskName9: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    left: -67,
  },
  ongoingTaskName10: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    left: -84,
  },
  ongoingTaskName11: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    left: -58,
  },
  ongoingTaskName12: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    left: -83,
  },
  ongoingTaskName13: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    left: -77,
  },
  ongoingTaskName14: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    left: -98,
  },
});