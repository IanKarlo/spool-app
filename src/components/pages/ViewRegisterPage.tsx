import { PageContainer } from "@/components/atomics/PageContainer";
import Header from "@/components/molecules/Header";
import { View } from "react-native";
import { Typography } from "@/components/atomics/Typography";
import { Tag } from "@/components/molecules/Tag";
import { useTheme } from "styled-components/native";

export default function ViewRegisterPage() {
  const theme = useTheme();
  return (
    <PageContainer>
      <Header
        name="John Doe"
        profileImage="https://github.com/diego3g.png"
        headerType = "goBack"
      />
      <View style={{ gap: 20 }}>
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            color='darkBlue'
            style={{
              fontSize: 24,
              fontWeight: 700,
              fontFamily: 'TTChocolates-Medium',
            }}
          >
            Detalhes do Registro
          </Typography>
          <Typography style={{ fontSize: 12, fontWeight: 400 }} color='text2'>
            Feito em 12/12/2021 às 12h00
          </Typography>
        </View>
        <View style={{ gap: 8 }}>
            <Typography style={{ fontSize: 20, fontFamily: 'TTChocolates-Medium', fontWeight: 600 }}>Autor</Typography>
            <View
            style={{
              backgroundColor: theme.colors.lightBlue,
              padding: 12,
              borderRadius: 8,
            }}
          >
            <Typography color='text2'>
                Bruna Silva (Professora)
            </Typography>
          </View>

        </View>
        <View style={{ gap:8 }}>
          <Typography style={{ fontSize: 20, fontFamily: 'TTChocolates-Medium', fontWeight: 600 }}>Sintomas</Typography>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 4,
              flexWrap: "wrap",
            }}
          >
            <Tag
              icon="airplay"
              color="blue"
              label="Bom-humor"
              variant="active"
            />
            <Tag
              icon="airplay"
              color="blue"
              label="Bom-humor"
              variant="inactive"
            />
            <Tag
              icon="airplay"
              color="blue"
              label="Bom-humor"
              variant="active"
            />
            <Tag
              icon="airplay"
              color="blue"
              label="Bom-humor"
              variant="inactive"
            />
            <Tag
              icon="airplay"
              color="blue"
              label="Bom-humor"
              variant="active"
            />
          </View>
        </View>
        <View style={{ gap:8 }}>
          <Typography style={{ fontSize: 20, fontFamily: 'TTChocolates-Medium', fontWeight: 600 }}>Descrição</Typography>
          <View
            style={{
              backgroundColor: theme.colors.lightBlue,
              paddingTop: 16,
              paddingHorizontal: 12,
              paddingBottom: 40,
              borderRadius: 8,
            }}
          >
            <Typography color='text2'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </Typography>
          </View>
        </View>
      </View>
    </PageContainer>
  );
}
