import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/users/profile.service';
import { WalletService } from 'src/app/services/users/wallet.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  transactions: any;
  totalRecord: any;
  p: number = 1;
  groupDate:any;
  groupTransactions:any;

  user: any;
  userRole: any;

  constructor(
    private walletService: WalletService,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      (user) => {
        this.user = user;
        this.userRole = this.user.role
      }
    );

    this.walletService.getAllTransaction().subscribe(
      (transactions) => {

        this.transactions = transactions;
        this.totalRecord = this.transactions.length


        this.transactions.sort(
          (a: any, b: any) => {
            let da = new Date(a.date).getTime();
            let db = new Date(b.date).getTime();

            return db - da
          }
        )
        console.log(this.transactions)

        // this gives an object with dates as keys
        const groups = this.transactions.reduce((groups:any, transactions:any) => {
          const date = transactions.date.split('T')[0];
          if (!groups[date]) {
            groups[date] = [];
          }
          groups[date].push(transactions);
          return groups;
        }, {});

        // Edit: to add it in the array format instead
        const groupArrays = Object.keys(groups).map((date) => {
          this.groupDate = date
          return {
            date,
            transactions: groups[date]
          };
        });
        
        this.groupTransactions = groupArrays
        console.log(this.groupTransactions);
      }
    );
  }

}
