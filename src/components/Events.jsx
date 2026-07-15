import React from 'react';
import '../css_files/Events.css';

const events = [
  {
    id: 1,
    title: 'Girls ID Camp 1',
    datetimes: [
      'August 5, 2026 • U15/U16: 6:30 PM – 8:00 PM @ Commonwealth Rec Centre, Gym 1',
      'August 5, 2026 • U17/U18: 6:30 PM – 8:00 PM @ Commonwealth Rec Centre, Gym 2'
    ],
  },
  {
    id: 2,
    title: 'Boys ID Camp 1',
    datetimes: [
      'August 1, 2026 • U13/U14: 4:00 PM – 5:30 PM @ Saville Community Sports Centre, Gym 4',
      'August 1, 2026 • U15/U16: 5:30 PM – 7:00 PM @ Saville Community Sports Centre, Gym 4',
      'August 1, 2026 • U17/U18: 7:00 PM – 8:30 PM @ Saville Community Sports Centre, Gym 4'
    ],
  },
  {
    id: 3,
    title: 'Boys ID Camp 2',
    datetimes: [
      'August 7, 2026 • U13/U14: 6:00 PM – 7:30 PM @ St Francis Xavier Sports Centre, Gym 2',
      'August 7, 2026 • U15/U16: 6:00 PM – 7:30 PM @ St Francis Xavier Sports Centre, Gym 3',
      'August 7, 2026 • U17/U18: 7:30 PM – 9:00 PM @ St Francis Xavier Sports Centre, Gym 3'
    ],
  },
  {
    id: 4,
    title: 'Girls U15–U18 ID Camp 2',
    datetimes: [
      'August 8, 2026 • 11:00 AM – 1:00 PM @ Central Lions Gymnasium'
    ],
  },
  {
    id: 5,
    title: 'Boys Final Tryout · Invitation Only',
    datetimes: [
      'August 8, 2026 • U13/U14: 4:00 PM – 5:30 PM @ Dr Anne Anderson Community Centre, Gym 2',
      'August 8, 2026 • U15/U16: 5:30 PM – 7:00 PM @ Dr Anne Anderson Community Centre, Gym 2',
      'August 8, 2026 • U17/U18: 7:00 PM – 8:30 PM @ Dr Anne Anderson Community Centre, Gym 2'
    ],
  },
  {
    id: 6,
    title: 'Girls Final Tryout · Invitation Only',
    datetimes: [
      'August 15, 2026 • 12:00 PM – 2:00 PM @ The Meadows Rec Centre, West Gym'
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
