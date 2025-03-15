import { Colors } from "@/themes";
import { Box } from "../atomics/Box";
import { TouchableOpacity, View } from "react-native";
import { Typography } from "../atomics/Typography";
import { Tag } from "../molecules/Tag";

export function RegisterCard({ color, fn }: { color: Colors, fn: () => void }) {
    return (
        <TouchableOpacity onPress={() => fn()}>
            <Box style={{height: 160, width: '100%', padding: 12}} bgColor={color}>
                <View style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Typography color='white' style={{fontSize: 18, fontWeight: 'bold'}}>Kelly Azevedo</Typography>
                            <Typography color='white' style={{fontSize: 14}}>Responsável</Typography>
                        </View>
                        <Typography color="white">20/02 ás 12h00</Typography>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 4}}>
                        <Tag icon="airplay" color="purple" label="Bom-humor" variant="white"/>
                        <Tag icon="airplay" color="purple" label="Bom-humor" variant="white"/>
                        <Tag icon="airplay" color="purple" label="Bom-humor" variant="white"/>
                    </View>
                    <Typography color="white" style={{fontSize: 14, marginTop: 12}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Typography>
                </View>
            </Box>
        </TouchableOpacity>
    )
}