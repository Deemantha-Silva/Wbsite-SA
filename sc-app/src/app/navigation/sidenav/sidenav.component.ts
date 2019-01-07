import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  opened = true;
  imageSource = '';
  img1 = '../../assets/images/back.png';
  img2 = '../../assets/images/next.png';

  constructor(private router: Router) {
    this.imageSource = this.img1;
  }

  public closeSideNav() {
    if (this.opened) {
        this.imageSource = this.img2;
        this.opened = false;
    }
  }

  public imgSwitch() {
    if (this.opened) {
      this.imageSource = this.img2;
    } else {
      this.imageSource = this.img1;
    }
  }

  public goToFacebook() {
    window.location.href = 'https://www.facebook.com/sarath.chandrasekere.1';
  }

}
