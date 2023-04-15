import Header from "./components/Header";
import Footer from "./components/Footer";
import BookPanel from "./components/BookPanel";

const App = () => {
  return (
    <div >
      <BookPanel/>
      <Header/>
      <Footer/>
      <p>Какой-то текст для проверки чего-то</p>
    </div>
  );
}

export default App;
