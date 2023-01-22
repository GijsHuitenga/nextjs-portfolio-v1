
const DUMMY_PROJECTS = [
  {
    id: 'p01',
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    date: '2022-05',
    image: 'images/projects/project01.png',
  },
  {
    id: 'p02',
    title: 'Project 2',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    date: '2021-05',
    image: 'images/projects/project01.png',
  },
  {
    id: 'p03',
    title: 'Project 3',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    date: '2021-08',
    image: 'images/projects/project01.png',
  },
  {
    id: 'p04',
    title: 'Project 4',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    date: '2022-01',
    image: 'images/projects/project01.png',
  },
];

// export function getFeaturedProjects() {
//   return DUMMY_PROJECTS.filter((event) => event.isFeatured);
// }

export function getAllProjects() {
  return DUMMY_PROJECTS;
}

// export function getFilteredProjects(dateFilter) {
//   const { year, month } = dateFilter;

//   let filteredEvents = DUMMY_PROJECTS.filter((event) => {
//     const eventDate = new Date(event.date);
//     return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
//   });

//   return filteredEvents;
// }

export function getProjectById(id) {
  return DUMMY_PROJECTS.find((event) => event.id === id);
}
