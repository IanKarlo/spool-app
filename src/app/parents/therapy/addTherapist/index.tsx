import { Button } from "@/components/atomics/Button";
import { PageContainer } from "@/components/atomics/PageContainer";
import { TextField } from "@/components/atomics/TextField";
import { Typography } from "@/components/atomics/Typography";
import Header from "@/components/molecules/Header";
import { Tag } from "@/components/molecules/Tag";
import { theme } from '@/themes'
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export default function addTherapist() {

  return (
    <PageContainer>
      <Header
        headerType = "goBack"
        name="John Doe"
        profileImage="https://github.com/diego3g.png"
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
