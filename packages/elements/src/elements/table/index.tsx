import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { TableElementProps, TableProps } from './table.types';

export const stylinTable = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & TableElementProps & RefAttributes<TableElementProps>>('table')(
    ...styles
  );

const TableElement = stylinTable();

export const Table = forwardRef<PropsWithChildren<TableProps>>((props, ref) => (
  <TableElement {...props} ref={ref} />
));

Table.displayName = 'Table';

export * from './table.types';