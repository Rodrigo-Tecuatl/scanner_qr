import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button, Dimensions, TouchableOpacity } from 'react-native';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';

export default function Scanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [activeCamera, setActiveCamera] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      
    })();
  }, [activeCamera]);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Se escaneó el código de barras con el tipo ${type} y los datos ${data}`);
  };

  if (hasPermission === null) {
    return <Text>Solicitando permiso de cámara</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sin acceso a la cámara</Text>;
  }

  console.log(scanned);
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        type={BarCodeScanner.Constants.Type.back}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        style={StyleSheet.absoluteFillObject} 
      />
      <BarcodeMask width={250} height={250} edgeColor="#62B1F6" showAnimatedLine={false} edgeRadius={15} edgeHeight={40} edgeWidth={40} backgroundColor="rgba(0, 0, 0, 0.3)" />
      {scanned && <Button title={'Toque para escanear de nuevo'} onPress={() => setScanned(false)} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scannerInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
