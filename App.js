import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//React Context
import EventosContext from "./context/EventosContext";

//React Component
import Inicio from "./views/Inicio";
import Nosotros from "./views/Nosotros";
import Eventos from "./views/Eventos";
import Participantes from "./views/Participantes";

const Stack = createStackNavigator();

export default function App() {
  return (
    <EventosContext>
      <NavigationContainer>
        <Stack.Navigator
          //Screen opetions es en stack navigator y aplica el color a todas las pantallas
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#162141" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <Stack.Screen
            name="Inicio"
            component={Inicio}
            /*  options={{
              title: "Componente Principal",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#162141" },
              headerTintColor: "#fff",
              headerTitleStyle: { fontWeight: "bold" },
            }} */
          />
          <Stack.Screen
            name="Eventos"
            component={Eventos}
            //options={{ title: "Sobre eventos" }} //Para pantalla estatica con name
            options={({ route }) => ({
              title: "Crear Evento",
            })} //Para pantalla dinamica con parametros
          />
          <Stack.Screen
            name="Nosotros"
            component={Nosotros}
            //options={{ title: "Sobre Nosotros" }} //Para pantalla estatica con name
            options={({ route }) => ({
              title: route.params.clienteId,
            })} //Para pantalla dinamica con parametros
          />
          <Stack.Screen
            name="Participantes"
            component={Participantes}
            //options={{ title: "Sobre Participantes" }} //Para pantalla estatica con name
            options={({ route }) => ({
              title: route.params.clienteId,
            })} //Para pantalla dinamica con parametros
          />
        </Stack.Navigator>
      </NavigationContainer>
    </EventosContext>
  );
}
