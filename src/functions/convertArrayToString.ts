export function convertArrayToString(
  arr: string[] | undefined,
  delimiter: string
) {
  const valueString = arr
    ? arr.reduce(
        (accumulator: string, currentValue: string) =>
          `${accumulator + currentValue}${delimiter}`,
        ''
      )
    : '';

  return valueString.slice(0, -delimiter.length);
}
