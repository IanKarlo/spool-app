import { PageContainer } from "@/components/atomics/PageContainer";
import Header from "@/components/molecules/Header";
import { View } from "react-native";
import { Typography } from "@/components/atomics/Typography";
import { Tag } from "@/components/molecules/Tag";
import { useTheme } from "styled-components/native";
import Profile from "@/components/atomics/Profile";

export const roleMap: {
  [key: string]: string;
} = {
  Therapist: "Terapeuta",
  Educationist: "Educador",
  Child: "Criança",
};

type ViewRegisterPageProps = {
  type: "parent" | "educator" | "therapist";
  child?: {
    name: string;
    info: string;
  };
  currentUser: any;
  record: getEducationistRecordResponse["data"][number];
  isLoading?: boolean;
  error?: Error | null;
};

export default function ViewRegisterPage({
  type,
  child,
  currentUser,
  record,
  isLoading,
  error,
}: ViewRegisterPageProps) {
  const theme = useTheme();

  function formatDate(date: Date): string {
    const dia = String(date.getDate()).padStart(2, "0");
    const mes = String(date.getMonth() + 1).padStart(2, "0"); // mês começa em 0
    const ano = date.getFullYear();

    const hora = String(date.getHours()).padStart(2, "0");
    const minuto = String(date.getMinutes()).padStart(2, "0");

    return `${dia}/${mes}/${ano} às ${hora}h${minuto}`;
  }

  return (
    <PageContainer isLoading={isLoading} error={error}>
      <Header
        name={currentUser.name}
        profileImage="https://github.com/diego3g.png"
        headerType="goBack"
      />
      <View style={{ gap: 20 }}>
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            color="darkBlue"
            style={{
              fontSize: 24,
              fontWeight: 700,
              fontFamily: "TTChocolates-Medium",
            }}
          >
            Detalhes do Registro
          </Typography>
          <Typography style={{ fontSize: 12, fontWeight: 400 }} color="text2">
            {`Feito em ${formatDate(new Date(record.createdAt))}`}
          </Typography>
        </View>
        <View style={{ gap: 8 }}>
          <Typography
            style={{
              fontSize: 20,
              fontFamily: "TTChocolates-Medium",
              fontWeight: 600,
            }}
          >
            Autor
          </Typography>
          <View
            style={{
              backgroundColor: theme.colors.lightBlue,
              padding: 12,
              borderRadius: 8,
            }}
          >
            <Typography color="text2">{`${record.authorName} - ${
              roleMap[record.authorRole]
            }`}</Typography>
          </View>
        </View>
        {child && type !== "parent" && (
          <View style={{ gap: 8 }}>
            <Typography
              style={{
                fontSize: 20,
                fontFamily: "TTChocolates-Medium",
                fontWeight: 600,
              }}
            >
              {type === "educator" ? "Aluno" : "Paciente"}
            </Typography>
            <View
              style={{
                backgroundColor: theme.colors.lightBlue,
                padding: 12,
                borderRadius: 8,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <Profile
                  uri={"https://github.com/diego3g.png"}
                  color="blue"
                  size={48}
                />
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    color="text1"
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      fontFamily: "TTChocolates-Medium",
                    }}
                  >
                    {child.name}
                  </Typography>
                  <Typography color="text2">{child.info}</Typography>
                </View>
              </View>
            </View>
          </View>
        )}
        <View style={{ gap: 8 }}>
          <Typography
            style={{
              fontSize: 20,
              fontFamily: "TTChocolates-Medium",
              fontWeight: 600,
            }}
          >
            Sintomas
          </Typography>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 4,
              flexWrap: "wrap",
            }}
          >
            {record.symptoms.map((symptom, index) => (
              <Tag
                key={index}
                color="blue"
                label={symptom}
                variant="active"
              />
            ))}
          </View>
        </View>
        <View style={{ gap: 8 }}>
          <Typography
            style={{
              fontSize: 20,
              fontFamily: "TTChocolates-Medium",
              fontWeight: 600,
            }}
          >
            Descrição
          </Typography>
          <View
            style={{
              backgroundColor: theme.colors.lightBlue,
              paddingTop: 16,
              paddingHorizontal: 12,
              paddingBottom: 40,
              borderRadius: 8,
            }}
          >
            <Typography color="text2">{record.content}</Typography>
          </View>
        </View>
      </View>
    </PageContainer>
  );
}
