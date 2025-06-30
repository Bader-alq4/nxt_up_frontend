import React from 'react';
import '../css_stuff/Events.css';

const events = [
  {
    id: 1,
    title: '18U Boys Tryouts',
    datetime: 'November 5, 2025 • 10:00 AM – 12:00 PM',
    location: 'Main Gym',
  },
  {
    id: 2,
    title: '15U Girls Skills Clinic',
    datetime: 'November 12, 2025 • 2:00 PM – 4:00 PM',
    location: 'East Court',
  },
  {
    id: 3,
    title: 'All-Star Showcase Game',
    datetime: 'December 3, 2025 • 6:00 PM',
    location: 'City Arena',
  },
  {
    id: 4,
    title: 'Other Stuff potentially',
    datetime: 'December 9, 2023 • 3:00 PM',
    location: 'City Arena',
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
              <p className="event-datetime">{event.datetime}</p>
              <p className="event-location">{event.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
