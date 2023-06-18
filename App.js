import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Home } from "./pages/Home/Home";
import { s } from "./App.style";
import { ImageBackground, View } from "react-native";
import image_background from "./assets/background.png";

export default function App() {
  return (
    <ImageBackground source={image_background} style={s.img_background} imageStyle={s.img}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
