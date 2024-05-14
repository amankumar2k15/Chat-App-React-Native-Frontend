import React from 'react';
import Footer from './src/Components/Footer';
import Header from './src/Components/Header';
import ContactList from './src/Screens/ContactList';
import ChatRoom from './src/Screens/ChatRoom';
import { NavigationContainer,   } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatView from './src/Screens/ChatView';
import { View } from 'react-native';
import Register from './src/Screens/Register';
import Login from './src/Screens/Login';


const App = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <View className="mt-10">
        {/* <Header /> */}
      </View>

      <Stack.Navigator
        screenOptions={({ route }) => ({
          header: ({ route }) => <Header screenName={route.name} />,
        })}>

        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Contact" component={ContactList} />
        <Stack.Screen name="Chat" component={ChatView} />
        <Stack.Screen name="ChatRoom" component={ChatRoom} />

      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
};

export default App;
