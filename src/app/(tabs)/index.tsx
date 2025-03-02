import { Box } from '@/components/Box'
import { Link } from "expo-router"
import { StyleSheet, Text, View } from "react-native"
import styled from "styled-components/native"

const TestButton = styled.TouchableOpacity`
    background-color: #4CAF50;
    font-color: purple;
    margin: 10px;
    border: 1px solid #4CAF50;
`

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Index Page!!!</Text>
      <Link href="/landing"> Landing Page</Link>
      <TestButton><Text>Teste</Text></TestButton>
      <Box width={100} height={100} backgroundColor="red">
        <Text>Teste</Text>
      </Box>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
})