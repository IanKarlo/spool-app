import { Button } from "@/components/atomics/Button";
import { PageContainer } from "@/components/atomics/PageContainer";
import { TextField } from "@/components/atomics/TextField";
import { Typography } from "@/components/atomics/Typography";
import Header from "@/components/molecules/Header";
import { Tag } from "@/components/molecules/Tag";
import { Select } from "@/components/organisms/Select";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { usePostRecord } from "@/services/apiService";
import { useQueryClient } from '@tanstack/react-query'

type FormValues = {
  authorId: number;
  authorRole: string;
  authorName: string;
  childId: number | null;
  symptoms: string[];
  content: string;
};

type NewRegisterPageProps = {
  type: "parent" | "educator" | "therapist";
  children?: any[] | null;
  isLoading?: boolean;
  error?: Error | null;
  currentUser: any;
};

export default function NewRegisterPage({
  type,
  isLoading,
  error,
  children,
  currentUser,
}: NewRegisterPageProps) {
  const { mutateAsync } = usePostRecord();
  const queryClient = useQueryClient();
  const [submitting, setSubmitting] = useState(false);
  const { setValue, watch, handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      authorId: currentUser.id,
      authorRole: currentUser.role,
      authorName: currentUser.name,
      childId: currentUser.role === "Child" ? currentUser.id : children && children.length > 0 ? children[0].id : null,
      symptoms: [],
      content: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    await mutateAsync(data);
    queryClient.invalidateQueries({ queryKey: ["getEducationistRecord"] });
    queryClient.invalidateQueries({ queryKey: ["getChildEducationistRecord"] });
    queryClient.invalidateQueries({ queryKey: ["getTherapistRecord"] });
    queryClient.invalidateQueries({ queryKey: ["getChildTherapistRecord"] });
    queryClient.invalidateQueries({ queryKey: ["getChildRecord"] });
    setSubmitting(false);
    router.back();
  };

  return (
    <PageContainer isLoading={isLoading} error={error}>
      <Header
        headerType="goBack"
        name="John Doe"
        profileImage="https://github.com/diego3g.png"
      />
      <Typography
        color="darkBlue"
        style={{ fontSize: 24, fontFamily: "TTChocolates-Medium" }}
      >
        Novo Registro
      </Typography>
      {type !== "parent" && children && children.length > 0 && (
        <View style={{ gap: 12 }}>
          <Typography style={{ fontSize: 18 }}>
            Selecionar {type === "educator" ? "Aluno" : "Paciente"}
          </Typography>
          <Select
            itens={children}
            onSelect={(item) => setValue("childId", item.id)}
          />
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
          {[
            "Feliz",
            "Triste",
            "Ansioso",
            "Irritado",
            "Calmo",
            "Desanimado",
            "Eufórico",
            "Apreensivo",
          ].map((symptoms) => {
            return (
              <Tag
                label={symptoms}
                variant={
                  watch("symptoms").includes(symptoms) ? "active" : "inactive"
                }
                color="blue"
                key={symptoms}
                onPress={() => {
                  const selecteds = new Set(watch("symptoms"));
                  if (selecteds.has(symptoms)) {
                    selecteds.delete(symptoms);
                    const newSelecteds = new Set(selecteds);
                    setValue("symptoms", [...newSelecteds]);
                  } else {
                    selecteds.add(symptoms);
                    setValue("symptoms", [...selecteds]);
                  }
                }}
              />
            );
          })}
        </View>
      </View>
      <View style={{ gap: 12 }}>
        <Typography style={{ fontSize: 18 }}>Descrição</Typography>
        <Controller
          control={control}
          name="content"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              placeholder="Coloque a descrição aqui..."
              multiline
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </View>
      <Button
        text="Salvar Registro"
        color="blue"
        onPress={handleSubmit(onSubmit)}
        isLoading={submitting}
      />
    </PageContainer>
  );
}
