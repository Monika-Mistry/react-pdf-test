import PDFDocument from "./PDFDocument.tsx";
import { PDFViewer } from "@react-pdf/renderer";
import ReactDOM from "react-dom";

// Render in DOM
const App = () => (
  <PDFViewer width="100%" height="900px">
    <PDFDocument />
  </PDFViewer>
);

ReactDOM.render(<App />, document.getElementById("root"));
