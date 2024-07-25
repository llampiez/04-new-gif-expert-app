import { Category } from './Category';

type Props = {
  categories: string[];
};

export const Categories = ({ categories }: Props) => {
  return (
    <>
      {categories.map((category) => {
        return <Category key={category} category={category} />;
      })}
    </>
  );
};
