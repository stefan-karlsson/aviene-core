import { type LambdaContext, apiGatewayV2Handler, getInMemoryMessageBus } from '@aviene/framework';
import { RegisterTenantMessageController } from '../../../../commands/register-tenant/register-tenant.message-controller.js';
import { registerTenantEventSchema } from './register-tenant.schema.js';
import type { RegisterTenantEvent } from './register-tenant.types.js';

const commandBus = getInMemoryMessageBus();

const { registerTenant } = new RegisterTenantMessageController(commandBus);

const lambdaHandler = async (event: RegisterTenantEvent, _context: LambdaContext) => {
  try {
    registerTenant;
    await event;

    return {
      statusCode: 201,
    };
  } catch (error) {
    // TODO: Handle the errors returned properly and return the appropriate status code

    if (error instanceof Error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: error.message }),
      };
    }

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};

/**
 * Main entry point for the Lambda function, should not be invoked directly from code.
 */
export const handler = apiGatewayV2Handler({
  lambdaHandler,
  schema: registerTenantEventSchema,
});
