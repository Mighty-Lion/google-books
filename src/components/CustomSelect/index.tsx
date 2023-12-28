import {ChangeEventHandler, MouseEventHandler} from 'react';
import { CustomSelectWrapper } from '@/components/CustomSelect/index.styles';

export interface ICustomSelectProps {
  options?: IOptionsProps[];
  gridArea?: string;
  selectLabel?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  onClick?: MouseEventHandler<HTMLSelectElement>;
}
interface IOptionsProps {
  optionValue: string;
  optionLabel: string;
}
export function CustomSelect({
  gridArea,
  options,
  selectLabel,
  name,
  onChange,
  onClick,
}: ICustomSelectProps) {
  const renderedOptions = options!.map(
    ({ optionValue, optionLabel }: IOptionsProps) => (
      <option key={optionValue + optionLabel} value={optionValue} >
        {optionLabel}
      </option>
    )
  );


  return (
    <CustomSelectWrapper gridArea={gridArea}>
      {selectLabel && <label>{selectLabel}</label>}
      <select name={name} onChange={onChange} onClick={onClick}>
        {renderedOptions}
      </select>
    </CustomSelectWrapper>
  );
}
