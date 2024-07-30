import { useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  Pressable,
} from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function GameCard({ game }) {
  return (
    <Link href={`${game.slug}`} asChild className="mb-6 mt-2">
      <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4">
        <View
          className="flex-row l gap-4 "
          key={game.slug}
          /* style={styles.card} */
        >
          <Image source={{ uri: game.image }} style={styles.image}></Image>
          <View className="flex-shrink">
            <Text className="mb-1 mt-1" style={styles.title}>
              {game.title}
            </Text>
            {/* <Text style={styles.score}>{game.score}</Text> */}
            <Score score={game.score} maxScore={100} />
            <Text className="mt-2 flex-shrink " style={styles.description}>
              {game.description.slice(0, 100)}...
            </Text>
          </View>
          {/* <Text className="text-red-600 p-2">Hola</Text> */}
        </View>
      </StyledPressable>
    </Link>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 600,
      delay: index * 600,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game}></GameCard>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 48,
    backgroundColor: "#3344", // Fondo de la tarjeta para mejor visibilidad
    padding: 16, // Espacio interno alrededor del contenido
    borderRadius: 10, // Bordes redondeados de la tarjeta
    // Centra verticalmente el contenido dentro de la tarjeta
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
    marginBottom: 16,
    marginTop: 16,
    alignSelf: "center",
  },
  textContainer: {
    marginLeft: 16, // Espacio entre la imagen y el texto
    flex: 1, // Permite que el contenedor de texto ocupe el espacio restante
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    /* alignSelf: "center", */
  },
  score: {
    color: "green",
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "center",
  },
  description: {
    color: "#fff",
    fontSize: 14,
    marginTop: 16,
  },
});
