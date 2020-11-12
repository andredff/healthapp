import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {}

  public login() {
    const toast = this.toastr.success('Usuário logado com sucesso!', 'Bem vindo!! :)');

    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/home']);
      });
    }
  }


}
