import { OwnerService } from './owner.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/Forms';


@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  owners;
  dataForm: FormGroup;
  private formBuilder: FormBuilder;




  constructor(private ownerService: OwnerService) {

  }

  ngOnInit() {
    this.dataForm = this.createDataFormGroup();

    this.ownerService.getOwners().subscribe(data => {
      this.owners = data;
    });
  }
  createDataFormGroup(){
    return new FormGroup({
      firstName: new FormControl(),
     lastName: new FormControl(),
     adress: new FormControl(),
      city: new FormControl(),
      telephone: new FormControl()
    })
  }
  sendDataForm(){
    const body = this.dataForm.value;
    this.ownerService.postOwner(body).subscribe(data=> {
      this.owners = data;

    })


  }
  // body = {
  //   "address": "string",
  //   "city": "string",
  //   "firstName": "prueba",
  //   "id": 10,
  //   "lastName": "string",
  //   "pets": [
  //     {
  //       "birthDate": "2019-07-04T07:28:07.741Z",
  //       "id": 0,
  //       "name": "string",
  //       "owner": {},
  //       "type": {
  //         "id": 0,
  //         "name": "string"
  //       },
  //       "visits": [
  //         {
  //           "date": "yyyy/MM/dd",
  //           "description": "string",
  //           "id": 0,
  //           "pet": {}
  //         }
  //       ]
  //     }
  //   ],
  //   "telephone": "string"
  // };
}
