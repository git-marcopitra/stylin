import type { SerializedStyles, TRenderVariant } from './stylin.types';

const renderVariant: TRenderVariant =
  ({ scale, property }) =>
  ({ theme, ...props }) =>
    (theme[scale] as Record<string, SerializedStyles>)?.[props[property]!] ??
    ({} as SerializedStyles);

export default renderVariant;
