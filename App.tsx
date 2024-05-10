import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const logo2 = require('./imagenes/logo2.png'); // Asegúrate de tener la ruta correcta del logo

// Tu componente principal
const App = (): React.JSX.Element => {
  const drawerRef = useRef<DrawerLayoutAndroid>(null); // Referencia del cajón
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>(
    'left',
  ); // Posición del cajón

  const toggleDrawerPosition = () => {
    setDrawerPosition(prev => (prev === 'left' ? 'right' : 'left')); // Alternar posición
  };

  // Vista del cajón con contenido
  const navigationView = () => (
    <View style={[styles.drawerContent, styles.navigationContainer]}>
      <Text style={styles.drawerText}>Estoy en el cajón!</Text>
      <Button
        title="Cerrar Cajón"
        onPress={() => drawerRef.current?.closeDrawer()} // Cerrar el cajón
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <DrawerLayoutAndroid
        ref={drawerRef} // Referencia del cajón
        drawerWidth={300} // Ancho del cajón
        drawerPosition={drawerPosition} // Posición del cajón
        renderNavigationView={navigationView} // Contenido del cajón
      >
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
            <Text style={styles.paragraph}>Cajón a la {drawerPosition}</Text>
            <Button
              title="Cambiar Posición del Cajón"
              onPress={toggleDrawerPosition}
            />
            <Button
              title="Abrir Cajón"
              onPress={() => drawerRef.current?.openDrawer()} // Botón para abrir el cajón
            />
          </View>
        </ScrollView>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
};

// Componente de botón personalizado
const Boton1 = ({texto}: {texto: string}) => (
  <TouchableOpacity style={styles.button} onPress={() => {}}>
    <Text style={styles.buttonText}>{texto}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  container3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  button: {
    backgroundColor: 'purple',
    borderRadius: 50,
    padding: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  drawerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  drawerText: {
    fontSize: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1', // Agregamos el estilo para el contenido del cajón
  },
});

export default App;
