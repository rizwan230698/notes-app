import "react-native-gesture-handler";
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Remote debugger"]);
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "@use-expo/font";

import { Provider } from "./src/context/NoteContext";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Raleway-Bold": require("./assets/fonts/Raleway-Bold.ttf"),
    "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
    "Raleway-Medium": require("./assets/fonts/Raleway-Medium.ttf"),
  });

  // if (!fontsLoaded) {
  //   return <Text>Loading...</Text>;
  // }
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerTintColor: "rgba(0,0,0,0.9)",
          }}
        >
          <Stack.Screen name="Notes" component={IndexScreen} />
          <Stack.Screen
            name="Note"
            component={ShowScreen}
            options={{
              title: "Detail",
            }}
          />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
