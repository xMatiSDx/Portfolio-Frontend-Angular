import { Component } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';

/*------------------------- FONT AWESOME -------------------------*/
import { FaIconLibrary, FaConfig } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private formBuilder: FormBuilder,
              private library: FaIconLibrary,
              private faConfig: FaConfig,) {
    library.addIconPacks(fas, fab);
    faConfig.fixedWidth = true;
  }

  onEnviar() {
    console.log('enviado')
  }
}
