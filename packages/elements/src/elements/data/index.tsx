import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DataElementProps, DataProps } from './data.types';

export const stylinData = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & DataElementProps & RefAttributes<DataElementProps>>('data')(
    ...styles
  );

const DataElement = stylinData();

export const Data = forwardRef<PropsWithChildren<DataProps>>((props, ref) => (
  <DataElement {...props} ref={ref} />
));

Data.displayName = 'Data';

export * from './data.types';