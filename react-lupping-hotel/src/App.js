import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Toaster position="top-right" reverseOrder={false} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
