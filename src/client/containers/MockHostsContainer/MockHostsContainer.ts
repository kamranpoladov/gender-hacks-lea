import { useEffect, useState } from 'react';
import { createContainer } from 'unstated-next';
import { Host } from '../../../types';
import { useMockHosts } from '../../services';

export const MockHostsContainer = createContainer(() => {
  const [hosts, setHosts] = useState<Host[]>([]);
  const mockHosts = useMockHosts();

  useEffect(() => {
    setHosts(mockHosts);
  }, [mockHosts]);

  return { hosts };
});
