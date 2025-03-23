import { Button } from "@/components/atomics/Button";
import { PageContainer } from "@/components/atomics/PageContainer";
import { TextField } from "@/components/atomics/TextField";
import { Typography } from "@/components/atomics/Typography";
import Header from "@/components/molecules/Header";
import { Tag } from "@/components/molecules/Tag";
import { Select } from '@/components/organisms/Select'
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

type NewRegisterPageProps = {
  type: 'parent' | 'educator' | 'therapist'
}

export default function NewRegisterPage({type}: NewRegisterPageProps) {
  const [selecteds, setSelecteds] = useState<Set<number>>(new Set());

  return (
    <PageContainer>
      <Header
        headerType = "goBack"
        name="John Doe"
        profileImage="https://github.com/diego3g.png"
      />
    <Typography color="darkBlue" style={{ fontSize: 24, fontFamily: 'TTChocolates-Medium' }}>Novo Registro</Typography>
    {type !== 'parent' && (
      <View style={{ gap: 12 }}>
        <Typography style={{ fontSize: 18 }}>Selecionar {type === 'educator' ? 'Aluno' : 'Paciente'}</Typography>
        <Select itens={itens} onSelect={(item) => console.log("Selecionado:", item)} />
      </View>
      )}
      <View style={{ gap: 12 }}>
        <Typography style={{ fontSize: 18 }}>Sintomas</Typography>
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
                color="blue"
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
          Descrição
        </Typography>
        <TextField placeholder="Coloque a descrição aqui..." multiline />
      </View>
      <Button text="Salvar Registro" color="blue" onPress={() => router.back()} />
    </PageContainer>
  );
}

const itens = [
  {
    id: "1",
    name: "Mateus Azevedo",
    className: "Turma 1A",
    imageUrl: "https://github.com/diego3g.png",
  },
  {
    id: "2",
    name: "Maria Silva",
    className: "Turma 2B",
    imageUrl: "https://github.com/diego3g.png",
  },
  {
    id: "3",
    name: "João Souza",
    className: "Turma 3C",
    imageUrl: "https://github.com/diego3g.png",
  },
];
