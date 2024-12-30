import "./App.css";
import Navbar from "./components/navbar";
import Conversation from "./components/conversation";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <>
      <div className="flex overflow-hidden">
        <Sidebar />
        <div className="w-full h-screen bg-main py-4">
          <Navbar />
          <Conversation />
        </div>
      </div>
    </>
  );
}

export default App;
