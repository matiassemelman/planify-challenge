import { StepperProps } from "@/types";

export const Stepper = ({ step }: StepperProps) => {
  const backgroundWidth =
    step === 1 ? "w-[30%]" : step === 2 ? "w-[60%]" : "w-[90%]";

  return (
    <div>
      <h4>Seleccionar servicio</h4>
      <div className="w-full h-5 bg-lightGray">
        <div className={`bg-stepper h-5 ${backgroundWidth}`}></div>
      </div>
    </div>
  );
};
