import { useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";

export function GameCard({ game }) {
  return (
    <View key={game.slug} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image}></Image>
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.score}>{game.score}</Text>
      <Text style={styles.description}>{game.description}</Text>
    </View>
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
    alignSelf: "center",
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
