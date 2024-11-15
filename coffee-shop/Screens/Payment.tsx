import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = { Details: undefined };


export default function Payment() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      <Button title='Press to details' onPress={() => navigation.navigate("Details")}></Button>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  }, text: {
    textAlign: 'center'
  }
});