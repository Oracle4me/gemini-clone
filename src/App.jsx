import "./App.css";
import Navbar from "./components/navbar";
import Conversation from "./components/conversation";
import { Sidebar } from "./components/sidebar";
import { useState } from "react";

function App() {
  const [showChat, setShowChat] = useState(false);

  const handleNewChat = () => {
    setShowChat(true);
  };

  return (
    <>
      <div className="flex overflow-hidden">
        <Sidebar onNewChat={handleNewChat} />
        <div className="w-full h-screen bg-main">
          <Navbar />
          <Conversation showChat={showChat} />
        </div>
      </div>
    </>
  );
}

export default App;
