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
  sendingMessage = false;

  MESSAGE_TIMEOUT = 5000;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
    this.sendingMessage = true;
    this.setSendersName();
    this.startTimeout();

    this.http.post(environment.api_url, {
      ReturnEmail: this.email,
      ReturnName: this.name,
      Message: this.message
    }).subscribe(() => {
      this.setSuccess()
      this.clearForm()
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
  }

  /**
   * Put the form into an error state
   */
  setFail(){
    this.showError = true;
    this.showSuccess = false;
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
