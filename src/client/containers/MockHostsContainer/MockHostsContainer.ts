import { useCallback, useEffect, useState } from 'react';
import { createContainer } from 'unstated-next';
import { Host } from '../../../types';
import { useMockHosts } from '../../services';

export const MockHostsContainer = createContainer(() => {
  const [hosts, setHosts] = useState<Host[]>([]);
  const mockHosts = useMockHosts();

  useEffect(() => {
    setHosts(mockHosts);
  }, [mockHosts]);

  const getHostById = useCallback(
    (id: string) => {
      for (let i = 0; i < hosts.length; i++) {
        if (id === hosts[i].id) {
          return hosts[i];
        }
      }
    },
    [hosts]
  );

  return { hosts, getHostById };
});
