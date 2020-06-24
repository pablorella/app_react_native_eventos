import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { EventosContext } from "../context/EventosContext";

const Inicio = ({ navigation }) => {
  const { eventos, guardarEventos } = useContext(EventosContext);
  const { eventoClick, guardarEventoClick } = useContext(EventosContext);

  useEffect(() => {
    //console.log("----INICIO----")
    //console.log("Eventos del inicio")
    /* console.log(eventos.eventos.inputNombreEven  to) */
    //console.log(eventos)
    //console.log("-----Fin---")
    //guardarEventoClick("");
  }, [eventos]);

  //al iniciar el componenete inicializo el localstroge
  const inicializarStorage = async () => {};

  const informacion = {
    clienteId: 20,
    totalPagar: 500,
  };

  const getAsisten = (nombre) => {
    let asistiran = 0;
    //console.log("Desde el getsistem")
    //console.log(nombre)
    eventos.eventos.forEach((elemento) => {
      elemento["inputNombreEvento"] === nombre
        ? elemento["participante"].objetosParticipantes.forEach((elemento2) => {
            //console.log("elemento2")
            //console.log(elemento2);
            if (elemento2.estado === true) {
              asistiran = asistiran + 1;
            }
          })
        : null;
    });

    return asistiran;
  };
  const obtenerDatosStorage = async () => {
    try {
      /* setItem es clave valor */
      const longitud = await AsyncStorage.getItem("eventos");
      //console.log(JSON.parse(longitud).eventos.length); //muestra lo que hay en el storage
    } catch (error) {
      //console.log(error);
    }
  };
  const visitarNosotros = () => {
    //console.log("En el nameFunction"+ e.target.name);
    navigation.navigate("Nosotros", informacion);
  };

  const activarVerParticipantes = (nameEvent) => {
    //console.log("En el nameFunction"+ e.target.name);
    navigation.navigate("Participantes", informacion);
    // console.log("log del name del evento"+nameEvent);

    guardarEventoClick(nameEvent);
    //console.log(eventoClick);
  };

  const visitarCrearEventos = () => {
    navigation.navigate("Eventos");
  };

  return (
    <View style={styles.contenedor}>
      {eventos.eventos.length > 0 ? (
        eventos.eventos.map((item) => (
          <View>
            <TouchableHighlight
              style={styles.btnEliminar}
              onPress={() => activarVerParticipantes(item.inputNombreEvento)}
            >
              <Text style={styles.textoEliminar}>
                Evento:{item.inputNombreEvento + "  "} Cantidad de
                Participantes:
                {" " + item.participante.objetosParticipantes.length + "  "}
                Asisten:{getAsisten(item.inputNombreEvento)}
              </Text>
            </TouchableHighlight>
          </View>
        ))
      ) : (
        <Text> Todavia no se cargaron eventos</Text>
      )}
      <View></View>
      {/*<Button title="Ir a NosotrosS" onPress={() => visitarNosotros()} />*/}
      <Button title="Crear Evento" onPress={() => visitarCrearEventos()} />
    </View>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: "center",

    justifyContent: "center",
  },
  btnEliminar: {
    backgroundColor: "purple",
    marginTop: 20,
    padding: 10,
  },
  textoEliminar: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    width: 300,
    textTransform: "uppercase",
  },
});

export default Inicio;
