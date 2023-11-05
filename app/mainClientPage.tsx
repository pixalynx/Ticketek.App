"use client";
import EventCard from "@/components/EventCard/EventCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEvent } from "@/hooks/useEvent";
import { VenuDto } from "@/models/VenuDto";

export interface MainClientPageProps {
  venues: VenuDto[];
}

const MainClientPage = ({ venues }: MainClientPageProps) => {
  const { getEventByVenueId, events } = useEvent();
  const handleClick = (e: string) => {
    getEventByVenueId(parseInt(e));
  };

  return (
    <div className="flex flex-col w-full gap-6">
      <Select onValueChange={handleClick}>
        <SelectTrigger className="w-full">
          <SelectValue
            placeholder={venues ? "Select a venue" : "No Venues found"}
          />
        </SelectTrigger>
        <SelectContent>
          {venues &&
            venues.map((venue) => (
              <SelectItem key={venue.id} value={venue.id.toString()}>
                {venue.name}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
      {events &&
        events.map((event) => <EventCard key={event.id} event={event} />)}
    </div>
  );
};

export default MainClientPage;
