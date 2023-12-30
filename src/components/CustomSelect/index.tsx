import { ChangeEventHandler, MouseEventHandler } from 'react';
import { CustomSelectWrapper } from '@/components/CustomSelect/index.styles';

interface IOptionsProps {
  optionValue: string;
  optionLabel: string;
}
export interface ICustomSelectProps {
  options?: IOptionsProps[];
  gridArea: string;
  selectLabel?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  onClick?: MouseEventHandler<HTMLSelectElement>;
}

export function CustomSelect({
  gridArea,
  options,
  selectLabel,
  name,
  onChange,
  onClick,
}: ICustomSelectProps) {
  console.log('options', options);
  const renderedOptions = options!.map((item: IOptionsProps) => (
    <option key={item.optionValue + item.optionLabel} value={item.optionValue}>
      {item.optionLabel}
    </option>
  ));

  return (
    <CustomSelectWrapper gridArea={gridArea}>
      {selectLabel && <label>{selectLabel}</label>}
      <select name={name} onChange={onChange} onClick={onClick}>
        {renderedOptions}
      </select>
    </CustomSelectWrapper>
  );
}
