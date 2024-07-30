import { Pressable, ScrollView, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Screen } from "../../components/Screen";

import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        {/* <Link asChild href="/"> */}
        {/* <Pressable className="flex justify-center items-center ">
          {({ pressed }) => <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />} 
        </Pressable> */}
        {/* <StyledPressable
          className={`active:opacity-50 flex justify-center items-center`}
        >
          <HomeIcon />
        </StyledPressable>
      </Link> */}
        <Text className="text-white font-bold mb-8 text-2xl mt-1 text-center">
          Sobre el proyecto
        </Text>
        <Text className="text-white text-white/90 mb-4">
          this is about, lorem ipsum dolor sit amet consectetur adipisicing
          elit. lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
          ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          this is about, lorem ipsum dolor sit amet consectetur adipisicing
          elit. lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
          ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          this is about, lorem ipsum dolor sit amet consectetur adipisicing
          elit. lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
          ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          this is about, lorem ipsum dolor sit amet consectetur adipisicing
          elit. lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
          ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
        <StatusBar style="light" />
      </ScrollView>
    </Screen>
  );
}
