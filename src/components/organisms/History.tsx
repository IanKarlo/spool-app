import { View } from "react-native";
import { Typography } from "../atomics/Typography";
import { RegisterCard } from "./RegisterCard";

export function RegisterHistory() {
    return (
        <View style={{gap: 8}}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
                <Typography style={{fontSize: 18}}>Histórico de Registros</Typography>
                <Typography style={{fontSize: 24, marginTop: -2}}>&gt;</Typography>
            </View>
            <View style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                <RegisterCard color="purple"/>
                <RegisterCard color="purple"/>
                <RegisterCard color="purple"/>
            </View>
        </View>
    )
}