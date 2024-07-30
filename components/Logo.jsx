import { View, Image, StyleSheet } from "react-native";

export const LogoBanner = () => (
  <View style={styles.logoContainer}>
    <Image
      source={require("../assets/logo-metacritic.png")}
      style={styles.logo}
    />
  </View>
);

const styles = StyleSheet.create({
  logoContainer: {
    padding: 10, // Espacio alrededor del logo
    backgroundColor: "#fff", // Fondo blanco para resaltar el logo
    borderRadius: 16, // Bordes redondeados opcionales
    marginBottom: 20, // Margen inferior para separar la imagen de la lista
    alignItems: "center",
    marginTop: 10, // Centrar el contenido horizontalmente
  },
  logo: {
    width: 195,
    height: 40,
    resizeMode: "contain", // Ajustar la imagen sin distorsionarla
  },
});
