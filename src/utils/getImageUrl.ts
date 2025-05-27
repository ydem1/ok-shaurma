export const getImageUrl = (publicId: string) =>
  `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload/${publicId}`;
