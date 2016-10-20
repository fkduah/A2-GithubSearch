import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { Http } from '@angular/http';


@Injectable()
export class GithubService{
    private username: string;

    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'fkduah';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username)
        .map( res => res.json())
    }
}