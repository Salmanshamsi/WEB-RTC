import { useEffect, useState } from "react";
import { useSocket } from "../../providers";

const Home = () => {
  const { socket } = useSocket();
  const [email, setEmail] = useState();
  const [room, setRoom] = useState();
  const [err, setErr] = useState(null);

  useEffect(() => {
    if (socket) {
      console.log("Socket connected:", socket.id);

      // Listen for disconnect event
      socket.on("disconnect", () => {
        console.log("Socket disconnected");
      });
    }

    return () => {
      // Cleanup socket on component unmount
      socket.off("disconnect");
    };
  }, [socket]);

  const handleJoinRoom = () => {
    if (email && room) {
          console.log("socket : ", socket);
          socket.emit("join-room",{emailId:email, roomId:room});
    } else {
      setErr(true);
    }
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="bg-gray-800 flex justify-center items-center "
    >
      <div className="flex gap-20 flex-col justify-center items-center">
        <h1 className="text-3xl text-white">Welcome to V-call 🇵🇰 </h1>
        <div className="flex flex-col gap-4  ">
          <h2 className="text-2xl text-white">Email</h2>
          <input
            onChange={(e) => {setEmail(e.target.value);}}
            type="email"
            className=" rounded-md h-9 w-96 p-3 text-lg"
            placeholder="Enter Your Email"
          />
          <h2 className="text-2xl text-white">Room</h2>
          <input
            onChange={(e) => {setRoom(e.target.value);}}
            type="text"
            className=" rounded-md h-9 w-96 p-3 text-lg"
            placeholder="Enter Your RoomId"
          />
        </div>
        {err && (<div className="font-mono text-sm text-red-500 italic p-0 " >*Both Fileds are Required For Entering in Room !</div>)}
        <button
          onClick={handleJoinRoom}
          className="text-white text-xl bg-blue-700 p-1 h-10 w-36 rounded-md cursor-pointer hover:bg-blue-600"
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default Home;
