import { Command } from "./command.interface";

export class CartInvoker {
  private history: Command[] = [];

  dispatch(command: Command): void {
    command.execute();
    this.history.push(command);
  }

  undo(): void {
    const command = this.history.pop();
    if (command) {
      console.log("[Invocador] Deshaciendo última acción...");
      command.undo();
    } else {
      console.log("[Invocador] Nada que deshacer.");
    }
  }
}