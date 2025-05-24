export const getImageUrl = (path: string) =>
  `${import.meta.env.VITE_REACT_API_URL}/uploads/${path}`;
