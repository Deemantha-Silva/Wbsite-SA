import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
declare const $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'Contact Us';
  nm = '';
  emailAddr = '';
  sub = '';
  msg = '';

  constructor() { }

  ngOnInit() {
  }

  public email() {
   this.nm = $('#name').val();
   this.emailAddr = $('#email').val();
   this.sub = $('#subject').val();
   this.msg = $('#message').val();
  }

}
