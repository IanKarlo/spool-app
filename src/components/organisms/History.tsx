import { View } from "react-native";
import { Typography } from "../atomics/Typography";
import { RegisterCard } from "./RegisterCard";

export function RegisterHistory({hideIcon, cardFn}: {hideIcon?: boolean, cardFn: () => void  }) {
    return (
        <View style={{gap: 8}}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
                <Typography style={{fontSize: 18}}>Histórico de Registros</Typography>
                {!hideIcon && <Typography style={{fontSize: 24, marginTop: -2}}>&gt;</Typography>}
            </View>
            <View style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                <RegisterCard fn={cardFn} color="purple"/>
                <RegisterCard fn={cardFn} color="purple"/>
                <RegisterCard fn={cardFn} color="purple"/>
                <RegisterCard fn={cardFn} color="purple"/>
                <RegisterCard fn={cardFn} color="purple"/>
            </View>
        </View>
    )
}