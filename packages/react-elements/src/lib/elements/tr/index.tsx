import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { TrElementProps, TrProps } from './tr.types';

export const stylinTr = stylin<TrElementProps & RefAttributes<TrElementProps>>(
  'tr'
);

const TrElement = stylinTr();

export const Tr = forwardRef<PropsWithChildren<TrProps>>((props, ref) => (
  <TrElement {...props} ref={ref} />
));

Tr.displayName = 'Tr';

export * from './tr.types';
