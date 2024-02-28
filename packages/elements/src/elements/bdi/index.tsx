import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { BdiElementProps, BdiProps } from './bdi.types';

export const stylinBdi = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) => stylin<T & 
  BdiElementProps & RefAttributes<BdiElementProps>
>('bdi');

const BdiElement = stylinBdi();

export const Bdi = forwardRef<PropsWithChildren<BdiProps>>((props, ref) => (
  <BdiElement {...props} ref={ref} />
));

Bdi.displayName = 'Bdi';

export * from './bdi.types';