import { Button } from "@/components/atomics/Button";
import { PageContainer } from "@/components/atomics/PageContainer";
import { TextField } from "@/components/atomics/TextField";
import { Typography } from "@/components/atomics/Typography";
import Header from "@/components/molecules/Header";
import { useParents } from "@/contexts/ParentsContext";
import { useForm, Controller } from "react-hook-form";
import { View, Alert } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { usePostTherapist } from "@/services/apiService";
import { useQueryClient } from "@tanstack/react-query";

type FormValues = {
  name: string;
  email: string;
  licenseNumber: string;
  specialization: string;
};

export default function AddTherapistPage() {
  const { user } = useParents();
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      licenseNumber: "",
      specialization: "",
    },
  });

  const [submitting, setSubmitting] = useState(false);
  const { mutateAsync } = usePostTherapist();
  const queryClient = useQueryClient();

  const onSubmit = async (data: FormValues) => {
    try {
      setSubmitting(true);
      await mutateAsync({...data, childId: user?.id!});
      queryClient.invalidateQueries({ queryKey: ["getChildTherapist"] });
      queryClient.invalidateQueries({ queryKey: ["getChildTherapistRecord"] });
      reset();
      router.back();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível adicionar o terapeuta.");
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageContainer>
      <Header
        headerType="goBack"
        name={user?.name || ""}
        profileImage={`https://api.dicebear.com/9.x/adventurer/png?seed=${encodeURI(
          user?.name ?? ""
        )}`}
      />
      <Typography
        style={{ fontSize: 24, fontFamily: "TTChocolates-Medium" }}
        color="blue"
      >
        Adicionar Terapeuta
      </Typography>

      <View style={{ gap: 12 }}>
        <Typography style={{ fontSize: 14 }}>Nome</Typography>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              placeholder="Nome completo"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </View>

      <View style={{ gap: 12 }}>
        <Typography style={{ fontSize: 14 }}>E-mail</Typography>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              placeholder="exemplo@gmail.com"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              keyboardType="email-address"
            />
          )}
        />
      </View>

      <View style={{ gap: 12 }}>
        <Typography style={{ fontSize: 14 }}>Número do Registro</Typography>
        <Controller
          control={control}
          name="licenseNumber"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              placeholder="CRP ou equivalente"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </View>

      <View style={{ gap: 12 }}>
        <Typography style={{ fontSize: 14 }}>Especialização</Typography>
        <Controller
          control={control}
          name="specialization"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              placeholder="Ex: ABA, Fonoaudiologia..."
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </View>

      <Button
        text="Adicionar"
        color="blue"
        onPress={handleSubmit(onSubmit)}
        isLoading={submitting}
      />
    </PageContainer>
  );
}
