import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
    private message = "";

    constructor() {}

    changeMessage(newMessage: any) {
        this.message = newMessage;
    }
    getMessage(): any {
        return this.message;
    }
}