import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "./src/screens/SearchScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "Go Remote",
          cardStyle: { backgroundColor: "#1f1f1f" },
          headerStyle: { backgroundColor: "#1f1f1f" },
          headerTitleStyle: { color: "white" },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
