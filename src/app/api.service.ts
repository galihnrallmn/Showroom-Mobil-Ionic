import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient
  ) { }

  apiURL(){
    return "http://localhost/apimobil"
  }

  addMobil(data : any){
    return this.http.post(this.apiURL()+'/create_mobil.php', data)
  }

  getMobil(){
    return this.http.get(this.apiURL()+'/get_all_mobil.php')
  }

  deleteMobil(idmobil : any){
    return this.http.get(this.apiURL()+'/delete_mobil.php?idmobil='+idmobil)
  }

  getOneMobil(idmobil : any){
    return this.http.get(this.apiURL()+'/get_one_mobil.php?idmobil=' + idmobil)
  }

  updateMobil(idmobil : any, data : any){
    return this.http.put(this.apiURL()+'/update_mobil.php?idmobil=' + idmobil, data)
  }

  addMerek(data : any){
    return this.http.post(this.apiURL()+'/create_merek.php', data)
  }

  getMerek(){
    return this.http.get(this.apiURL()+'/get_all_merek.php')
  }

  deleteMerek(idmerek : any){
    return this.http.get(this.apiURL()+'/delete_merek.php?idmerek='+idmerek)
  }

  getOneMerek(idmerek : any){
    return this.http.get(this.apiURL()+'/get_one_merek.php?idmerek=' + idmerek)
  }

  updateMerek(idmerek : any, data : any){
    return this.http.put(this.apiURL()+'/update_merek.php?idmerek=' + idmerek, data)
  }
}
