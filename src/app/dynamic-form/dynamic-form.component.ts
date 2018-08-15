import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormSchemaService } from '../PublicService/form-schema.service';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit, OnDestroy {

  schema: any;
  subscription: Subscription;
  formModel: any;
  value: any;

  constructor(
    private _formSchema: FormSchemaService,
  ) {
    this.subscription = this._formSchema.getSchema().subscribe(
      schema => {
        this.schema = _.cloneDeep(schema);
      }
    );
  }

  ngOnInit() {
  }

  setValue(value) {
    this.value = value;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
