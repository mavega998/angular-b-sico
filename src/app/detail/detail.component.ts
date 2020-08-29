import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: [ './detail.component.scss' ]
})
export class DetailComponent implements OnInit {
	person: any;

	constructor(private apiService: ApiService, private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.params.subscribe((data: any) => {
			this.apiService.get(Number(data.id)).subscribe((info: any) => {
				this.person = info;
			});
		});
	}
}
