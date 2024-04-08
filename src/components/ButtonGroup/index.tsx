import { ButtonGroupProps, HandleClickProps } from "@/types";
import { Button } from "../ui/button";

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
        className={`border-t-2 border-mediumGray border-b-2 py-4 px-8 flex ${buttonPosition} `}
      >
        {step === 1 && selectedService !== null ? (
          <Button
            onClick={handleClick({ action: "next" })}
            className="bg-darkGray"
          >
            Siguiente
          </Button>
        ) : step === 2 ? (
          <>
            <Button
              onClick={handleClick({ action: "prev" })}
              className="bg-darkGray"
            >
              Anterior
            </Button>
            <Button
              onClick={handleClick({ action: "next" })}
              className="bg-darkGray"
            >
              Siguiente
            </Button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
