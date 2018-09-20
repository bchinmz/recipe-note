import { QueueMessageAction } from "./queue.message.action";

export class QueueMessage {
    constructor(
        public action: QueueMessageAction,
        public message: any
    ) {}
}