import { useContext } from 'react';
import { SideMenuContext } from '@/providers/SideMenuProvaider';

export function useSideMenu() {
  const value = useContext(SideMenuContext);

  return value;
}
