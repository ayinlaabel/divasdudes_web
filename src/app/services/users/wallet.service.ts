import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WebRequestService } from '../web-request/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(
              private webReqService: WebRequestService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  getWallet() {
    return this.webReqService.get('wallet');
  }


  getAllTransaction() {
    return this.webReqService.get('wallet/allTransactions')
  }
}
