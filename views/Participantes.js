import React, { useState, useEffect, useContext } from "react";
import { Text, View, Button, StyleSheet, Switch } from "react-native";
import { EventosContext } from "../context/EventosContext";

const Participantes = ({ navigation, route }) => {
  const { eventos, guardarEventos } = useContext(EventosContext);
  const { eventoClick, guardarEventoClick } = useContext(EventosContext);
  const [participanteFilter, guardarParticipanteFilter] = useState("");
  const [isSwitchEnabled, setSwich] = useState();

  //console.log(route.params);
  //console.log("desde el participante"+eventoClick);
  const volver = () => {
    navigation.navigate("Inicio");
    guardarEventoClick("");
    //navigation.goBack(); //Sin importar la pagina, vuelve a la anterior
    //navigation.push("Inicio"); //haces las transiciones al reves
  };
  useEffect(() => {}, []);

  const result = eventos.eventos.filter(
    (evento) => evento.inputNombreEvento === eventoClick
  );

  //console.log(result[0].participante.objetosParticipantes);
  const cambiarSwitch = (value, item) => {
    //console.log("el switch tiene:")
    //console.log(value )
    /*
console.log(+"El participante es:")
console.log(item)
console.log("El evento elegido es:")
console.log(eventoClick) */
    //console.log(eventos)
    let copiaEventos = eventos;
    //console.log('Aca miramos')
    copiaEventos.eventos.forEach((elemento) => {
      /* console.log("sdfdsfdsf")   
console.log(elemento["participante"])   
 */
      elemento["inputNombreEvento"] == eventoClick
        ? elemento["participante"].objetosParticipantes.forEach((elemento2) => {
            //console.log("elemento2")
            //    console.log(elemento2)
            if (elemento2.nombre === item.nombre) {
              //  console.log("encontro")
              elemento2.estado = !elemento2.estado;
              setSwich(!elemento2.estado);
            }
          })
        : null;
    });

    /* guardarEventos(copiaEventos)
console.log("----eventos")
console.log(eventos)*/
    //console.log("----Copia eventos")
    //console.log(copiaEventos)
    guardarEventos(copiaEventos);
    console.log("----eventos");
    console.log(eventos);
  };

  return (
    <View style={styles.contenedor}>
      <Text>Participantes</Text>

      {result[0] ? (
        result[0].participante.objetosParticipantes.map((item) => (
          <View>
            <Text>{item.nombre}</Text>
            <Switch
              value={item.estado}
              onValueChange={(value) => cambiarSwitch(value, item)}
              trackColor={{ true: "red" }}
            />
          </View>
        ))
      ) : (
        <Text>No hay datos</Text>
      )}

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

export default Participantes;
