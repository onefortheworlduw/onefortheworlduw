import { defineField, defineType } from 'sanity';

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date (e.g. 1/24/26 or 2/10/26 • 5–8 PM)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location (e.g. East Campus Mall)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'images',
      title: 'Event Photos',
      description: 'Add only .jpg, .png, or .webp. Other files do not work',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'isUpcoming',
      title: 'Current / Upcoming Event?',
      description:
        'Toggle ON to show this in the Current Events section on the website. Toggle OFF for Past Events.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'images.0',
    },
  },
});
