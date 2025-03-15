import { View } from "react-native";
import Profile from "../atomics/Profile";
import { Typography } from "../atomics/Typography";
import { Colors } from "@/themes";

export function ProfileHeader({nameColor}: {nameColor?: Colors}) {
    return (
        <View style={{margin: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12}}>
            <Profile uri='https://github.com/diego3g.png' color='pink' size={96}/>
            <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Typography style={{fontSize: 24}} color={nameColor ?? "black"}>Matheus Azevedo</Typography>
                <Typography>Nível de suporte II</Typography>
                <Typography>6 Anos</Typography>
            </View>
        </View>
    )
}