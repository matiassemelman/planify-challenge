import slots from "../../data/slots.json";
import { format } from "date-fns";
import { Button } from "../ui/button";

interface SelectSlotProps {
  setSelectedSlot: (slot: string) => void;
  selectedSlot: string | null;
}

export const SelectSlot: React.FC<SelectSlotProps> = ({
  setSelectedSlot,
  selectedSlot,
}) => {
  const titleDate = format(new Date(slots.date), "dd MMMM");
  const formattedDate = format(new Date(slots.date), "dd/M/yyyy");

  return (
    <div className="max-w-sm mx-auto p-4">
      <h2 className="text-lg font-bold mb-4">{titleDate}</h2>
      <div className="grid grid-cols-2 gap-4">
        {slots?.availableTimeslots.map((slot) => (
          <Button
            onClick={() => setSelectedSlot(formattedDate + " " + slot)}
            key={slot}
            className={` font-bold py-2 px-4 rounded ${
              selectedSlot === formattedDate + " " + slot
                ? "bg-darkGray text-white"
                : "bg-mediumGray text-textDarkGray"
            } `}
          >
            {slot}
          </Button>
        ))}
      </div>
    </div>
  );
};
