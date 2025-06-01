import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="m-0.5 p-2">
      <h3 className="font-serif text-center uppercase font-bold italic text-[14px] mb-2">
        Upcoming Events
      </h3>

      <div className="space-y-3 ">
        {/* Event 1 */}
        <div className="p-3 font-serif text-[14px] rounded-md flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 shadow-md shadow-gray-400 hover:scale-y-115 ">
          <div className="sm:w-1/2 md:w-fit">
            <p>
              <span className="font-semibold">Event Name:</span> Kausala
              Vardhanam
            </p>
            <p>
              <span className="font-semibold">Date:</span> 2025-06-15
            </p>
            <p>
              <span className="font-semibold">Time:</span> 10:00 AM
            </p>
            <p>
              <span className="font-semibold">Location:</span> Toronto Sanskrit
              Center
            </p>
          </div>
        </div>

        {/* Event 2 */}
        <div className="p-3 font-serif text-[14px] rounded-md flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 shadow-md shadow-gray-400 hover:scale-y-115">
          <div className="sm:w-1/2 md:w-fit">
            <p>
              <span className="font-semibold">Event Name:</span> Samskrita
              Sambhashanam
            </p>
            <p>
              <span className="font-semibold">Date:</span> 2025-07-05
            </p>
            <p>
              <span className="font-semibold">Time:</span> 2:00 PM
            </p>
            <p>
              <span className="font-semibold">Location:</span> Online (Zoom)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
