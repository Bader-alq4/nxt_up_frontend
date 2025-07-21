import React from 'react';
import '../css_stuff/Events.css';

const events = [
  {
    id: 1,
    title: '15U/16U Boys Tryouts',
    datetimes: [
      'August 9, 2025 • 1:00 PM – 2:30 PM @ Saville, Court 3',
      'August 16, 2025 • 1:00 PM – 2:30 PM @ Location TBD'
    ],
  },
  {
    id: 2,
    title: '17/18U Boys Tryouts',
    datetimes: [
      'August 9, 2025 • 2:30 PM – 4:00 PM @ Saville, Court 3', 
      'August 16, 2025 • 2:30 PM – 4:00 PM @ Location TBD'
    ],
  },
  {
    id: 3,
    title: '15U/17U Girls Open Gym',
    datetimes: [
      'August 5, 2025 • 7:00 PM – 9:00 PM @ Central Lions Rec Centre'
    ],
  },
  {
    id: 4,
    title: '15U/17U Girls Tryouts',
    datetimes: [
      'August 13, 2025 • 4:00 PM – 6:00 PM @ Commonwealth Rec Centre', 
      '***August 19, 2025 • 6:00 PM – 8:00 PM @ Central Lions Rec Centre (If necessary)'
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
