import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useScrollBlock } from '@/hooks/useScrollBlock';

export interface ISideMenuContextProps {
  isOpenMenu?: boolean;
  openMenu?: () => void;
  dismissMenu?: () => void;
}

export const SideMenuContext = createContext<ISideMenuContextProps>(null!);
export function SideMenuProvider({ children }: PropsWithChildren) {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const openMenu = useCallback(() => {
    setOpenMenu(true);
  }, [setOpenMenu]);

  const [blockScroll, allowScroll] = useScrollBlock();

  const dismissMenu = useCallback(() => {
    setOpenMenu(false);
  }, [setOpenMenu]);

  useEffect(() => {
    if (isOpenMenu) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [isOpenMenu]);

  return (
    <SideMenuContext.Provider value={{ isOpenMenu, openMenu, dismissMenu }}>
      {children}
    </SideMenuContext.Provider>
  );
}
