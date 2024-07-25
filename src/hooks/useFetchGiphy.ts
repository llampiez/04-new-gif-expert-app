import { useEffect, useState } from 'react';
import { fetchGiphy } from '../helpers/fetchGiphy';

type ListGif = {
  id: string;
  alt_text: string;
  title: string;
  url: string;
}[];

export const useFetchGiphy = (category: string) => {
  const [listGif, setListGif] = useState<ListGif>([]);
  const [loading, setLoading] = useState(true);

  const getListGif = async () => {
    const newListGif = await fetchGiphy(category);
    setListGif(newListGif);
    setLoading(false);
  };

  useEffect(() => {
    getListGif();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { listGif, loading };
};
