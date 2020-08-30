import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

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
