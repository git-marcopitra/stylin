import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SmallElementProps, SmallProps } from './small.types';

export const stylinSmall = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & SmallElementProps & RefAttributes<SmallElementProps>>('small')(
    ...styles
  );

const SmallElement = stylinSmall();

export const Small = forwardRef<PropsWithChildren<SmallProps>>((props, ref) => (
  <SmallElement {...props} ref={ref} />
));

Small.displayName = 'Small';

export * from './small.types';