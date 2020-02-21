import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { List } from './model/list.model';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {
  constructor(
    private http: HttpClient,
    private practiceService: PracticeService
  ) { }

  getLists(): Observable<List[]> {
    return this.http.get<List[]>(environment.serverIp + 'lists');
  } 

  getList(id: number): Observable<List> {
    return this.http.get<List>(`${environment.serverIp}lists/${id}`);
  }

  postList(list: List): Observable<List>{
    return this.http.post<List>(`${environment.serverIp}lists`, list);
  }

  putList(id: number, list: List): Observable<List>{
    return this.http.put<List>(`${environment.serverIp}lists/${id}`, list);
  }

  //deleteList(id: number){
  //  return this.http.delete<List>(`${environment.serverIp}lists/${id}`);
  //}


}
