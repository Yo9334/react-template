import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faList, faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faList, faTrash);

function App() {
  return (
    <>
      <Header />
      <Section />
      <Footer />
    </>
  );
}

export default App;
