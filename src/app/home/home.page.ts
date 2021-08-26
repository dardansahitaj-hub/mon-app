import { Component } from '@angular/core';
import { MenuController,NavController,NavParams } from '@ionic/angular';
import {Router} from '@angular/router';
import { PhotoService } from '../services/photo.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private menu: MenuController,public photoService: PhotoService, public navCtrl: NavController, private router: Router) {}
  navigate(url){
    this.navCtrl.navigateForward([url]);
  }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }
}
