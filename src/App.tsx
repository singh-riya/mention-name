
import { useState } from "react";
import "./App.css";
import MentionInput from "./Components/MentionInput";

function App() {
  const [value, setValue] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    name: string = ""
  ) => {
    const enteredValue = e.target.value;
    let finalValue: string = name ? value : enteredValue;
    if (name) {
      finalValue = finalValue + name;
    }
    setValue(finalValue);
  };

  return (
    <div>
      <MentionInput value={value} handleChange={handleChange} />
    </div>
  );
}

export default App;

