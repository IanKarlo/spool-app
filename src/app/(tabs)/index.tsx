import { Box } from '@/components/Box'
import { Icon } from '@/components/Icon'
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
      <Box style={{ width: 100, height: 50, padding: 10 }} backgroundColor="green">
        <Text>Teste</Text>
      </Box>
      <Icon name="home" color='pink' size={32} />
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