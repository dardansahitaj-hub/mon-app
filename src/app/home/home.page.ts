import { Component } from '@angular/core';
import { MenuController,NavController,NavParams } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private menu: MenuController, public navCtrl: NavController, private router: Router) {}
  navigate(url){
    this.navCtrl.navigateForward([url]);
  }
}
