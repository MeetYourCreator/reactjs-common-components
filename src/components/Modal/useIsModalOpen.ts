import { useState } from 'react';

export const useIsModalOpen = (initialValue: any) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(initialValue);

  return [isModalOpen, setIsModalOpen];
};
