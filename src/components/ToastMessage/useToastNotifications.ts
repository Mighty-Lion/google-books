import { useCallback } from 'react';
import { toast } from 'react-toastify';

export interface IToastMessageProps {
  autoClose: number;
  hideProgressBar: boolean;
}
export function useToastNotifications(
  config: IToastMessageProps = {
    autoClose: 5000,
    hideProgressBar: false,
  }
) {
  const handleFailure = useCallback(
    (message: string, description?: string) => {
      toast.error(message, {
        position: 'top-right',
        autoClose: config.autoClose,
        hideProgressBar: config.hideProgressBar,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        progressClassName: 'danger',
      });
    },
    [config]
  );

  return {
    handleFailure,
  };
}
