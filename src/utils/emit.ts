import mitt, { Emitter } from 'mitt';

export declare namespace EventBus{
    type Event = {
       DrawEdit:string
    }
}

export const emitter: Emitter<EventBus.Event> = mitt<EventBus.Event>()