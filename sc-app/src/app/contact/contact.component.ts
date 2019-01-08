import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import * as emailjs from 'emailjs-com';
declare const $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'Contact Us';
  email = new FormControl('', [Validators.required, Validators.email]);
  fname = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]);
  lname = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]);
  cReason = new FormControl('', [Validators.required]);
  private service_id = 'gmail';
  private template_id = 'contact_form';
  private user_id = 'user_x6XlfsspB7mXunYkCNOjB';

  reasons: any[] = [
    {r: 'Sociology - Article', value: 'Sociology'},
    {r: 'Book Suggestion', value: 'Sociology'},
    {r: 'Link Review', value: 'Sociology'},
    {r: 'Sri Lanka - Article', value: 'Sri Lanka'},
    {r: 'Video Suggestion', value: 'Sri Lanka'},
    {r: 'Guest Speaking/Lecturing', value: 'Hiring'},
    {r: 'Product Purchase', value: 'Product'},
    {r: 'General Inquiry', value: 'General'}
  ];

  constructor() { }

  ngOnInit() {

  }

  getErrorMessage(num) {

    if (num === 1) {
      return this.fname.hasError('required') ? 'You must enter a first name' :
          this.fname.hasError('pattern') ? 'Not a valid name' :
              '';
      }

    if (num === 2) {
        return this.lname.hasError('required') ? 'You must enter a last name' :
            this.lname.hasError('pattern') ? 'Not a valid name' :
                '';
        }

    if (num === 3) {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
    }
  }

  onSubmit() {
    emailjs.sendForm(this.service_id, this.template_id, '#myForm', this.user_id)
    .then((response) => {
      console.log('success', response.status, response.text);
    }, (err) => {
      console.log('failed', err);
    });
    // console.log($('#firstName').val());
    // console.log($('#lastName').val());
    // console.log($('#emailAddr').val());
    // console.log($('#catSelect').text());
    // console.log($('#messageArea').val());
  }

}
