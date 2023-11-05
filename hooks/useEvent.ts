import { EventDto } from "@/models/EventDto";
import axios from "axios";
import React from "react";

export const useEvent = () => {
  const [events, setEvents] = React.useState<EventDto[]>([]);

  const getEventByVenueId = async (venueId: number) => {
    try {
      const response = await axios.get(`/api/event/${venueId}/events`);
      setEvents(response.data.events);
    } catch {
      throw new Error("Error getting events");
    }
  };

  return {
    events,
    getEventByVenueId,
  };
};
