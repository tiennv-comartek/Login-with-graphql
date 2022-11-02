import Table, { TablePaginationConfig, TableProps } from 'antd/lib/table';
import { FilterValue, SorterResult, TableCurrentDataSource } from 'antd/lib/table/interface';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { InboxOutlined } from '@ant-design/icons';

export default function TableWithNumber<RecordType extends object = any>(props: TableProps<RecordType>) {
  const [offset, setOffset] = useState(0);
  const { t } = useTranslation(['translation']);
  const locale = {
    emptyText: (
      <div className="no-data-table d-flex justify-content-center">
        <div className="flex-column">
          <InboxOutlined style={{ fontSize: '60px' }} />
          <br />
          {t('table.no-data')}
        </div>
      </div>
    ),
  };

  useEffect(() => {
    if (props.pagination && props.pagination?.current === 1) {
      setOffset(0);
    }
  }, [props.pagination]);

  const onChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<RecordType> | SorterResult<RecordType>[],
    extra: TableCurrentDataSource<RecordType>,
  ) => {
    if (pagination.pageSize && pagination.current) {
      setOffset(pagination.pageSize * (pagination.current - 1));
    }
    return props.onChange && props.onChange(pagination, filters, sorter, extra);
  };

  const tableColumns = useMemo(() => {
    if (!props.columns) return undefined;
    return props.columns.map((c) => {
      if (c.key === '#') {
        return {
          ...c,
          render: (_: any, __: any, index: number) => offset + index + 1,
        };
      }
      return c;
    });
  }, [offset, props.columns]);

  return (
    <Table
      locale={locale}
      {...props}
      rowKey={(record: any) => record[`${props.rowKey}`]}
      columns={tableColumns}
      onChange={onChange}
    />
  );
}
