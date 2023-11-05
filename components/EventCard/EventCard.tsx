import { EventDto } from "@/models/EventDto";
import React from "react";
import { format, parseISO, isToday, isTomorrow } from "date-fns";

export interface EventCardProps {
  event: EventDto;
}

const EventCard = ({ event }: EventCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [dateText, time] = formatDate(event.startDate.toString());

  function formatDate(isoDate: string) {
    const parsedDate = parseISO(isoDate);

    if (isToday(parsedDate)) {
      return ["Today", format(parsedDate, "HH:mm")];
    } else if (isTomorrow(parsedDate)) {
      return ["Tomorrow", format(parsedDate, "HH:mm")];
    } else {
      return [format(parsedDate, "dd MMM"), format(parsedDate, "HH:mm")];
    }
  }

  return (
    <div
      className={`p-4 border shadow-sm flex gap-6 ${
        !isExpanded ? "items-center" : "items-baseline"
      }`}
    >
      <div className="rounded-lg flex gap-4">
        <div className="bg-gray-100 p-2 flex h-fit rounded-lg gap-2">
          <p className="text-sm">{dateText}</p>
          <p className="text-sm">{time}</p>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-4">
          <p className="font-semibold">{event.name}</p>
          {event.description && isExpanded && (
            <p className="text-sm">{event.description}</p>
          )}
        </div>
      </div>
      {event.description && (
        <div>
          <p
            className="bg-blue-100 px-2 py-1 rounded-lg text-sm cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </p>
        </div>
      )}
    </div>
  );
};

export default EventCard;
