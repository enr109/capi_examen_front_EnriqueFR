import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private URL: string = environment.rootUrl;

  constructor(private http: HttpClient) { }

  public async getUser() {
    const URL = `${this.URL}/usuarios`;
    return await this.http.get(URL).toPromise();
  }
}
