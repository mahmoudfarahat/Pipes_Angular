import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name! : string
  date!: string
amount! : number
height!:number
miles!:number

onHeightChange(event : Event){
  this.height = parseFloat((event.target as HTMLTextAreaElement).value)
    }
  onNameChange(event : Event){
this.name = (event.target as HTMLTextAreaElement).value
  }
  onDateChange(event : Event){
    this.date = (event.target as HTMLTextAreaElement).value
  }
  onAmountChange(event : Event){
    this.amount = parseFloat((event.target as HTMLTextAreaElement).value)
  }
  onMilesChange(event : Event){
    this.miles = parseFloat((event.target as HTMLTextAreaElement).value)
  }

}
