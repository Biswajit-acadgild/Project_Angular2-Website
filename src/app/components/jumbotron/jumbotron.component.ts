import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  private jbtHeading:string;
   private jbtText:string;
   private jbtBtnText:string;
   private jbtBtnUrl:string;

  constructor() { 

       this.jbtHeading="Tourism in India";
       this.jbtText = "Tourism in India is economically important and is growing rapidly. The World Travel & Tourism Council calculated that tourism generated ₹14.02 lakh crore (US$210 billion) or 9.6% of the nation's GDP in 2016 and supported 40.343 million jobs, 9.3% of its total employment. The sector is predicted to grow at a rate of 6.8% to ₹28.49 lakh crore (US$420 billion) by 2027 (10% of GDP).";
       this.jbtBtnText = "Read More";
       this.jbtBtnUrl= 'https://en.wikipedia.org/wiki/Tourism_in_India';

  }

  ngOnInit() {
  }

}
