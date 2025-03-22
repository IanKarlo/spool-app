import { PageContainer } from "@/components/atomics/PageContainer";
import { Typography } from "@/components/atomics/Typography";
import Header from "@/components/molecules/Header";
import { ProfileCard } from "@/components/organisms/ProfileCard";
import RegisterCardList from "@/components/organisms/RegisterCardList";
import { theme } from "@/themes";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, TouchableOpacity, View } from "react-native";

export default function therapistList() {
  return (
    <PageContainer>
      <Header
        name="John Doe"
        profileImage="https://github.com/diego3g.png"
        headerType="goBack"
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            fontSize: 20,
            fontWeight: 600,
          }}
          color="darkBlue"
        >
          Terapeutas
        </Typography>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
          }}
          onPress={() => router.push("/parents/therapy/addTherapist")}
        >
          <Typography
            style={{
              fontSize: 14,
              fontWeight: 400,
            }}
            color="darkBlue"
          >
            Adicionar Terapeuta
          </Typography>
          <Ionicons name="add" size={14} color={theme.colors.darkBlue} />
        </TouchableOpacity>
      </View>

      <View style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <ProfileCard
          fn={() => router.push("/parents/teaching/viewTeacher")}
          color="darkBlue"
          variation="normal"
          style={{ marginRight: 12 }}
          name="Kelly Azevedo"  
          info="Terapeuta"
        />
        <ProfileCard
          fn={() => router.push("/parents/teaching/viewTeacher")}
          color="darkBlue"
          variation="normal"
          style={{ marginRight: 12 }}
          info="Terapeuta"
          name="Kelly Azevedo"
        />
        <ProfileCard
          fn={() => router.push("/parents/teaching/viewTeacher")}
          color="darkBlue"
          variation="normal"
          style={{ marginRight: 12 }}
          info="Terapeuta"
          name="Kelly Azevedo"
        />
        <ProfileCard
          fn={() => router.push("/parents/teaching/viewTeacher")}
          color="darkBlue"
          variation="normal"
          name="Kelly Azevedo"
          info="Terapeuta"
        />
      </View>
    </PageContainer>
  );
}
