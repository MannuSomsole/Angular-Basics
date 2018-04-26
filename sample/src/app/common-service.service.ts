import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Http, Response, Headers, RequestOptions, URLSearchParams, RequestMethod, Request } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CommonServiceService {
  private subject = new Subject<any>();
  private headers = new Headers({
      'Content-Type': 'application/json'
  });
  options: RequestOptions;
  constructor(private http: Http) {
    this.options = new RequestOptions({ headers: this.headers });
  }
  displayMessage() {
    //alert("Hello");
  }
  
  sendMessage(message: string) {
      this.subject.next({ text: message });
  }

  clearMessage() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }

  postRequest(url, data) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');

    const requestOptions = new RequestOptions({
        method: RequestMethod.Post,
        url: url,
        headers: this.headers,
        body: JSON.stringify(data)
    });

    return this.http.request(new Request(requestOptions))
        .map(response => response.json())
        .catch(response => {
            return Observable.throw(response.json());
        });

  }
}
