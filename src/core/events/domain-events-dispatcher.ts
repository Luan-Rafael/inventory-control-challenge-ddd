export class DomainEventDispatcher {
    private static handlers: Record<string, ((event: any) => void)[]> = {};

    static register<T>(eventClass: new (...args: any[]) => T, handler: (event: T) => void) {
        const eventName = eventClass.name;
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(handler);
    }

    static dispatch(event: any) {
        const eventName = event.constructor.name;
        const handlers = this.handlers[eventName] ?? [];

        for (const handler of handlers) {
            handler(event);
        }
    }
}
