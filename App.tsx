import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, Image, } from 'react-native';
import Homepage from './Homepage';

const App = () => {
  return (
    < ScrollView style={styles.container}>
      <StatusBar backgroundColor="#0E6FFF" barStyle="light-content" />
      <View style={styles.appBar}>
        <Text style={styles.title}>Dashboard</Text>
        <TouchableOpacity style={styles.settingsButton} onPress={() => { }}>
          <Image style={{ resizeMode: 'contain' }}
            height={25}
            width={20}

            source={{
              uri: 'https://cdn-icons-png.freepik.com/256/3132/3132084.png?ga=GA1.2.1068248021.1715681487&semt=ais_hybrid',
            }}
          />
        </TouchableOpacity>
      </View>
      <Homepage />
    </ ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    backgroundColor: '#0E6FFF',
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 26,
    letterSpacing: 0.5,
    color: 'white',
    fontFamily: 'Roboto',
  },
  settingsButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  settingsButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
