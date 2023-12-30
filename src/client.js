import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'sb1jjy3n',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skCXFQBpAJPS0JpSNC67lRpjNtPYhBIKWJeQWZYzPlrw8qUdTgwmhwRZ9lWIM54Ri8XZYNO6hn2QGaI0Jv1QE17V4k6PgX7ED7iX2Lama828HwtEkHm4WuAgNn2NDnQIJYR3hXP6rmVvoMcREVGQstWyB2OLU3ZVA8MvnqrX6mmSKV3a2I2A',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);



