import { useEffect, useState } from "react";
import { Link } from "expo-router";
import {
  View,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard, GameCard } from "./GameCard";
import { AboutIcon } from "./Icons";
import { LogoBanner } from "./Logo";
import { Screen } from "./Screen";

export function Main() {
  const [games, setGames] = useState([]); //userState variable qe caundo cambia de valor se vuelve a renderizar
  /* const insets = useSafeAreaInsets(); */

  useEffect(() => {
    // useEffect cada ves que cambian las dependencias o primera ves qe se renderiza se ejecuta en el caso qe el ultimo [] este vacio
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);
  return (
    <Screen>
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
    </Screen>
  );
}
