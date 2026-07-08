import React from 'react';
import '../css_files/Events.css';

const events = [
  {
    id: 1,
    title: 'Girls U15/U16 ID Camp 1',
    datetimes: [
      'August 1, 2026 • 11:00 AM – 12:30 PM @ St Francis Xavier Sports Centre, Gym 2'
    ],
  },
  {
    id: 2,
    title: 'Girls U17/U18 ID Camp 1',
    datetimes: [
      'August 1, 2026 • 12:30 PM – 2:00 PM @ St Francis Xavier Sports Centre, Gym 2'
    ],
  },
  {
    id: 3,
    title: 'Boys U13/U14 ID Camp 1',
    datetimes: [
      'August 1, 2026 • 4:00 PM – 5:30 PM @ Saville Community Sports Centre, Gym 4'
    ],
  },
  {
    id: 4,
    title: 'Boys U15/U16 ID Camp 1',
    datetimes: [
      'August 1, 2026 • 5:30 PM – 7:00 PM @ Saville Community Sports Centre, Gym 4'
    ],
  },
  {
    id: 5,
    title: 'Boys U17/U18 ID Camp 1',
    datetimes: [
      'August 1, 2026 • 7:00 PM – 8:30 PM @ Saville Community Sports Centre, Gym 4'
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
