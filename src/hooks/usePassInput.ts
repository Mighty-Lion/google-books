import { useState } from 'react';
import Visibility from '@/assets/images/svg/visibility.svg';
import VisibilityOff from '@/assets/images/svg/visibilityOff.svg';

export function usePassInput() {
  const [typeInput, setTypeInput] = useState('password');
  const [passImg, setPassImg] = useState(VisibilityOff);
  function handlePassInput() {
    if (typeInput === 'text') {
      setTypeInput('password');
      setPassImg(VisibilityOff);
    } else {
      setTypeInput('text');
      setPassImg(Visibility);
    }
  }

  return { typeInput, passImg, handlePassInput };
}
