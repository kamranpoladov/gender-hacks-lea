import { useParams } from 'react-router-dom';

export const Book = () => {
  const { id } = useParams<{ id: string }>();

  return <p style={{ color: 'black' }}>{id}</p>;
};
