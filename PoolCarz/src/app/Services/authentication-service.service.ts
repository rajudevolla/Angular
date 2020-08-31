import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/';

@Injectable()
export class AuthenticationServiceService {

  private subject = new Subject<any>();

    loginUser() {
       this.subject.next({statusText: 'Logout'});
    }

    logoutUser() {
        this.subject.next({statusText: ''});
    }

    checkUserLoggedIn(): Observable<any> {
        return this.subject.asObservable();
    }
}
