import { Component, OnInit } from '@angular/core';
import { AppFacade, AuthFacade, PhonesFacade } from '@mdv20/core-state';
import { Observable } from 'rxjs';
import { Phone } from '@mdv20/core-data';

@Component({
  selector: 'mdv20-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  authenticated$: Observable<boolean> = this.authFacade.authenticated$;
  loading$: Observable<boolean> = this.facade.loading$;
  phones$: Observable<Phone[]> = this.phoneFacade.allPhones$;
  phone$: Observable<Phone> = this.phoneFacade.selectedPhone$;

  constructor(
    private facade: AppFacade,
    private authFacade: AuthFacade,
    private phoneFacade: PhonesFacade
  ) { }

  ngOnInit() {
    this.facade.initialize();
    this.phoneFacade.loadPhones();
  }

  onLogout() {
    this.authFacade.logout();
  }

  selectPhone(id: number) {
    this.phoneFacade.selectPhone(id);
  }

  savePhone(phone: Phone) {
    if(phone.id) {
      this.phoneFacade.updatePhone(phone);
    } else {
      this.phoneFacade.createPhone(phone);
    }
    this.reset();
  }

  deletePhone(phone: Phone) {
    this.phoneFacade.deletePhone(phone);
  }
  reset() {
    this.phoneFacade.selectPhone(null);
  }
}
