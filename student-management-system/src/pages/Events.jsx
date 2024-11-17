import React from "react";
import Container from "../components/container/Container";
import events from "../json-data/events.json";
import ViewEventDetailsModal from "../components/modals/ViewEventDetailsModal";

const Events = () => {
  return (
    <Container>
      {" "}
      <div>
        <h1 className="text-blue-700 text-3xl font-bold py-4">Events</h1>
        <div className="flex flex-col py-6 max-w-3xl mx-auto ">
          {events.map((event) => (
            <div key={event.id}>
              <h3 className="font-semibold text-2xl">{event.eventTitle}</h3>
              <div className="w-full py-4">
                <img
                  className="rounded-xl"
                  src={event.image}
                  alt=""
                />
              </div>
              <p>{event.description}</p>
              <div className="flex justify-between">

              <div className="flex gap-4 items-center py-2">
                <h4 className="font-semibold text-xl">Date:</h4>{" "}
                <span>{event.date}</span>
                </div>
                <ViewEventDetailsModal event={event} />
              </div>
              <div className="h-1 w-full bg-gray-300 my-4 mb-6"></div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Events;
