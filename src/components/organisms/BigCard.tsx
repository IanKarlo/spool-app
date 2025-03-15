import { Colors } from "@/themes";
import { Box } from "../atomics/Box";
import { Typography } from "../atomics/Typography";
import { TouchableOpacity, View } from "react-native";

export function BigCard({ color, fontColor, fn }: { color: Colors, fontColor: Colors, fn: () => void }) {
    return(
        <TouchableOpacity onPress={() => fn()}>
            <Box style={{height: 132, padding: 12}} bgColor={color}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
                    <Typography color={fontColor} style={{fontSize: 18}}>Novo Registro</Typography>
                    <Typography color={fontColor} style={{fontSize: 24, marginTop: -2}}>&gt;</Typography>
                </View>
            </Box>
        </TouchableOpacity>
    )
}