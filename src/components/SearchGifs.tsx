import { useState } from 'react';

type Props = {
  newCategories: (newCategory: string) => void;
};

export const SearchGifs = ({ newCategories }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    newCategories(inputValue.trim());
    setInputValue('');
  };

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type='text'
        placeholder='Search Gifs'
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
