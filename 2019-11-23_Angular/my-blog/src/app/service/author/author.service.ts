import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthorDto} from '../../dto/AuthorDto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private URL_AUTHOR = '/api/author';
  private URL_POST: string;

  constructor(private http: HttpClient) { }
  getAuthor(id: number): Observable<AuthorDto> {
    return this.http.get<AuthorDto>(this.URL_POST + `/${id}`);
  }

  getAllAuthors(): Observable<AuthorDto[]> {
    return this.http.get<AuthorDto[]>(this.URL_POST);
  }

  saveAuthor(authorDto: AuthorDto) {
    return this.http.post(this.URL_AUTHOR, authorDto);
  }
}
