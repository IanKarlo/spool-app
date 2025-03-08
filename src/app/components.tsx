import { Box } from '@/components/Box'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Typography } from '@/components/Typography'
import { Link, Stack } from "expo-router"
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
      <TestButton><Text>Teste</Text></TestButton>
      <Box
        style={{ width: 100, height: 50, padding: 10 }}
        bgColor='blue'
      >
        <Text>Teste</Text>
      </Box>
      <Icon name="home" color='blue' size={32} />
      <Typography color='black' style={{ fontSize: 24 }}  >Teste da fonte</Typography>
      <Button
        text="Press me"
        onPress={() => console.log('pressed')}
      />

      <Button
        variant="outlined"
        color="blue"
        text="Outlined Button"
        onPress={() => console.log('pressed outlined')}
      />
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