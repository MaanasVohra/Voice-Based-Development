class Message {
    constructor(message) {
        this.message = message;
    }
    getMessage() {
        return this.message;
    }
    setMessage(message) {
        this.message = message;
    }
}

let message = new Message('');
module.exports = {
    messages: [message],
    Message: Message
};