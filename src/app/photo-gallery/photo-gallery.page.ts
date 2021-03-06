import { Component } from '@angular/core';

import { Photo, PhotoService } from '../services/photo.service';

import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: 'photo-gallery.page.html',
  styleUrls: ['photo-gallery.page.scss'],
})
export class PhotoGalleryPage {
  constructor(
    public photoService: PhotoService,
    public actionSheetController: ActionSheetController
  ) {}

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  // Quand on clique sur une photo, ça ouvre différentes options possibles
  // https://ionicframework.com/docs/api/action-sheet
  public async showActionSheet(photo: Photo, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.photoService.deletePicture(photo, position);
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            // Nothing to do, action sheet is automatically closed
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
