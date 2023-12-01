import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent {
show_review_popup:boolean=false;
  clickProfilereview(){
    this.show_review_popup= !this.show_review_popup;
  }
  hide_popup(){
    this.show_review_popup= false;
  }
  textInput: string = '';
  characterCount: number = 0;

  onInputChange(value: string) {
    // Calculate the character count
    this.characterCount = value.length;
  }
}
