const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Programming for everyone',
    description: 'Everyone can learn to code!',
    location: 'Somestreet 05, 12345 San Somewhereo',
    date: '2021-05-12',
    image: 'images/coding-event.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Networking for introverts',
    description: 'We know: Networking is no fun if you are an introvert person',
    location: 'New wall street 5, 98765 New Work',
    date: '2021-05-30',
    image: 'images/introvert-event.jpg',
    isFeatured: true,
  },
  {
    id: 'e2',
    title: 'Networking for extroverts',
    description: 'You probably need no help with networking',
    location: 'My street 12, 10115 Broke City',
    date: '2021-04-10',
    image: 'images/extrovert-event.jpg',
    isFeatured: true,
  },
];

export const getFeaturedEvents = () => {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
};

export const getAllEvents = () => {
  return DUMMY_EVENTS;
};

export const getFilteredEvents = (dateFilter) => {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};

export const getEventById = (id) => {
  return DUMMY_EVENTS.find((event) => event.id === id);
};
