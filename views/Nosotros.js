import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const Nosotros = ({ navigation, route }) => {
  //console.log(route.params);
  const { clienteId } = route.params;
  const { totalPagar } = route.params;

  //console.log(props); muestra navigarion y route
  //console.log("holaaa");

  const volver = () => {
    //console.log("En el nameFunction"+ e.target.name);
    navigation.navigate("Inicio");
    //navigation.goBack(); //Sin importar la pagina, vuelve a la anterior
    //navigation.push("Inicio"); //haces las transiciones al reves
  };

  return (
    <View style={styles.contenedor}>
      <Text>El id del Cliente es : {clienteId}</Text>
      <Text>El total a Pagar es : {totalPagar}</Text>
      <Button title="Ir a Inicio" onPress={() => volver()} />
    </View>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: "center",

    justifyContent: "center",
  },
});

export default Nosotros;
