import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Home } from "./pages/Home/Home";
import { s } from "./App.style";
import { ImageBackground, View } from "react-native";
import image_background from "./assets/background.png";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Forecast } from "./pages/Forecast/Forecast";

const Stack = createNativeStackNavigator();

// Modification du theme mis par defaut par react navigation
const navTheme = {
  colors: {
    background: "transparent",
  },
};

export default function App() {

  const [isFontLoading] = useFonts({
    "Alata-Regular": AlataRegular
  })

  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground source={image_background} style={s.img_background} imageStyle={s.img}>
        <SafeAreaProvider>
          <SafeAreaView style={s.container}>
            {
              isFontLoading ? (
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
                  <Stack.Screen name="Home" component={Home}></Stack.Screen>
                  <Stack.Screen name="Forecast" component={Forecast}></Stack.Screen>
                </Stack.Navigator>)
                : null
            }
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}


