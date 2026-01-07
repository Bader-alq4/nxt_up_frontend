import React from 'react';
import '../css_files/Events.css';

const events = [
  {
    id: 1,
    title: 'U13–U15 Boys Tryouts',
    datetimes: [
      'February 21, 2026 • 7:30 PM – 9:00 PM @ Commonwealth Rec Centre, Court 1'
    ],
  },
  {
    id: 2,
    title: 'U16–U17 Boys Tryouts',
    datetimes: [
      'February 21, 2026 • 7:30 PM – 9:00 PM @ Commonwealth Rec Centre, Court 2'
    ],
  },
  {
    id: 3,
    title: 'U15 Girls Tryouts',
    datetimes: [
      'February 21, 2026 • 6:00 PM – 7:30 PM @ Commonwealth Rec Centre, Court 1'
    ],
  },
  {
    id: 4,
    title: 'U17 Girls Tryouts',
    datetimes: [
      'February 21, 2026 • 6:00 PM – 7:30 PM @ Commonwealth Rec Centre, Court 2'
    ],
  },
];

export default function EventCardSection() {
  return (
    <section id="upcoming-events" className="events-wrapper">
      <h2 className="events-heading">Upcoming Events</h2>

      <div className="events-container">
        <div className="events-list">
          {events.map((event) => (
            <div className="event-card" key={event.id}>
              <h4 className="event-title">{event.title}</h4>

              {event.datetimes?.map((time, index) => (
                <p className="event-datetime" key={index}>{time}</p>
              ))}

              <p className="event-location">{event.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
