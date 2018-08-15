import { Component, OnInit } from '@angular/core';
import { FormSchemaService } from '../PublicService/form-schema.service';

@Component({
  selector: 'app-generate-form',
  templateUrl: './generate-form.component.html',
  styleUrls: ['./generate-form.component.css']
})
export class GenerateFormComponent implements OnInit {

  constructor(private _formSchema: FormSchemaService) { }

  basicSchema = {
    'properties': {
      'email': {
        'type': 'string',
        'description': 'email',
        'format': 'email'
      },
      'password': {
        'type': 'string',
        'description': 'Password'
      }
    },
    'required': ['email', 'password']
  };

  ngOnInit() {
    this._formSchema.updateSchema(this.basicSchema);
  }

  addSchemaColumn() {
    this.basicSchema.properties['password2'] = {
      'type': 'string',
      'description': 'Password'
    };
    this._formSchema.updateSchema(this.basicSchema);
  }

  addBasicInput() {
    this.basicSchema.properties['basic'] = {
      'type': 'string',
      'description': 'Basic'
    };
    this._formSchema.updateSchema(this.basicSchema);
  }

  addPasswordInput() {
    this.basicSchema.properties['password2'] = {
      'type': 'string',
      'widget': {
        'id': 'password'
      },
      'description': 'Password'
    };
    this._formSchema.updateSchema(this.basicSchema);
  }


}
