interface StepperProps {
  step: number;
}

export const Stepper = ({ step }: StepperProps) => {
  const backgroundWidth =
    step === 1 ? "w-[30%]" : step === 2 ? "w-[60%]" : "w-[90%]";

  return (
    <div>
      <h4>Seleccionar servicio</h4>
      <div className="w-[90%] h-5 bg-stepperBackground">
        <div className={`bg-stepper h-5 ${backgroundWidth}`}></div>
      </div>
    </div>
  );
};
