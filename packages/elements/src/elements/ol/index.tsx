import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { OlElementProps, OlProps } from './ol.types';

export const stylinOl = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & OlElementProps & RefAttributes<OlElementProps>>('ol')(...styles);

const OlElement = stylinOl();

export const Ol = forwardRef<PropsWithChildren<OlProps>>((props, ref) => (
  <OlElement {...props} ref={ref} />
));

Ol.displayName = 'Ol';

export * from './ol.types';