import { useState } from "react";
import "./App.css";
import { Stepper } from "./components/Stepper/index";
import { ButtonGroup } from "./components/ButtonGroup";

function App() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");

  return (
    <div className="pt-6">
      <div className="pl-8">
        <Stepper step={step} />
      </div>
      <ButtonGroup
        step={step}
        setStep={setStep}
        selectedService={selectedService}
      />
    </div>
  );
}

export default App;
