import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OwnerService {

  constructor(private http: HttpClient) {

  }
  getOwners() {
    // devuelvo la peticion, me suscribo a ella luego
    return this.http.get('http://10.125.124.160:9966/petclinic/api/owners');
  }
  postOwner(body){
    return this.http.post('http://10.125.124.160:9966/petclinic/api/owners', body );
  }
}
