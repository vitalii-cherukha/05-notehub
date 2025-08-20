import css from './SearchBox.module.css';
import { useDebouncedCallback } from 'use-debounce';

interface SearchBoxProps {
  onChange: (value: string) => void;
}

const SearchBox = ({ onChange }: SearchBoxProps) => {
  const handleChange = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    300
  );

  return (
    <input
      onChange={handleChange}
      className={css.input}
      type="text"
      placeholder="Search notes"
    />
  );
};

export default SearchBox;
