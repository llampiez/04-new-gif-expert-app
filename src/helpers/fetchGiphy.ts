import { Giphy } from '../types/Giphy';

export const fetchGiphy = async (category: string) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=SxNkvQmoY0PQZR0NK8qMe3qNRE82PlXW&q=${category}&limit=10`
  );
  const { data }: Giphy = await response.json();

  return(
    data.map(({ id, images, alt_text, title }) => {
      return {
        id,
        alt_text,
        title,
        url: images.downsized_medium.url,
      };
    })
  )
};
