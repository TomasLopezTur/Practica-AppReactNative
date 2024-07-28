import { useEffect, useState } from "react";
import {
  View,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Image,
  StyleSheet,
} from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard, GameCard } from "./GameCard";

export default function Main() {
  const [games, setGames] = useState([]); //userState variable qe caundo cambia de valor se vuelve a renderizar
  const insets = useSafeAreaInsets();

  useEffect(() => {
    // useEffect cada ves que cambian las dependencias o primera ves qe se renderiza se ejecuta en el caso qe el ultimo [] este vacio
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingHorizontal: 9,
      }}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-metacritic.png")}
          style={styles.logo}
        />
      </View>
      {games.length == 0 ? (
        <ActivityIndicator color={"green"} size="large" />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  logoContainer: {
    padding: 10, // Espacio alrededor del logo
    backgroundColor: "#fff", // Fondo blanco para resaltar el logo
    borderRadius: 16, // Bordes redondeados opcionales
    marginBottom: 20, // Margen inferior para separar la imagen de la lista
    alignItems: "center", // Centrar el contenido horizontalmente
  },
  logo: {
    width: 176,
    height: 40,
    resizeMode: "contain", // Ajustar la imagen sin distorsionarla
  },
});
