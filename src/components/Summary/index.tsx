import { SummaryProps } from "@/types";

export const Summary = ({ selectedService, selectedSlot }: SummaryProps) => {
  return (
    <>
      <div>Servicio: {selectedService?.name}</div>
      <div>Fecha: {selectedSlot}</div>
    </>
  );
};
