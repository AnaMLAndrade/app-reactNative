import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screen
import HomeScreen from "./screens/home/homeScreen";
import CurriculoScreen from "./screens/curriculo/curriculoScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ title: 'Bem-vindo' }} component={HomeScreen} />
        <Stack.Screen name="Curriculo" options={{ title: 'Sobre mim' }} component={CurriculoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;