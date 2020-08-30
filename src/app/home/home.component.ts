import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	title = '';
	description = '';
	fNext = false;
	fPrev = true;
	next = '';
	prev = '';
	characters: any[] = [];

	constructor(private apiService: ApiService) {}

	ngOnInit(): void {
		this.title = 'Aprendiendo Angular';
		this.description = `Con este proyecto vamos a aprender los
		 conceptos básicos sobre desarrollo con Angular 2+. Aprenderemos
		 a usar Pipes, Services, Components y mucho más.`;

		this.loadAllCharacters();
	}

	loadAllCharacters() {
		this.apiService.getAll().subscribe((data: any) => {
			this.loadData(data);
		});
	}

	loadPage(url: string) {
		this.apiService.getAll(url.split('?')[1]).subscribe((data: any) => {
			this.loadData(data);
		});
	}

	private loadData(data: any) {
		this.characters = data.results;
		if (data.next === null) {
			this.fNext = true;
			this.next = '';
		} else {
			this.fNext = false;
			this.next = data.next;
		}
		if (data.previous === null) {
			this.fPrev = true;
			this.prev = '';
		} else {
			this.fPrev = false;
			this.prev = data.previous;
		}
	}
}
