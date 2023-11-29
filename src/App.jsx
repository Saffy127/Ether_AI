import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      {}
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
};

const AboutScreen = () => {
  return (
    <View>
      <Text>About Screen</Text>
    </View>
  );
};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
