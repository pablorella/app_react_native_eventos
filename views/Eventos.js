import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { EventosContext } from "../context/EventosContext";
import AsyncStorage from "@react-native-community/async-storage";

const Eventos = ({ navigation, route }) => {
  const { eventos, guardarEventos } = useContext(EventosContext);
  const [error, actualizarError] = useState(false);

  const [inputTexto, guardarInputTexto] = useState("");
  const [inputNombreEvento, guardarInputNombreEvento] = useState("");
  const [participante, agregarParticipante] = useState({
    objetosParticipantes: [],
  });
  const [nombre, guardarNombre] = useState("");

  /*  useEffect(() => {
    //una vez q cargue mi proyecto ejecutara una funcion
    obtenerDatos();
  }, []); */
  const guardarDatos = () => {
    try {
      guardarNombre(inputTexto);
      //agregarParticipante( {...participante, evento:"Evento 1"})
      //agregarParticipante( {...participante, objetosParticipantes:{"nombre":inputTexto}})

      agregarParticipante({
        ...participante,
        objetosParticipantes: participante.objetosParticipantes.concat({
          nombre: inputTexto,
          estado: false,
        }),
      });
      // console.log(participante);
      //guardarInputTexto("")
    } catch (error) {
      //console.log(error);
    }
  };

  /* const guardarDatos = () => {
    console.log("Guardando");
    console.log(inputTexto);
  }; */
  const obtenerDatos = () => {
    try {
      /* setItem es clave valor */

      // console.log(nombre); //muestra lo que hay en el storage
      guardarNombre(nombre);
    } catch (error) {
      //console.log(error);
    }
  };
  const eliminarDatos = () => {
    try {
      /* setItem es clave valor */

      guardarNombre("");
      // console.log("En el localstorage hay" + nombre); //muestra lo que hay en el storage
    } catch (error) {
      // console.log(error);
    }
  };
  const volver = () => {
    //console.log("En el nameFunction"+ e.target.name);
    //navigation.goBack(); //Sin importar la pagina, vuelve a la anterior
    //navigation.push("Inicio"); //haces las transiciones al reves
    // Validar
    if (inputNombreEvento.trim() === "") {
      actualizarError(true);
      return;
    }
    // Eliminar el mensaje previo
    actualizarError(false);

    navigation.navigate("Inicio");

    guardarEventos({
      ...eventos,
      eventos: eventos.eventos.concat({ participante, inputNombreEvento }),
    });
    //-------------useState({eventos:[]});

    /*     console.log("--------------nombre evento-------------")   
    console.log(inputNombreEvento) 
    console.log("--------------participantes-------------")   
    console.log(participante) 
    console.log("--------------Eventos-------------")   
    console.log(eventos)  */
  };

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.btnEliminar}>
          Todos los campos son obligatorios
        </Text>
      ) : null}
      <Text>Listado de Participantes</Text>
      {participante.objetosParticipantes ? (
        participante.objetosParticipantes.map((item) => (
          <Text>{item.nombre}</Text>
        ))
      ) : (
        <Text>No hay datos</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Ingresar Participante"
        onChangeText={(texto) => guardarInputTexto(texto)}
      />

      <Button title="+" color="#333" onPress={() => guardarDatos()} />
      <TextInput
        style={styles.input}
        placeholder="Ingresar Nombre Evento"
        onChangeText={(texto) => guardarInputNombreEvento(texto)}
      />

      {/* nombre ? (
        <TouchableHighlight
          style={styles.btnEliminar}
          onPress={() => eliminarDatos()}>
          <Text style={styles.textoEliminar}>Eliminar Nombre &times;</Text>
        </TouchableHighlight>
      ) : null */}
      <Button title="Guardar" onPress={() => volver()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "#666",
    marginBottom: 20,
    borderBottomWidth: 1,
    width: 300,
    height: 40,
  },
  btnEliminar: {
    backgroundColor: "red",
    marginTop: 20,
    padding: 10,
  },
  textoEliminar: {
    color: "red",

    fontWeight: "bold",
    textAlign: "center",
    width: 300,
    textTransform: "uppercase",
  },
});

export default Eventos;
