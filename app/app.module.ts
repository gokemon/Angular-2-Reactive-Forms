import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
/* imports Angular "core" library modules above and my stuff below */
import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer.component';


/* TypeDecorator */
@NgModule({
  imports: [
    BrowserModule,  // pulls basic directives like ngif & ngfor
    FormsModule
  ], // end imports
  declarations: [
    AppComponent,
    CustomerComponent
  ], // end declarations
  bootstrap: [AppComponent]
})
/* Export class */
export class AppModule {
      // code stub
 }
