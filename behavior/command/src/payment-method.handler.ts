import { ICommand } from "./command.interface.ts";

export class PaymentMethodHandler {
  process(command: ICommand): void {
    console.log('Payment method handler has been registered');
    command.handle();
  }

  // Forzar proveedor de pagos.
  faceToProcess(commands: ICommand[]): void {
    for(const command of commands) {
      try {
        if(command.providerName === 'Redsys') {
          throw new Error(`${command.providerName} rejected the user credit card by fraud.`);
        }
        command.handle();
        break;
      } catch (error) {
        console.warn(`\tERR: ${error.message}`);
      }
    }
  }
}