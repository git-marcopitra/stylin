import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SampElementProps, SampProps } from './samp.types';

export const stylinSamp = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & SampElementProps & RefAttributes<SampElementProps>>('samp')(
    ...styles
  );

const SampElement = stylinSamp();

export const Samp = forwardRef<PropsWithChildren<SampProps>>((props, ref) => (
  <SampElement {...props} ref={ref} />
));

Samp.displayName = 'Samp';

export * from './samp.types';