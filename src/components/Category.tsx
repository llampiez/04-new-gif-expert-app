import { useFetchGiphy } from '../hooks/useFetchGiphy';
import { Gif } from './Gif';

type Props = {
  category: string;
};

export const Category = ({ category }: Props) => {
  const { listGif, loading } = useFetchGiphy(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <h2>Cargando...</h2>}
      <div className='card-grid'>
        {listGif.map((gif) => (
          <Gif key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};
