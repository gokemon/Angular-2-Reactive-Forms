import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
/* imports Angular "core" library modules above and my stuff below */
import { Customer } from './customer';


/* TypeDecorator */
@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
/* Export class */
export class CustomerComponent  {
    customer: Customer= new Customer();

    // Save Method
    save(customerForm: NgForm) {
        console.log(customerForm.form);
        console.log('Saved: ' + JSON.stringify(customerForm.value));
    }
 } //CustomerComponent
