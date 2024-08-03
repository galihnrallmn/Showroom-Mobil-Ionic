import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-merek',
  templateUrl: './merek.page.html',
  styleUrls: ['./merek.page.scss'],
})
export class MerekPage {
  idmerek : any;
  merek : any;
  constructor(
    public _apiservice: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
    private toastController: ToastController
  ) {
    this.getMerek();
  }

  ngOnInit() {
    console.log('cek fungsi halaman');
  }

  ionViewDidEnter() {
    console.log('jika selesai loading');
    this.getMerek();
  }

  getMerek() {
    this._apiservice.getMerek().subscribe((res: any) => {
      console.log("sukses", res);
      this.merek = res;
    });
  }

  async deleteMerek(idmerek: any) {
    const alert = await this.alertController.create({
      header: 'Perhatian',
      subHeader: 'Yakin menghapus data ini?',
      buttons: [
        {
          text: 'Batal',
          handler: () => {
            console.log('Hapus dibatalkan');
          }
        },
        {
          text: 'Yakin',
          handler: async () => {
            try {
              const res = await this._apiservice.deleteMerek(idmerek).toPromise();
              console.log('Berhasil Menghapus data', res);

              // Tampilkan notifikasi toast
              this.presentToast('Berhasil menghapus data', 'danger');

              this.getMerek();
            } catch (error) {
              console.error('Gagal menghapus data', error);

              // Tampilkan notifikasi toast
              this.presentToast('Gagal menghapus data', 'danger');
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast(message: string, color: string = 'success') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Durasi tampilan toast dalam milidetik
      position: 'bottom',
      color: color // Atur warna notifikasi toast
    });

    await toast.present();
  }

}
