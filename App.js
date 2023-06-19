import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Home } from "./pages/Home/Home";
import { s } from "./App.style";
import { ImageBackground, View } from "react-native";
import image_background from "./assets/background.png";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";

export default function App() {

  const [isFontLoading] = useFonts({
    "Alata-Regular": AlataRegular
  })

  return (
    <ImageBackground source={image_background} style={s.img_background} imageStyle={s.img}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          {
            isFontLoading ? <Home /> : null
          }
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
