import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Phone } from '@mdv20/core-data';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'mdv20-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges {

  form: FormGroup;

  @Input() selected: Phone;
  @Output() savePhone = new EventEmitter<Phone>();
  @Output() deletePhone = new EventEmitter<Phone>();
  @Output() cancel = new EventEmitter();

  constructor() {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if( changes.selected ) {
      this.buildForm();
    }
  }

  submit() {
    if(this.form.valid) {
      this.savePhone.emit({...this.selected, ...this.form.value});
    }
  }

  buildForm() {
    if ( this.selected && this.selected.id ) {
      this.form = new FormGroup({
        title: new FormControl(this.selected.title),
        details: new FormControl(this.selected.details),
      });
    } else {
      this.form = new FormGroup({
        title: new FormControl(''),
        details: new FormControl(''),
      });
    }
  }

  onCancel() {
    this.form.reset();
    this.cancel.emit();
  }

}
