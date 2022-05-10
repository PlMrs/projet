import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, Vibration, View } from 'react-native';
import Footer from './components/Footer';
import Header from './components/Header';
import Sensor from './components/Sensor';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation} : any){
  return(
    <View style={styles.container}>
        <Header title ={"Voici le header"} />
        <View style={styles.container}>
          <Button title="Utiliser le gyroscope" onPress={() => { navigation.navigate('Gyroscope') }}></Button>
        </View>
        <Footer title ={"le footer"} />
      <StatusBar style="auto" />
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Gyroscope" component={Sensor} />
          </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
