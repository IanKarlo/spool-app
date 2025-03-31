import { Button } from "@/components/atomics/Button";
import { PageContainer } from "@/components/atomics/PageContainer";
import { TextField } from "@/components/atomics/TextField";
import { Typography } from "@/components/atomics/Typography";
import Header from "@/components/molecules/Header";
import { Tag } from "@/components/molecules/Tag";
import { useParents } from "@/contexts/ParentsContext";
import { theme } from '@/themes'
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export default function addTherapist() {
  const { user } = useParents();

  return (
    <PageContainer>
      <Header
        headerType = "goBack"
        name={user?.name || ''}
        profileImage={`https://api.dicebear.com/9.x/adventurer/png?seed=${encodeURI(user?.name ?? '')}`}
      />
    <Typography style={{ fontSize: 24, fontFamily: 'TTChocolates-Medium' }} color="blue">Adicionar Terapeuta</Typography>
      <View style={{ gap: 12 }}>
        <Typography style={{ fontSize: 14 }}>
          E-mail do Terapeuta
        </Typography>
        <TextField placeholder="exemplo@gmail.com"  />
      </View>
      <Button text="Adicionar" color="blue" onPress={() => null} />
    </PageContainer>
  );
}
