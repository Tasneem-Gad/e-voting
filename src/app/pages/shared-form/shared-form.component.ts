import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shared-form',
  templateUrl: './shared-form.component.html',
  styleUrls: ['./shared-form.component.scss']
})
export class SharedFormComponent {
  @Input() control!:FormControl;
  @Input() inputId = '';
  @Input() label:string = '';
  @Input() type:string = 'text';
  @Input() required: boolean = false;
  @Input() placeholder : string = '';

  constructor(){
    this.control = new FormControl;
  }

}
