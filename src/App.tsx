import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
