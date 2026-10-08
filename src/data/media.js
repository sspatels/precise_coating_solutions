/**
 * Image paths.
 * Original photos live in /public/uploads/. Compressed WebP copies (same name, .webp,
 * spaces → dashes) live in /public/uploads/optimized/ and are what the site loads.
 *
 * When adding a new photo: put the original in /public/uploads/ and its .webp copy in
 * /public/uploads/optimized/ – or use `upload()` to load the original file directly.
 */
export const upload = (file) => `/uploads/${file}`;

export const image = (file) =>
  `/uploads/optimized/${file.replace(/\.(png|jpe?g)$/i, '.webp').replace(/\s+/g, '-').replace(/[()]/g, '')}`;
