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
  subtitle1?: string;
  subtitle2?: string;
  name: string;
  profileImage: string;
  headerType?: headerType;
  hiddenAvatar?: boolean;
}

export default function Header({
  subtitle1,
  subtitle2,
  name,
  profileImage,
  headerType = "withTitle",
  hiddenAvatar = false,
}: HeaderProps) {
  const { tabColor } = usePathnameColor();

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
          <Profile uri={profileImage} color={"darkBlue"} size={96} />
          <Typography
            style={{ fontSize: 28, fontFamily: 'TTChocolates-Medium' }}
            color={"darkBlue"}
          >
            {name}
          </Typography>
          {subtitle1 && <Typography>{subtitle1}</Typography>}
          {subtitle2 && <Typography color="text2">{subtitle2}</Typography>}
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
            <Typography>{subtitle1}</Typography>
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
