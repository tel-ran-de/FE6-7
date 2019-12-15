import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthorDto} from '../../dto/AuthorDto';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private URL_AUTHOR = '/api/author';

  constructor(private http: HttpClient) { }

  saveAuthor(authorDto: AuthorDto) {
    return this.http.post(this.URL_AUTHOR, authorDto);
  }
}
