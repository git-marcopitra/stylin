import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { H4ElementProps, H4Props } from './h4.types';

export const stylinH4 = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & H4ElementProps & RefAttributes<H4ElementProps>>('h4')(...styles);

const H4Element = stylinH4();

export const H4 = forwardRef<PropsWithChildren<H4Props>>((props, ref) => (
  <H4Element {...props} ref={ref} />
));

H4.displayName = 'H4';

export * from './h4.types';