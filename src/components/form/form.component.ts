import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FormService} from "./form.service";

@Component({
  selector: 'form-component',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.scss']
})
export class FormComponent implements OnInit{

  contactForm: FormGroup;
  nameInvalid: boolean = false;
  emailInvalid: boolean = false;
  messageInvalid: boolean = false;

  constructor(private formService: FormService, private formBuilder: FormBuilder) {
  }

  get themeDark(): boolean {
    return localStorage.getItem('THEME') === 'Dark';
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: new FormControl('',Validators.required),
      email: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    })
  }

  get isNameInvalid() {
    return this.contactForm.get('name')?.invalid;
  }

  get isEmailInvalid() {
    return this.contactForm.get('email')?.invalid;
  }

  get isMessageInvalid() {
    return this.contactForm.get('message')?.invalid;
  }

  submitForm(FormData: any) {
    if (this.contactForm.get('name')?.invalid) {
      this.nameInvalid = true;
    } else if (this.contactForm.get('email')?.invalid) {
      this.emailInvalid = true;
    } else if (this.contactForm.get('message')?.invalid) {
      this.messageInvalid = true;
    } else {
      this.formService.PostMessage(FormData)
        .subscribe(response => {
          location.href = 'https://mailthis.to/confirm'
        }, error => {
          console.log({ error })
        })
      this.contactForm.reset();
    }
  }
}
