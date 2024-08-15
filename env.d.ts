import { CfProperties, Request, ExecutionContext, KVNamespace } from '@cloudflare/workers-types';

declare module 'h3' {
  interface H3EventContext {
    cf: CfProperties,
    cloudflare: {
      request: Request,
      env: {
        MY_KV: KVNamespace,
      }
      context: ExecutionContext,
    };
  }
}