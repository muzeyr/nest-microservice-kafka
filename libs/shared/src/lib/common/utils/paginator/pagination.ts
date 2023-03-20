import { ObjectType } from 'typeorm';

import Paginator, { Order, PaginationCursor, PagingResult } from './Paginator';

export { Order, PaginationCursor, PagingResult };

export interface PagingQuery {
  afterCursor?: string;
  beforeCursor?: string;
  limit?: number;
  order?: Order;
}

export interface PaginationOptions<Entity> {
  entity: ObjectType<Entity>;
  alias?: string;
  query?: PagingQuery;
  paginationKeys?: Extract<keyof Entity, string>[];
}

export function buildPaginator<Entity>(
  options: PaginationOptions<Entity>,
): Paginator<Entity> {
  const {
    entity,
    query = {},
    alias = entity.name,
    paginationKeys = ['id' as any],
  } = options;

  const paginator = new Paginator(entity, paginationKeys);

  paginator.setAlias(alias);

  if (query.afterCursor) {
    paginator.setAfterCursor(query.afterCursor);
  }

  if (query.beforeCursor) {
    paginator.setBeforeCursor(query.beforeCursor);
  }

  if (query.limit) {
    paginator.setLimit(query.limit);
  }

  if (query.order) {
    paginator.setOrder(query.order);
  }

  return paginator;
}
//https://github.com/benjamin658/typeorm-cursor-pagination/tree/dependabot/npm_and_yarn/path-parse-1.0.7
