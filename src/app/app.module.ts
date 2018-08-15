import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from 'ngx-schema-form';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { GenerateFormComponent } from './generate-form/generate-form.component';


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    GenerateFormComponent
  ],
  imports: [
    BrowserModule,
    SchemaFormModule.forRoot()
  ],
  providers: [{ provide: WidgetRegistry, useClass: DefaultWidgetRegistry }],
  bootstrap: [AppComponent]
})
export class AppModule { }
