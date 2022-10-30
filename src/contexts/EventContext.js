import React, { useState } from "react";

export const EventContext = React.createContext();

export default function EventProvider(props) {
  const [eventEmitter] = useState(props.value); // We will never use setEventEmitter.

  return (
    <EventContext.Provider value={eventEmitter}>
      {props.children}
    </EventContext.Provider>
  );
}
