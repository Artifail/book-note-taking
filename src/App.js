import Header from "./components/Header";
import Footer from "./components/Footer";
import BookPanel from "./components/BookPanel";
import { Worker } from '@react-pdf-viewer/core';


const App = () => {
  return (
    <div >
      <Header/>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <BookPanel/>
      </Worker>
      <Footer/>
      
    </div>
  );
}

export default App;
