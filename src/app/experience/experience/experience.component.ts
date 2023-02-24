import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

/*------------------ Experience Service ------------------*/
import { ExperienceService } from '../service/experience.service';

/*------------------ Experience Interface ------------------*/
import { Experiences } from '../interface/experiences';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Output() onAddExp: EventEmitter<Experiences[]> = new EventEmitter;

  experiences: Experiences[] = [];

  /*-------- EXPERIENCE ADD FORM COLLAPSE --------*/
  public isCollapsed = true;

  experienceAddForm:FormGroup;


  img: string = '../../../../assets/images/explogos/add.png';

  constructor(private formBuilder: FormBuilder, private expService: ExperienceService) {
    this.experienceAddForm= this.formBuilder.group({
      logo:['',[Validators.required, ]],
      company:['',[Validators.required, Validators.minLength(4)]],
      from:['',[Validators.required, ]],
      to:['',[Validators.required, ]],
      position: ['',[Validators.required, ]],
      description: ['',[Validators.required, ]],
   })
  }

  get logo(){
    return this.experienceAddForm.get("logo");
  }

  get company(){
    return this.experienceAddForm.get("company");
  }
 
  get from(){
   return this.experienceAddForm.get("from");
  }

  get to(){
    return this.experienceAddForm.get("to");
   }

  get position(){
    return this.experienceAddForm.get("position");
  }

  get description(){
    return this.experienceAddForm.get("description");
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


    /*-------------- EXPERIENCE ADD FORM SUBMIT ---------------*/
  onSubmit() {
    if(!this.experienceAddForm.get('company')!.value) {
      alert("Please add a Experience!");
      return
    } 
    const exp = this.experienceAddForm.value; 
    this.expService.addExp(exp).subscribe((exp)=>(this.experiences.push(exp)))
    console.log(this.experiences);
    this.onCancel();
    alert("Experience Saved!");
    } 

  onCancel() {
    this.isCollapsed = !this.isCollapsed;
    this.experienceAddForm.reset();
    this.img = '../../../../assets/images/explogos/add.png'
  }

  changePicture() {
    console.log('Change Picture!')
  }

  ngOnInit(): void {
  }

  // addExp(exp: Experiences) {
  //   this.info.addExp(exp).subscribe((exp)=>(this.experiences.push(exp)))
  //   console.log(this.experiences)
  //   }

}
