/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  // TextInput,
  // Touchable,
  TouchableOpacity,
  View,
  Image,
  DrawerLayoutAndroid,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import RoundButton from './components/controls/RoundButton';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import DrawerScreens from './Navigation/Drawer/DrawerScreens';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './Navigation/Screens/HomeScreen';
import UserScreen from './Navigation/Screens/UserScreen';
import SettingsScreen from './Navigation/Screens/SettingsScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// const DrawerNav = () => {
//   const drawer = useRef<DrawerLayoutAndroid>(null);

//   const navigationView = () => (
//   );

//   return (

//     // <Drawer.Navigator>
//     //   <Drawer.Screen name="Home" component={HomeScreen} />
//     //   <Drawer.Screen name="User" component={UserScreen} />
//     //   <Drawer.Screen name="Settings" component={SettingsScreen} />
//     // </Drawer.Navigator>
//   );
// };

const logo2 = require('./imagenes/logo2.png');

function App(): React.JSX.Element {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>(
    'left',
  );
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const navigationView = () => (
    <View style={[styles.container3, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current?.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.logo} source={logo2} />
        </View>

        <View style={styles.container2}>
          <Boton1 texto="CATEGORÍAS" />
          <Boton1 texto="NOTICIAS" />
          <Boton1 texto="PÓDCASTS" />
          <Boton1 texto="ESPORTS" />
        </View>

        <View style={styles.container3}>
          <Text style={styles.paragraph}>Drawer on the {drawerPosition}!</Text>
          <Button
            title="Change Drawer Position"
            onPress={() => changeDrawerPosition()}
          />
          <Text style={styles.paragraph}>
            Swipe from the side or press button below to see it!
          </Text>
          <Button
            title="Open drawer"
            onPress={() => drawer.current?.openDrawer()}
          />
        </View>
      </ScrollView>
    </DrawerLayoutAndroid>
  );
}

// function App(): React.JSX.Element {
//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <View style={styles.container}>
//           <Image style={styles.logo} source={require('./imagenes/logo2.png')} />
//         </View>

//         <View style={styles.container2}>
//           <Boton1 texto="CATEGORÍAS" />
//           <Boton1 texto="NOTICIAS" />
//           <Boton1 texto="PÓDCASTS" />
//           <Boton1 texto="ESPORTS" />
//         </View>
//         <View>
//           {/* <NavigationContainer>
//             <DrawerNav />
//           </NavigationContainer> */}
//         </View>
//         <Text style={styles.text}>CATEGORIAS</Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

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
  container3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default App;
