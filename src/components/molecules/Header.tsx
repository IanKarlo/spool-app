import { Icon } from "@/components/atomics/Icon";
import Profile from "@/components/atomics/Profile";
import { Typography } from "@/components/atomics/Typography";
import type { Colors } from "@/themes";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { router } from "expo-router";

interface HeaderProps {
	name: string;
	color: Colors;
	profileImage: string;
	showGoBackButton?: boolean;
}

export default function Header({
	name,
	profileImage,
	showGoBackButton = false,
	color,
}: HeaderProps) {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			{showGoBackButton ? (
				<TouchableOpacity onPress={() => router.back()}>
					<Icon name="arrow-left" size={24} color="black" />
				</TouchableOpacity>
			) : (
				<View>
					<Typography>Resumo de</Typography>
					<Typography style={{ fontSize: 28, fontWeight: "bold" }} color={color}>
						{name}
					</Typography>
				</View>
			)}
			<Profile uri={profileImage} color={color} />
		</View>
	);
}
