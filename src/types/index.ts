export interface Service {
  id: number;
  name: string;
  description: string;
  category: string;
}

export interface ButtonGroupProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  selectedService: Service | null;
}

export interface HandleClickProps {
  action: "next" | "prev";
}

export interface SelectServiceProps {
  selectedService: Service | null;
  setSelectedService: React.Dispatch<React.SetStateAction<Service | null>>;
}
export interface StepperProps {
  step: number;
}
