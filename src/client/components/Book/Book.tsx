import { useParams } from 'react-router-dom';

type Params = {
  hostId: string;
};

export const Book = () => {
  const { hostId } = useParams<Params>();

  return <p style={{ color: 'black' }}>{hostId}</p>;
};
