import { type SchemaTypeDefinition } from 'sanity';
import { teamMember } from './teamMember';
import { event } from './event';
import { charity } from './charity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [teamMember, event, charity],
};
