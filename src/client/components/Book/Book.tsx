import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Host } from '../../../types';
import { MockHostsContainer } from '../../containers';

export const Book = () => {
  const { id } = useParams<{ id: string }>();
  const { getHostById } = MockHostsContainer.useContainer();
  const [host, setHost] = useState<Host>();

  useEffect(() => {
    const foundHost = getHostById(id);
    setHost(foundHost);
  }, [getHostById, id]);

  if (!host) return null;

  return (
    <div>
      <p style={{ color: 'black' }}>{host.name}</p>
    </div>
  );
};
