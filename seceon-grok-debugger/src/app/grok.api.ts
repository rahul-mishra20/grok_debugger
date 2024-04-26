import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import  {ApiVar}  from "./app.api.env";

@Injectable({
  providedIn: "root"
})
export class GrokInputService {
  constructor(private http: HttpClient, private apiVar: ApiVar) {}

  public grokInput(data:any): Observable<any> {
    const url = `${this.apiVar.host}/grokInput`
    return this.http.post<any>(url, 
      data
    );
  }
}