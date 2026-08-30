import { defineDocuments, defineLocations, PresentationPluginOptions } from 'sanity/presentation';

export const resolve: PresentationPluginOptions['resolve'] = {
  mainDocuments: defineDocuments([
    {
      route: '/',
      filter: `_type == "charity"`,
    },
    {
      route: '/team',
      filter: `_type == "teamMember"`,
    },
    {
      route: '/events',
      filter: `_type == "event"`,
    },
    {
      route: '/involve',
      filter: `_type == "charity"`,
    },
  ]),
  locations: {
    teamMember: defineLocations({
      select: {
        name: 'name',
      },
      resolve: () => ({
        locations: [
          {
            title: 'Our Team',
            href: '/team',
          },
        ],
      }),
    }),
    event: defineLocations({
      select: {
        title: 'title',
      },
      resolve: () => ({
        locations: [
          {
            title: 'Events',
            href: '/events',
          },
        ],
      }),
    }),
    charity: defineLocations({
      select: {
        name: 'name',
      },
      resolve: () => ({
        locations: [
          {
            title: 'Home Page',
            href: '/',
          },
          {
            title: 'Take Action / Involve',
            href: '/involve',
          },
        ],
      }),
    }),
  },
};
