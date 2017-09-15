export default class Message {

    private message: string;

    constructor() {
        this.message = "Hello";
    }

    public getMessage(): string {
        return this.message;
    }

}