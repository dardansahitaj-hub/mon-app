import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {SingleAppareilPage} from './single-appareil/single-appareil.page';

@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.page.html',
  styleUrls: ['./appareils.page.scss'],
})
export class AppareilsPage implements OnInit {
  private params: any;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onLoadAppareil(name: string){
  }
}
