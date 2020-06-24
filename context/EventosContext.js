import React, { createContext, useState, useEffect } from "react";

export const EventosContext = createContext();

const EventosProvider = (props) => {
  const [eventos, guardarEventos] = useState({ eventos: [] });
  const [eventoClick, guardarEventoClick] = useState("");

  //agrego nuevo

  //fin nuevo
  useEffect(() => {}, [eventos]);

  return (
    <EventosContext.Provider
      value={{
        guardarEventos,
        eventos,
        eventoClick,
        guardarEventoClick,
      }}
    >
      {props.children}
    </EventosContext.Provider>
  );
};

export default EventosProvider;
