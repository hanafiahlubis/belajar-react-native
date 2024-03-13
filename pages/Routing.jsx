// Routing.js

// import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Keluarga from './Keluarga'; // Ganti dengan nama file dan komponen yang sesuai
import Anak from './Anak';
import ScrollView2 from './ScrollView2';
import Fetch from './Fetch';
// import HalamanLain from './HalamanLain'; // Ganti dengan nama file dan komponen yang sesuai

const Stack = createNativeStackNavigator();

const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Keluarga" component={Keluarga} options={{ title: 'Halaman Keluarga' }} />
        <Stack.Screen name="anak" component={Anak} options={{ title: 'Halaman anak' }} />
        <Stack.Screen name="scroll" component={ScrollView2} options={{ title: 'Scroll View' }} />
        <Stack.Screen name="fetch" component={Fetch} options={{ title: 'Fetch' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routing;
