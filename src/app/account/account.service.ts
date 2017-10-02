import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AccountService {
    public token: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        console.log("Acc Serv Const")
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    signup(name: string, email: string,  password: string, password_confirmation: string){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });        
        let body = JSON.stringify({user: { name: name, email: email, password: password, password_confirmation: password_confirmation }});   

        return this.http.post('http://localhost:8080/users', body, options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                console.log(response.json() && response.json().activation); 
                let code = response.json() && response.json().code;
                if (code) {                                       
                    return true;
                } else {                    
                    return false;
                }
            });

    }

    login(email: string, password: string): Observable<boolean> {   
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log([email, password]);
        let body = JSON.stringify({ email: email, password: password });      
        return this.http.post('http://localhost:8080/login', body, options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }

    activate(token: string, email: string) {
        token = encodeURIComponent(token);
        email = encodeURIComponent(email);
        console.log(`http://localhost:8080/account_activations/${token}/edit?email=${email}`);
        return this.http.get(`http://localhost:8080/account_activations/${token}/edit?email=${email}`)
            .map((response: Response) => {                 
                let token = response.json() && response.json().token;                
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ email: decodeURIComponent(email), token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }  
                                   
            });

    }
}