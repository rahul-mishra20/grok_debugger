import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ApiVar {
    apiIP : string
    apiPORT :string
    host : string
    headers? : HttpHeaders

    // token = <string>sessionStorage.getItem('token');
    
    constructor() {

        // if(this.token === "undefined" || this.token == null){
        //     this.token = <string>localStorage.getItem('token');
        // }

        this.apiIP = "localhost"
        // this.apiIP = "34.16.169.65"
        this.apiPORT = "5000"
        this.host = `http://${this.apiIP}:${this.apiPORT}/api`
        // this.host = `http://${this.apiIP}/api`

        // if (this.token != null) this.setHeader()
    }


    // setHeader() {


    //     let payload = JSON.parse(atob((this.token.split("."))[1])); 

    //     this.headers = new HttpHeaders({
    //         "Content-Type": "application/json; charset=utf-8"
    //     });
    // }
}