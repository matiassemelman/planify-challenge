import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import services from "../../data/services.json";
import { SelectServiceProps, Service } from "@/types";
import { Button } from "../ui/button";

export const SelectService = ({
  selectedService,
  setSelectedService,
}: SelectServiceProps) => {
  return (
    <>
      <h4 className="pt-6 pb-2">Categorías</h4>
      <Accordion type="single" collapsible className="w-full">
        {services?.services.map((service: Service) => (
          <AccordionItem
            key={service?.id}
            value={service?.id.toString()}
            className="!border-none"
          >
            <AccordionTrigger className="font-normal bg-lightGray mb-3 p-1 pt-0 h-7 focus:no-underline">
              {service?.name}
            </AccordionTrigger>
            <AccordionContent className="border-[3px] border-gray-300 mt-1 mb-8 p-1 ">
              <p>{service?.description}</p>
              <div className="flex justify-end pt-2">
                {selectedService?.id === service?.id ? (
                  <Button
                    className="text-white font-semibold p-3 py-1 text-sm h-8 bg-darkGray rounded-sm"
                    onClick={() => setSelectedService(null)}
                  >
                    Seleccionado
                  </Button>
                ) : (
                  <Button
                    className="text-white font-semibold p-3 py-1 text-sm h-8 bg-mediumGray rounded-sm"
                    onClick={() => setSelectedService(service)}
                  >
                    Seleccionar
                  </Button>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};
