import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { Stack } from "expo-router";
import { getGameDetails } from "../lib/metacritic";
import { useEffect, useState } from "react";
import { Score } from "../components/Score";
import { HomeIcon, AboutIcon } from "../components/Icons";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGameInfo);
    }
  }, [id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: gameInfo === null ? "Loading..." : gameInfo.title,
          headerRight: () => {},
        }}
      />
      <View className="flex-1 items-center justify-center bg-black">
        <View>
          {gameInfo === null ? (
            <ActivityIndicator color={"#fff"} size={"large"} />
          ) : (
            <ScrollView>
              <View className=" items-center justify-center text-center">
                <Image
                  className="mb-4 rounded"
                  source={{ uri: gameInfo.img }}
                  style={{ width: 214, height: 294 }}
                  resizeMode="contain"
                />
                <Score score={gameInfo.score} maxScore={100} />
                <Text className="text-white font-bold mb-4 text-3xl mt-3 text-center">
                  {gameInfo.title}
                </Text>
                <Text className="text-white/70 text-left  mb-8 text-lg ">
                  {gameInfo.description}
                </Text>
              </View>
              <Link asChild href="/">
                <Pressable className="flex justify-center items-center mb-10 ">
                  <HomeIcon />
                </Pressable>
              </Link>
            </ScrollView>
          )}
        </View>
      </View>
    </Screen>
  );
}
