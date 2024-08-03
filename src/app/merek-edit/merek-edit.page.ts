import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-merek-edit',
  templateUrl: './merek-edit.page.html',
  styleUrls: ['./merek-edit.page.scss'],
})
export class MerekEditPage implements OnInit {
  idmerek: any;
  namamerek: any;
  merek: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiservice: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
    private toastController: ToastController,
  ) {
    this.route.params.subscribe((param: any) => {
      this.idmerek = param.idmerek;
      console.log(this.idmerek);
      this.getOneMerek(this.idmerek);
      this.getMerek();
    });

  }

  async presentToast(message: any, color: string = 'success') {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom',
      color: color,
    });

    await toast.present();
  }

  ngOnInit() {
    console.log('cek fungsi halaman');
  }

  getOneMerek(idmerek: any) {
    this._apiservice.getOneMerek(idmerek).subscribe(
      (res: any) => {
        console.log('Sukses', res);
        let merek = res[0];
        this.namamerek = merek.namamerek;
      },
      (err: any) => {
        console.log('error', err);
      }
    );
  }

  updateMerek() {
    let data = {
      namamerek: this.namamerek,
    };
    this._apiservice.updateMerek(this.idmerek, data).subscribe(
      (res: any) => {
        console.log('Success', res);
        this.presentToast('Berhasil Merubah Data', 'success');
        this.router.navigateByUrl('/merek');
      },
      (err: any) => {
        console.log('Error', err);
        this.presentToast('Gagal Merubah Data', 'danger'); // Added color for error toast
      }
    );
  }

  getMerek() {
    this._apiservice.getMerek().subscribe(
      (res: any) => {
        console.log('Sukses', res);
        this.merek = res;
      },
      (error: any) => {
        console.log('Gagal', error);
      }
    );
  }
}
