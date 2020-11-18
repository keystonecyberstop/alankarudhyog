import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReceiptService } from 'src/app/Services/receipt.service';

@Component({
  selector: 'app-add-receipt',
  templateUrl: './add-receipt.component.html',
  styleUrls: ['./add-receipt.component.css']
})
export class AddReceiptComponent implements OnInit {

  alert: boolean = false;

  addReceipt = new FormGroup({
    receipt_no: new FormControl(''),
    receipt_date: new FormControl(''),
    paymode: new FormControl(''),
    party: new FormControl(''),
    party_address: new FormControl(''),
    party_mobile: new FormControl(''),
    amount: new FormControl(''),
    remark: new FormControl(''),

  });

  valuedate = new Date();

  minDate: Date;
  maxDate: Date;
      constructor(private receiptService:ReceiptService) {
        this.minDate = new Date();
        this.maxDate = new Date();
        this.minDate.setDate(this.minDate.getDate() - 15000);
        this.maxDate.setDate(this.maxDate.getDate());

      }
      getValues() {
        // console.warn(this.addReceipt.value);
       this.receiptService.saveReceipt(this.addReceipt.value).subscribe((result)=>{
         this.alert=true
       })
       this.addReceipt.reset({})
     }
     closeAlert()
     {
       this.alert = false;
     }

  ngOnInit(): void {
  }

}
