import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

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

  sendersName: string = ""; // The senders name, retained after the form is cleared
  
  /*
  * Form State
  */
  showError = false;
  showSuccess = false;
  showValidationError = false;
  sendingMessage = false;
  alertClass = "alert-success"

  MESSAGE_TIMEOUT = 5000;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
    this.sendingMessage = true;
    this.showValidationError = false;
    this.showError = false;
    
    this.setSendersName();
    this.startTimeout();

    this.http.post<ContactFormResponse>(environment.api_url, {
      fromEmail: this.email,
      name: this.name,
      message: this.message
    }).subscribe((response) => {

      if (response.error && response.result === "Validation Error") {
        this.showValidationError = true;
        this.setFail()
      }
      else{
        this.setSuccess()
        this.clearForm()  
      }

      this.sendingMessage = false
    }, () => {
      this.setFail();
      this.sendingMessage = false
    })
  }

  /**
   * Set *sendersName* to the first name of the sender 
   */
  setSendersName(){
    this.sendersName = this.name.split(" ")[0]
  }

  startTimeout(): any {
    setInterval(function(){
      if (this.sendingMessage) this.showTimeoutError()
    }, this.MESSAGE_TIMEOUT)
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

interface ContactFormResponse{ 
  error: boolean;
  result: string;
}