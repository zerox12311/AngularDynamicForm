import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class FormSchemaService {
  private subject = new Subject<any>();
  constructor() { }

  updateSchema(schema: any) {
    this.subject.next(schema);
  }
  // formSchema = {
  //   'properties': {
  //     'email': {
  //       'type': 'string',
  //       'description': 'email',
  //       'format': 'email'
  //     },
  //     'password': {
  //       'type': 'string',
  //       'description': 'Password'
  //     }
  //   },
  //   'required': ['email', 'password']
  // };
  getSchema(): Observable<any> {
    return this.subject.asObservable();
  }

}
