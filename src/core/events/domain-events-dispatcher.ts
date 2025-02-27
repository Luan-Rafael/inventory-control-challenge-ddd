export class DomainEventDispatcher {
    private static handlers: { [eventName: string]: Function[] } = {};

    static register(eventName: string, handler: Function) {
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(handler);
    }

    static dispatch(event: any) {
        const eventName = event.constructor.name;
        const handlers = this.handlers[eventName] || [];

        for (const handler of handlers) {
            handler(event);
        }
    }
}
