import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = { Tab: undefined };



export default function Details() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Button title='Press to Tab' onPress={() => navigation.navigate("Tab")}></Button>
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