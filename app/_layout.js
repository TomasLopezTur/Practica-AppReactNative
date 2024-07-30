import { Slot, Stack } from "expo-router";
import { View, Pressable } from "react-native";
import { HomeIcon, AboutIcon } from "../components/Icons";
import { LogoBanner } from "../components/Logo";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function Layout() {
  return (
    <View className="flex-1 bg-black">
      {/* <Slot /> */}
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <LogoBanner />,
          headerRight: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Link asChild href="/">
                <Pressable className="flex justify-center items-center mb-4 pl-4">
                  <HomeIcon />
                </Pressable>
              </Link>
              <Link asChild href="/about">
                <Pressable className="flex justify-center items-center mb-4 pl-6">
                  <AboutIcon />
                </Pressable>
              </Link>
            </View>
          ),
        }}
      />
    </View>
  );
}
