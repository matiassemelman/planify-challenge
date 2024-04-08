import { useEffect, useState } from "react";
import "./App.css";
import { Stepper } from "./components/Stepper/index";
import { ButtonGroup } from "./components/ButtonGroup";
import { SelectService } from "./components/SelectService";
import { Service } from "./types";

function App() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    console.log(selectedService);
  }, [selectedService]);

  return (
    <div className="pt-6">
      <div className="mx-6">
        <Stepper step={step} />
        <SelectService
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
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
