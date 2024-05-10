import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
} from 'react-native';

// Definición de un componente de cajón reutilizable
interface DrawerComponentProps {
  initialDrawerPosition?: 'left' | 'right'; // Posición inicial del cajón
  drawerWidth?: number; // Ancho del cajón
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({
  initialDrawerPosition = 'left', // Posición por defecto
  drawerWidth = 300, // Ancho por defecto
}) => {
  const drawer = useRef<DrawerLayoutAndroid>(null); // Referencia al cajón
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>(
    initialDrawerPosition,
  ); // Posición del cajón

  const changeDrawerPosition = () => {
    setDrawerPosition(prev => (prev === 'left' ? 'right' : 'left')); // Alternar posición
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current?.closeDrawer()} // Cerrar el cajón
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer} // Referencia del cajón
      drawerWidth={drawerWidth}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>Drawer on the {drawerPosition}!</Text>
        <Button title="Change Drawer Position" onPress={changeDrawerPosition} />
        <Text style={styles.paragraph}>
          Swipe from the side or press button to open the drawer!
        </Text>
        <Button
          title="Open drawer"
          onPress={() => drawer.current?.openDrawer()} // Abrir el cajón
        />
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default DrawerComponent;
