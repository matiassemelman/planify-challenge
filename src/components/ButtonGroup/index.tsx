import { Button } from "../ui/button";
import { ButtonGroupProps, HandleClickProps } from "./types";

export const ButtonGroup = ({
  step,
  setStep,
  selectedService,
}: ButtonGroupProps) => {
  const handleClick =
    ({ action }: HandleClickProps) =>
    () => {
      if (action === "next") {
        setStep((prevStep) => prevStep + 1);
      } else if (action === "prev") {
        setStep((prevStep) => prevStep - 1);
      }
    };

  const buttonPosition = step === 1 ? "justify-end" : "justify-between";

  return (
    <div className="my-4">
      <div
        className={`border-t-2 border-gray-300 border-b-2 py-4 px-8 flex ${buttonPosition} `}
      >
        {step === 1 && selectedService ? (
          <Button onClick={handleClick({ action: "next" })}>Siguiente</Button>
        ) : step === 2 ? (
          <>
            <Button onClick={handleClick({ action: "prev" })}>Anterior</Button>
            <Button onClick={handleClick({ action: "next" })}>Siguiente</Button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
