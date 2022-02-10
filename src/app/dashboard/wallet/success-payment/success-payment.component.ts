import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebRequestService } from 'src/app/services/web-request/web-request.service';

@Component({
  selector: 'app-success-payment',
  templateUrl: './success-payment.component.html',
  styleUrls: ['./success-payment.component.scss']
})
export class SuccessPaymentComponent implements OnInit {

  constructor(
              private webReqService: WebRequestService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // console.log(params['reference'])

        let rrr = params['reference'];
        console.log(rrr)
        return this.webReqService.pay('payment/ref', {rrr}).subscribe(
          ()=> {
            return rrr;
          }
        )
    });
  }

  getSuccessPay(rrr: any){
  

    
  }


}

