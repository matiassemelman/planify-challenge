export interface ButtonGroupProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  selectedService: string;
}

export interface HandleClickProps {
  action: "next" | "prev";
}
