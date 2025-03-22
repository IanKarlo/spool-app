import { Icon } from "@/components/atomics/Icon";
import Profile from "@/components/atomics/Profile";
import { Typography } from "@/components/atomics/Typography";
import type { Colors } from "@/themes";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { usePathnameColor } from "@/hooks/usePathnameColor";

type headerType = "profile" | "withTitle" | "goBack";
interface HeaderProps {
  simpleText?: string;
  name: string;
  profileImage: string;
  headerType?: headerType;
  hiddenAvatar?: boolean;
}

export default function Header({
  simpleText,
  name,
  profileImage,
  headerType = "withTitle",
  hiddenAvatar = false,
}: HeaderProps) {
  const { tabColor } = usePathnameColor();
  const text = !simpleText ? "Resumo de" : simpleText;

  switch (headerType) {
    case "profile":
      return (
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => router.back()} style={{ alignSelf: "flex-start" }}>
            <Icon name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Profile uri={profileImage} color={"darkBlue"} size={90} />
          <Typography
            style={{ fontSize: 28, fontFamily: 'TTChocolates-Medium' }}
            color={"darkBlue"}
          >
            {name}
          </Typography>
          <Typography>{text}</Typography>
        </View>
      );
    case "withTitle":
      return (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Typography>{text}</Typography>
            <Typography
              style={{ fontSize: 28, fontWeight: "bold" }}
              color={tabColor}
            >
              {name}
            </Typography>
          </View>
          {!hiddenAvatar && <Profile uri={profileImage} color={tabColor} />}
        </View>
      );
    case "goBack":
      return (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <Icon name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          {!hiddenAvatar && <Profile uri={profileImage} color={tabColor} />}
        </View>
      );
    default:
      return null;
  }
}
