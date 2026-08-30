import { defineEnableDraftMode } from 'next-sanity/draft-mode';
import { client } from '@/sanity/lib/client';
import { token } from '@/sanity/lib/token';

export const { GET } = defineEnableDraftMode({
  client: token ? client.withConfig({ token }) : client,
});
