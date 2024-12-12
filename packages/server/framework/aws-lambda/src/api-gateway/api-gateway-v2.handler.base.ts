import { Logger } from '@aws-lambda-powertools/logger';
import { injectLambdaContext } from '@aws-lambda-powertools/logger/middleware';
import { ApiGatewayV2Envelope } from '@aws-lambda-powertools/parser/envelopes';
import { parser } from '@aws-lambda-powertools/parser/middleware';
import middy from '@middy/core';
import type { APIGatewayProxyResultV2, Context } from 'aws-lambda';
import type { ZodType } from 'zod';

const logger = new Logger();

interface Config<EventPayload> {
  lambdaHandler: (event: EventPayload, context: Context) => Promise<APIGatewayProxyResultV2>;
  schema: ZodType<EventPayload>;
}

export async function apiGatewayV2Handler<EventPayload>(config: Config<EventPayload>) {
  const { lambdaHandler, schema } = config;

  const wrappedHandler = async (event: EventPayload, context: Context) => {
    return await lambdaHandler(event, context);
  };

  return middy(wrappedHandler)
    .use(
      parser({
        schema,
        envelope: ApiGatewayV2Envelope,
      }),
    )
    .use(injectLambdaContext(logger));
}
