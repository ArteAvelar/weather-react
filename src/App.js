import "./styles.css";
import Form from "./Form";
import Heather from "./Header";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Heather />
            <Form />
            <Weather city="Munich" />
          </div>
        </div>
      </div>
    </div>
  );
}
