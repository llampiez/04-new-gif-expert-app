import { useState } from 'react';
import { Categories, SearchGifs } from './components';

export const App = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const newCategories = (newCategory:string) => {
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <SearchGifs newCategories={newCategories}/>
      <Categories categories={categories}/>
    </>
  );
};
