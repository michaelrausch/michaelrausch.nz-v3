import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export type ContactFormResponseHandler = (response: ContactFormResponse) => void;

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  MESSAGE_SEND_TIMEOUT = 5000;

  constructor(private http: HttpClient) { }

  /**
   * Sends a message to the contact form API
   * 
   * @param name The senders name
   * @param fromEmail The senders email
   * @param message The senders message
   * @param api The API URL
   * @param handler Called when the request is complete
   */
  sendMessage(name: string, fromEmail: string, message: string, api: string, handler: ContactFormResponseHandler) {
    var formData: FormData = this.generateFormData(name, fromEmail, message)

    var formResponse: ContactFormResponse = {
      status: ResponseStatus.OK,
      errorMessage: ""
    }

    this.http.post(api, formData, {responseType: 'text'})
    .subscribe((response) => {
      // Is this really needed @todo check API docs
      if (response && response === "Validation Error") {
        formResponse.errorMessage = "Validation Error";
        formResponse.status = ResponseStatus.VALIDATION_ERROR;
      }
      else{
        formResponse.errorMessage = "";
        formResponse.status = ResponseStatus.OK;
      }

      return handler(formResponse);
    }, (err) => {
      formResponse.status = ResponseStatus.SERVER_ERROR;

      if (err.status === 429) {
        formResponse.status = ResponseStatus.RATE_LIMIT_ERROR;
        formResponse.errorMessage = "You have submitted too many requests, please try again later.";
      }

      if (err.status === 400) {
        formResponse.status = ResponseStatus.VALIDATION_ERROR;
        formResponse.errorMessage = "Validation Error"
      }

      return handler(formResponse);
    })
  }

  /**
   * Generates a FormData object for the given parameters
   * 
   * @param name The senders name
   * @param email The senders email
   * @param message The senders message
   */
  private generateFormData(name: string, email: string, message: string) : FormData{
    let formData: FormData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    return formData;
  }
}

export interface ContactFormResponse {
  errorMessage: string;
  status: ResponseStatus;
}

export enum ResponseStatus {
  OK, // Message was sent
  VALIDATION_ERROR, // The message was invalid
  RATE_LIMIT_ERROR, // Too many messages have been sent, try again later
  SERVER_ERROR, // There was a server error
}