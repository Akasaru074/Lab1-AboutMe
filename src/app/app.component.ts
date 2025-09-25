import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lab1-AboutMe';


  ngOnInit(): void {
    const interval = setInterval(()=>{
      this.currentPrinted += this.myName[this.offsetIndex++];
      if (this.offsetIndex >= this.offsets.length) clearInterval(interval);
    }, 250);
  }

  offsets = [0.15, 3.35, 6.7, 10.1, 13.3, 16.65, 19.94, 23.25, 26.55, 29.75, 33.15, 36.45, 39.85];
  offsetIndex = 0;

  currentPrinted = "";
  private myName = "Иван Морозов ";

  


}
