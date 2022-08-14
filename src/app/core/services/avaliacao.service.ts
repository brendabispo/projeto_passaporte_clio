import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CollectionModelAvaliacaoDto } from '../model/collectionModelAvaliacaoDto';


const baseUrl = environment.apiUrl + '/avaliacao';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  constructor(private http: HttpClient) { }

  findByMuseu(idMuseu: any, token:any):Observable<any>{
    var urlCompleta = baseUrl + "?idMuseu=" + idMuseu
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
   });
   return this.http.get(urlCompleta, {headers: reqHeader});
  }

  getDenunciadas(token:any):Observable<any>{
    var urlCompleta = baseUrl + "/denuncias"
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(urlCompleta, {headers: reqHeader});
  }

  getAvaliacoesUsuario(idVisitante:any, token:any):Observable<CollectionModelAvaliacaoDto>{
    var urlCompleta = baseUrl + "/doVisitante/" + idVisitante
    console.log(urlCompleta)
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(urlCompleta, {headers: reqHeader});
  }

}