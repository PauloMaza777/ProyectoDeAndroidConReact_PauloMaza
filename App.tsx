/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RoundButton from './components/controls/RoundButton';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [nombre, setNombre] = useState('')
  const buttonOnPress = async () => {
    await Alert.alert('Hola', `Hola ${nombre}`);
    await Alert.alert('otro alert', `Una prueba del otro alert`);
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="#D94021"
        translucent={false} //recorre una linea hacia arriba si es true
      />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> //imagen del encabezado */}
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

          {/* <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks /> */}

          <View style={styles.container}>
            <Image style={styles.logo} source={{ uri: "https://th.bing.com/th/id/OIG2.4nSem3wG4Q5_gi6mxit2?w=1024&h=1024&rs=1&pid=ImgDetMain" }} />
          </View>

          {/* <Text>INTRODUCE TU NOMBRE</Text>
          <TextInput style={styles.textInput} onChangeText={setNombre} /> */}


          {/* <TouchableOpacity style={styles.button} onPress={buttonOnPress}>
            <Text style={styles.buttonText}>di hola</Text>
          </TouchableOpacity>
          <RoundButton title="Bóton redondo" onPress={buttonOnPress} /> */}

          <View style={styles.container2}>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>CATEGORÍAS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>NOTICIAS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>PÓDCASTS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>ESPORTS</Text>
            </TouchableOpacity>

          </View>

          <Text style={styles.text}>CATEGORIAS</Text>

        </View>
      </ScrollView>
    </SafeAreaView>
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
    color: 'black'
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
