import { useState } from "react";
import "./App.css";
import { Stepper } from "./components/Stepper/index";
import { ButtonGroup } from "./components/ButtonGroup";
import { SelectService } from "./components/SelectService";
import { Service } from "./types";
import { SelectSlot } from "./components/SelectSlot";
import { Summary } from "./components/Summary";

function App() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  return (
    <div className="pt-6">
      <div className="mx-6">
        <Stepper step={step} />
        <div className="border-[3px] border-gray-300 my-6 px-4">
          {step === 1 ? (
            <SelectService
              selectedService={selectedService}
              setSelectedService={setSelectedService}
            />
          ) : step === 2 ? (
            <SelectSlot
              setSelectedSlot={setSelectedSlot}
              selectedSlot={selectedSlot}
            />
          ) : (
            <Summary
              selectedService={selectedService}
              selectedSlot={selectedSlot}
            />
          )}
        </div>
      </div>
      <ButtonGroup
        step={step}
        setStep={setStep}
        selectedService={selectedService}
        selectedSlot={selectedSlot}
      />
    </div>
  );
}

export default App;
