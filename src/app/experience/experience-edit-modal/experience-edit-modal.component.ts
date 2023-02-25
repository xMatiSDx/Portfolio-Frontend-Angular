import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/*--------- INTERFACE---------*/
import { Experiences } from '../interface/experiences';

/*--------- SERVICE ----------*/
import { ExperienceService } from '../service/experience.service';

//-------------------- ng-bootstrap ---------------------------//
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-experience-edit-modal',
  templateUrl: './experience-edit-modal.component.html',
  styleUrls: ['./experience-edit-modal.component.css']
})
export class ExperienceEditModalComponent {

  experiences: Experiences[] = [];

  experienceEditForm:FormGroup;


  img: string = '../../../../assets/images/explogos/add.png';

  constructor(private formBuilder: FormBuilder, private expService: ExperienceService, public activeModal:NgbActiveModal,) {
    this.experienceEditForm= this.formBuilder.group({
      logo:['',[Validators.required, ]],
      company:['',[Validators.required, Validators.minLength(4)]],
      from:['',[Validators.required, ]],
      to:['',[Validators.required, ]],
      position: ['',[Validators.required, ]],
      description: ['',[Validators.required, ]],
   })
  }

  get logo(){
    return this.experienceEditForm.get("logo");
  }

  get company(){
    return this.experienceEditForm.get("company");
  }
 
  get from(){
   return this.experienceEditForm.get("from");
  }

  get to(){
    return this.experienceEditForm.get("to");
   }

  get position(){
    return this.experienceEditForm.get("position");
  }

  get description(){
    return this.experienceEditForm.get("description");
  }

  get companyValid(){
    return this.company?.touched && !this.company?.valid;
  }

  get positionValid() {
    return this.position?.touched && !this.position?.valid;
  }

  /*-------------- EXPERIENCE ADD FORM PICTURE UPLOADER ---------------*/
  pictureUpload() {
    document.getElementById('logo')?.click()
  }

  onFileChange(event:any) {
    const reader = new FileReader();
     
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.img = reader.result as string;
      };
    }
  }


  ngOnInit(): void {
    // this.expService.getById().subscribe((exp) => {
    // this.expService = exp;
    // })
    this.expService.getExp().subscribe( Experiences => {
      console.log(Experiences);
    })
  }


    /*-------------- EXPERIENCE EDIT FORM SUBMIT ---------------*/
  onSubmit() {
    if(!this.experienceEditForm.get('company')!.value) {
      alert("Please add a Experience!");
      return
    } 
    const exp = this.experienceEditForm.value; 
    this.expService.addExp(exp).subscribe((exp)=>(this.experiences.push(exp)))
    console.log(this.experiences);
    this.onCancel();
    alert("Experience Saved!");
    } 

  onCancel() {
    this.experienceEditForm.reset();
    this.img = '../../../../assets/images/explogos/add.png'
  }
}
