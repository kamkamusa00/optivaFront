import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GraphicsCardI } from '@shared/models/graphicsCards.model';
import { Observable } from 'rxjs';

@Injectable()
export class GraphicsCardsService {

  constructor(private http: HttpClient) {
  }

  getAll ():Observable<GraphicsCardI[]>{
    return this.http.get<GraphicsCardI[]>('/graphics-cardss');
  }
}
