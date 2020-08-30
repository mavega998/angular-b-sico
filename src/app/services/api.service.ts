import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	url = 'https://swapi.dev/api';

	constructor(private http: HttpClient) {}

	getAll(page = null) {
		let urlAux = '';
		if (page) {
			urlAux = `${this.url}/people?${page}`;
		} else {
			urlAux = `${this.url}/people`;
		}
		return this.http.get(urlAux);
	}

	get(id: number) {
		return this.http.get(`${this.url}/people/${id}`);
	}
}
