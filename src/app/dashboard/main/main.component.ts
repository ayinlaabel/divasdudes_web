import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/users/profile.service';
import { WalletService } from 'src/app/services/users/wallet.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  balance = 0;
  wallet:any
  date:any;
  time:any;
  ref:any;
  paymentDueDate:any;

  constructor(
              private profileService: ProfileService,
              private route: ActivatedRoute,
              private walletService: WalletService) { }

  ngOnInit(): void {
    
    this.profileService.getDueDate().subscribe(
      (date)=>{
        let d = Object(date)
        let timeNow = Date.now()
        let t = new Date(d.date)
        // let start = new Date(timeNow.getDate())
        let getTime = (t.getTime() - timeNow)/ (1000 * 3600 * 24)
        // let remainingDays
        let s = parseInt(getTime.toString())
        console.log(s);
        if(getTime >= 2){
          this.paymentDueDate = `${s} Days`
          
        }
        if(getTime >= 1){

          this.paymentDueDate = `${s} Day`
        }

        if(getTime < 1){
          this.paymentDueDate = s
        }
        // console.log(timeNow)

        // this.paymentDueDate = remainingDays
      }
    )
    // const options = { year: 'numeric', month: 'long', day: 'numeric' }
    this.balance;
    this.date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
      return this.time
    }, 1000)

    this.route.queryParams.subscribe(params => {
      // console.log(params['reference'])

        this.ref = params['reference'];

      return this.ref
    });
    // let ref = this.ref
    // this.profileService.getSuccessPay(ref:string)

    // console.log(this.ref);


    this.walletService.getWallet().subscribe(
      (wallet)=> {
        console.log(wallet)
        // let myWalet = wallet
        this.wallet = wallet
        this.balance = this.wallet.balance
      }
    )



  }


}
