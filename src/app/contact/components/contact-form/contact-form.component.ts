import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { ContactService, ContactFormResponse, ResponseStatus } from '../../../../../src/app/services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  /*
  * Model values
  */
  name: string = "";
  email: string = "";
  message: string = ""; 
  errorMessage: string = "";

  sendersName: string = ""; // The senders name, retained after the form is cleared
  
  /*
  * Form State
  */
  showError = false;
  showSuccess = false;
  showValidationError = false;
  sendingMessage = false;
  alertClass = "alert-success"

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.sendingMessage = true;
    this.showValidationError = false;
    this.showError = false;
    this.errorMessage = "";
    
    this.setSendersName();

    this.contactService.sendMessage(this.name, this.email, this.message, environment.api_url, (response: ContactFormResponse) => {
      this.sendingMessage = false;

      if (response.status != ResponseStatus.OK) {
        this.handleError(response.status, response.errorMessage);
      }
      else {
        this.setSuccess();
        this.clearForm();
        form.reset();
      }
    });
  }

  private handleError(status: ResponseStatus, message: string) {
    this.showError = true;

    switch(status) {
      case ResponseStatus.RATE_LIMIT_ERROR:
        this.errorMessage = message;
        break;

      case ResponseStatus.SERVER_ERROR: 
        this.errorMessage = message;
        break;

      case ResponseStatus.VALIDATION_ERROR:
        this.showValidationError = true;
        break;

      default:
        this.errorMessage = "Unknown Error";
    }

    this.setFail();
  }

  /**
   * Set *sendersName* to the first name of the sender 
   */
  setSendersName(){
    this.sendersName = this.name.split(" ")[0]
  }

  
  /**
   * Put the form into a success state
   */
  setSuccess(){
    this.showError = false;
    this.showSuccess = true;
    this.alertClass = "alert-success"
  }

  /**
   * Put the form into an error state
   */
  setFail(){
    this.showError = true;
    this.showSuccess = false;
    this.alertClass = "alert-danger"
  }

  showTimeoutError(){
    console.log("Contact form timed out, show an error")
  }

  /**
   * Clear all contact form fields
   */
  clearForm(){
    this.email = ""
    this.name = ""
    this.message = ""
  }
}