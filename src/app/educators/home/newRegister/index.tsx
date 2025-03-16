import { Button } from "@/components/atomics/Button";
import { PageContainer } from "@/components/atomics/PageContainer";
import { TextField } from "@/components/atomics/TextField";
import { Typography } from "@/components/atomics/Typography";
import Header from "@/components/molecules/Header";
import { Tag } from "@/components/molecules/Tag";
import { SelectUsageExample } from "@/components/organisms/Select";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export default function NewRegister() {
  const [selecteds, setSelecteds] = useState<Set<number>>(new Set());

  return (
    <PageContainer>
      <Header
        showGoBackButton
        name="John Doe"
        profileImage="https://github.com/diego3g.png"
      />
      <Typography style={{ fontSize: 22 }}>Novo Registro</Typography>
      <View>
        <Typography style={{ fontSize: 18 }}>Selecionar aluno</Typography>
        <SelectUsageExample />
      </View>
      <View>
        <Typography>Sintomas</Typography>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 4,
            flexWrap: "wrap",
          }}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
            return (
              <Tag
                label="Bom-humor"
                icon="airplay"
                variant={selecteds.has(index) ? "active" : "inactive"}
                color="purple"
                key={index}
                onPress={() => {
                  if (selecteds.has(index)) {
                    selecteds.delete(index);
                    const newSelecteds = new Set(selecteds);
                    setSelecteds(newSelecteds);
                  } else {
                    setSelecteds(new Set([...selecteds, index]));
                  }
                }}
              />
            );
          })}
        </View>
      </View>
      <View style={{ gap: 12 }}>
        <Typography style={{ fontSize: 18 }}>
          Descreva um pouco melhor
        </Typography>
        <TextField placeholder="Coloque a descrição aqui..." multiline />
      </View>
      <Button text="salvar" color="purple" onPress={() => router.back()} />
    </PageContainer>
  );
}
