import CopyRight from "./components/copyRight/CopyRight";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-light relative">
      <Header/>
      <main>
        <Home/>
      </main>
      <Footer/>
      <CopyRight/>
    </div>
  );
}

export default App;
