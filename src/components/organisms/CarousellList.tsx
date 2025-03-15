import { Colors } from "@/themes";
import { Box } from "../atomics/Box";
import { Typography } from "../atomics/Typography";
import { ScrollView, View } from "react-native";
import { ProfileCard } from "./ProfileCard";

export function CarousellList({ color, fontColor, cardColor, cardFontcolor }: { color: Colors, fontColor: Colors, cardColor: Colors, cardFontcolor: Colors }) {
    return(
        <Box style={{height: 160, padding: 12}} bgColor={color}>
            <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'center', gap: 16}}>
                <Typography color={fontColor} style={{fontSize: 18}}>Pacientes</Typography>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{display: 'flex', flexDirection: 'row', gap: 24}}>
                    <ProfileCard color={cardColor} fontColor={cardFontcolor} variation='small' style={{marginRight: 12}}/>
                    <ProfileCard color={cardColor} fontColor={cardFontcolor} variation='small' style={{marginRight: 12}}/>
                    <ProfileCard color={cardColor} fontColor={cardFontcolor} variation='small' style={{marginRight: 12}}/>
                    <ProfileCard color={cardColor} fontColor={cardFontcolor} variation='small'/>
                </ScrollView>
            </View>
        </Box>
    )
}