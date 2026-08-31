import { createImageUrlBuilder } from '@sanity/image-url';
import { dataset, projectId } from '../env';

const imageBuilder =
  projectId && dataset ? createImageUrlBuilder({ projectId, dataset }) : null;

export const urlForImage = (source: any) => {
  if (!source || !imageBuilder) return null;
  // If source is an object without an asset or ref, return null to avoid runtime throw
  if (typeof source === 'object' && !source.asset && !source._ref && !source._id) {
    return null;
  }
  try {
    return imageBuilder.image(source).auto('format').fit('max');
  } catch {
    return null;
  }
};

export const getSafeImageUrl = (
  source: any,
  width = 400,
  height = 400
): string | null => {
  try {
    const builder = urlForImage(source);
    if (!builder) return null;
    return builder.width(width).height(height).url() || null;
  } catch {
    return null;
  }
};

