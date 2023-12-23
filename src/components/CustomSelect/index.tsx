import { CustomSelectWrapper } from '@/components/CustomSelect/index.styles';

export interface ICustomSelectProps {
  options?: IOptionsProps[];
  gridArea?: string;
  selectLabel?: string;
}
interface IOptionsProps {
  optionValue: string;
  optionLabel: string;
}
export function CustomSelect({
  gridArea,
  options,
  selectLabel,
}: ICustomSelectProps) {
  const renderedOptions = options!.map(
    ({ optionValue, optionLabel }: IOptionsProps) => (
      <option key={optionValue + optionLabel} value={optionValue}>
        {optionLabel}
      </option>
    )
  );
  return (
    <CustomSelectWrapper gridArea={gridArea}>
      {selectLabel && <label>{selectLabel}</label>}
      <select>{renderedOptions}</select>
    </CustomSelectWrapper>
  );
}
