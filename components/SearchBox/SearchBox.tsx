import css from "./SearchBox.module.css";

interface SearchBoxProps {
  query: string;
  updateQuery: (value: string) => void;
}

export default function SearchBox({ query, updateQuery }: SearchBoxProps) {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      value={query}
      onChange={(e) => updateQuery(e.target.value)}
    />
  );
}
