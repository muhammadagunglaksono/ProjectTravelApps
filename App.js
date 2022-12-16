//Import Library
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

//Import File Screen
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/Home';
import InformationScreen from './src/screens/Informasi dan Berita';
import DestinationScreen from './src/screens/Destination';
import MoreScreen from './src/screens/More';
import AboutContentScreen from './src/screens/Lainnya/Tentang';
import FavDestinationContentScreen from './src/screens/Lainnya/Favorit Destinasi';

// Stack berguna untuk routing aplikasi
const HomeStack = createNativeStackNavigator();
const DestinationStack = createNativeStackNavigator();
const InfoStack = createNativeStackNavigator();
const MoreStack = createNativeStackNavigator();

//Membuat Bottom Tab Navigation
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='SplashScreen' component={SplashScreen} screenOptions={{ tabBarActiveTintColor: '#2193b0', headerShown: false }}>
        <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}>
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Beranda" component={HomeScreen} options={{ headerShown:false}}/>
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen
        name="Destination"
        options={{
          tabBarLabel: 'Destinasi',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wallet-travel" color={color} size={size} />
          ),
        }}>
          {() => (
            <DestinationStack.Navigator>
              <DestinationStack.Screen name="Destination" component={DestinationScreen} options={{ headerShown:false}} />
            </DestinationStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen
        name="Information"
        options={{
          tabBarLabel: 'Informasi',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="note" color={color} size={size} />
          ),
        }}>
          {() => (
            <InfoStack.Navigator>
              <InfoStack.Screen name="Informasi dan Berita" component={InformationScreen} />
            </InfoStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen
        name="More"
        options={{
          headerShown:false,
          tabBarLabel: 'Lainnya',
          tabBarIcon: ({ color, size }) => (
            <Foundation name="indent-more" color={color} size={size} />
          ),
        }}>
          {() => (
            <MoreStack.Navigator>
              <MoreStack.Screen name="More" component={MoreScreen} options={{ headerShown:false}} />
              <MoreStack.Screen name="Tentang" component={AboutContentScreen} />
              <MoreStack.Screen name="Favorit Destinasi" component={FavDestinationContentScreen} />
            </MoreStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
