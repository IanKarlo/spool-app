import { Box } from '@/components/Box'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { PageContainer } from '@/components/PageContainer'
import { Typography } from '@/components/Typography'
import { Link, Stack } from "expo-router"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import styled from "styled-components/native"
import { TextField } from '@/components/TextField'
import Profile from '@/components/Profile'

const TestButton = styled.TouchableOpacity`
    background-color: #4CAF50;
    font-color: purple;
    margin: 10px;
    border: 1px solid #4CAF50;
`

export default function Index() {
  return (
    <ScrollView>
      <PageContainer>
        <Typography>Atômicos</Typography>

        <Box
          style={{ width: 100, height: 50, padding: 10 }}
          bgColor='blue'
        >

          <Typography style={{ fontSize: 24 }}>Box</Typography>
        </Box>

        <Icon name="home" color='blue' size={32} />

        <Typography color='black' style={{ fontSize: 16 }}  >Teste da fonte</Typography>
        <Typography color='black' style={{ fontSize: 16, fontWeight: 'bold' }}  >Teste da fonte</Typography>
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
        <View style={{ height: 1, width: '100%', backgroundColor: 'black' }} />

        <TextField
          label="Name"
          placeholder="Enter your name"
        />

        <TextField
          label="Description"
          placeholder="Enter description"
          multiline
        />

        <TextField
          label="Email"
          placeholder="Enter your email"
          error="Invalid email address"
        />

        <Profile uri='https://github.com/diego3g.png' color='pink' />
        <Profile uri='https://github.com/diego3g.png' color='pink' size={128} />
      </PageContainer>
    </ScrollView>
  )
}
