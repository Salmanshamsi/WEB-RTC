import { createContext, useContext, useMemo } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

const SocketProvider = (props) => {
  // Initialize socket connection
  const socket = useMemo(() => {
    return io("http://localhost:8001"); 
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {props.children}
    </SocketContext.Provider>
  );
};

const useSocket = () => {
  return useContext(SocketContext);
};

export { useSocket, SocketProvider };
