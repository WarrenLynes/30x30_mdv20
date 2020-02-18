import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, first, withLatestFrom } from 'rxjs/operators';
import { PhonesFacade } from '@mdv20/core-state';
import { Observable } from 'rxjs';
import { Phone } from '@mdv20/core-data';

@Component({
  selector: 'mdv20-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  phones$: Observable<Phone[]> = this.facade.allPhones$;
  phone$: Observable<Phone> = this.facade.selectedPhone$;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public facade: PhonesFacade
  ) { }

  ngOnInit() {
    this.facade.loadPhones();

    this.phones$.pipe(
      withLatestFrom(this.route.paramMap),
      filter(([phones, params]) => params.has('id') && !!phones.length),
      first(),
    ).subscribe(([phones, params]) => {
      console.log(phones);
      this.facade.selectPhone(params.get('id'));
    });
  }

}
