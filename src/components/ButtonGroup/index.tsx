import { ButtonGroupProps, HandleClickProps } from "@/types";
import { Button } from "../ui/button";

export const ButtonGroup = ({
  step,
  setStep,
  selectedService,
  selectedSlot,
}: ButtonGroupProps) => {
  const handleClick =
    ({ action }: HandleClickProps) =>
    () => {
      if (action === "next" && step < 3) {
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
              onClick={() => {
                if (selectedSlot !== null) {
                  handleClick({ action: "next" })();
                }
              }}
              className={`${
                selectedSlot === null ? "bg-mediumGray" : "bg-darkGray"
              } focus:bg-mediumGray`}
            >
              Siguiente
            </Button>
          </>
        ) : (
          step === 3 && (
            <>
              <Button
                onClick={handleClick({ action: "prev" })}
                className="bg-[#788896]"
              >
                Anterior
              </Button>
              <Button
                onClick={() => {
                  if (selectedSlot !== null) {
                    handleClick({ action: "next" })();
                  }
                }}
                className="bg-darkGray"
              >
                Confirmar
              </Button>
              : <></>
            </>
          )
        )}
      </div>
    </div>
  );
};
