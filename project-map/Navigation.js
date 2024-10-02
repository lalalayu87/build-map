import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Signin from "./screens/signin";
import KaKaoLogin from "./screens/kakaoLogin";
import Home from "./screens/home";
import Signup from "./screens/signup";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "./screens/screen1";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator initialRouteName="KaKaoLogin">
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="KaKaoLogin"
        component={KaKaoLogin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={BottomStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomStack() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Bottom"
        component={Screen1}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <StackScreen>
        <BottomStack />
      </StackScreen>
    </NavigationContainer>
  );
}

export default Navigation;
