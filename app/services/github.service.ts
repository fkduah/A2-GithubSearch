import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { Http } from '@angular/http';


@Injectable()
export class GithubService{
    private username: string;
    private client_id = '24d568034b90c3c2ea74';
    private client_secret = 'f9f7358efddb4cce7c64014b8b98ecf4f06af5ea';

    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'fkduah';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map( res => res.json());
    }

     getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map( res => res.json());
    }

    updateUser(username:string){
        this.username = username;
    }
}