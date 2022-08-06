import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private snack: MatSnackBar) { }

  public user = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
  };

  ngOnInit(): void {
  }

  clearAll() {
    console.log("clearAll called");
  }


  formSubmit() {
    console.log(this.user);

    if (this.user.username == '' || this.user.username == null) {
      // alert("Username is required");
      this.snack.open("Username is required !! ", "", {
        duration: 3000
      });
      return;
    }

    //addUser: userservice

    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire('Successfully done !!', 'user id registered with id : ' + data.id, 'success');
        // alert("User added succesfully");

      },
      (error) => {
        console.log(error);
        // alert("Something went wrong");
        this.snack.open('something went wrong !!', '', { duration: 3000 })

      }
    )

  }

}
