import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FaIconLibrary, FaConfig } from '@fortawesome/angular-fontawesome';
import { faCamera, faPencil, faAdd, faRemove } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent {

  @Output() btnClick = new EventEmitter();
  @Input() figure: string = "";
  @Input() type:string = "";
  

  constructor(private library: FaIconLibrary, private faConfig: FaConfig) {
    library.addIcons(faCamera, faPencil, faAdd, faRemove);
    faConfig.fixedWidth = true;
   }

  onClick() {
    this.btnClick.emit()
  }

  ngOnInit(): void {
  }

}
