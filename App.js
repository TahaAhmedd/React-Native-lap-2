import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Flex from './screens/Flex';
import Login from './screens/Login';
import Todo from './screens/Todo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab from './screens/Tab';
import Product from './screens/Product';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';


export default function App() {

  const Stack = createNativeStackNavigator();

  var Route;
  useEffect(() => {
    const token = AsyncStorage.getItem("token")
    if (token) {
      Route = "Home"
    }
    else {
      Route = "Login"
    }
  }, [])




  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Route}
        screenOptions={{
        }}>
        <Stack.Screen name='Home' component={Tab} options={{
          headerBackVisible: false,
          headerShown: false
        }}></Stack.Screen>
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
        <Stack.Screen name='Product' component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
  },
});
