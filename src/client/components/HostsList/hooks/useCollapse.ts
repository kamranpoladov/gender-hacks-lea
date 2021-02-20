import { useState } from 'react';

export const useCollapse = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return { isCollapsed, setIsCollapsed };
};
