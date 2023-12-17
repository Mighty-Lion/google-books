enum Breakpoinst {
  'MOBILE_S' = 360,
  'MOBILE_M' = 375,
  'MOBILE_L' = 480,
  'TABLET_S' = 576,
  'TABLET_M' = 768,
  'MOBILE_LANDSCAPE' = 900,
  'TABLET_L' = 1024,
  'DESKTOP_S' = 1280,
  'TABLET_UL' = 1200,
  'DESKTOP_M' = 1440,
  'DESKTOP_L' = 1920,
}
type TBreakpointType = 'up' | 'down';

type TBreakpointSizes = keyof typeof Breakpoinst;

export function getBreakpoint(
  size: TBreakpointSizes,
  type: TBreakpointType = 'up'
): string {
  const output = type === 'up' ? Breakpoinst[size] : Breakpoinst[size] - 1;
  return `${output}px`;
}

export function getBreakpointNumber(
  size: TBreakpointSizes,
  type: TBreakpointType = 'up'
): number {
  const output = type === 'up' ? Breakpoinst[size] : Breakpoinst[size] - 1;

  return output;
}
