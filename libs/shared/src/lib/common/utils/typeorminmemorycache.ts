import { QueryResultCache } from 'typeorm/cache/QueryResultCache';
import { Connection, QueryRunner } from 'typeorm';
import { QueryResultCacheOptions } from 'typeorm/cache/QueryResultCacheOptions';

export default class InMemoryResultCache implements QueryResultCache {
  private queryMap: Map<string, any> = new Map<string, any>();

  constructor(private connection: Connection) {}

  clear(queryRunner?: QueryRunner): Promise<void> {
    return new Promise<void>((ok, fail) => {
      this.queryMap.clear();
      ok();
    });
  }

  connect(): Promise<void> {
    return Promise.resolve(null);
  }

  disconnect(): Promise<void> {
    return Promise.resolve(null);
  }

  getFromCache(
    options: QueryResultCacheOptions,
    queryRunner?: QueryRunner,
  ): Promise<QueryResultCacheOptions | undefined> {
    return new Promise<QueryResultCacheOptions | undefined>((ok, fail) => {
      if (options.identifier) {
        if (this.queryMap.has(options.identifier)) {
          ok(this.queryMap.get(options.identifier));
        } else {
          ok(undefined);
        }
      } else if (options.query) {
        if (this.queryMap.has(options.query)) {
          ok(this.queryMap.get(options.query));
        } else {
          ok(undefined);
        }
      } else {
        ok(undefined);
      }
    });
  }

  isExpired(savedCache: QueryResultCacheOptions): boolean {
    const timeValue = savedCache.time ? savedCache.time : 0;
    return timeValue + savedCache.duration < new Date().getTime();
  }

  remove(identifiers: string[], queryRunner?: QueryRunner): Promise<void> {
    identifiers.map((f) => {
      this.queryMap.delete(f);
    });
    return Promise.resolve(undefined);
  }

  storeInCache(
    options: QueryResultCacheOptions,
    savedCache: QueryResultCacheOptions | undefined,
    queryRunner?: QueryRunner,
  ): Promise<void> {
    return new Promise<void>((ok, fail) => {
      if (options.identifier) {
        this.queryMap.set(options.identifier, options);
      } else if (options.query) {
        this.queryMap.set(options.query, options);
      }
      ok();
    });
  }

  synchronize(queryRunner?: QueryRunner): Promise<void> {
    return Promise.resolve(undefined);
  }
}
