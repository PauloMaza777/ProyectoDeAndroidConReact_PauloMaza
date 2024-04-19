/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  // Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  // TextInput,
  // Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import RoundButton from './components/controls/RoundButton';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import DrawerScreens from './Navigation/Drawer/DrawerScreens';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('./imagenes/logo2.png')} />
        </View>

        <View style={styles.container2}>
          <Boton1 texto="CATEGORÍAS" />
          <Boton1 texto="NOTICIAS" />
          <Boton1 texto="PÓDCASTS" />
          <Boton1 texto="ESPORTS" />
        </View>
        <Text style={styles.text}>CATEGORIAS</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function Boton1({texto}: {texto: string}) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={styles.buttonText}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  text: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
  textInput: {
    // borderBlockColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    borderStyle: 'solid',
    margin: 8,
    backgroundColor: 'pink',
  },
  button: {
    backgroundColor: 'purple',
    borderRadius: 50,
    padding: 8,
    color: 'white',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    textTransform: 'uppercase',
  },
  container: {
    flex: 1, // El contenedor usa todo el espacio disponible
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente
  },
  logo: {
    width: 150, // Ancho de la imgen
    height: 150, // Tamaño de la imagen
  },
  container2: {
    flexDirection: 'row', // Alinea los elementos (botones) horizontalmente
    justifyContent: 'space-around', // Distribuye el espacio de manera uniforme
    alignItems: 'center', // Centra los elementos verticalmente
    marginTop: 10, // Ajusta esto según sea necesario
  },
});

export default App;
