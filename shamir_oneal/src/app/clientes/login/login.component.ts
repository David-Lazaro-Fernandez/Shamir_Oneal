import { Component } from '@angular/core';
import { NativeBiometric } from 'capacitor-native-biometric';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  email : string = ""
  password : string = ""

  constructor(private cliente : ClienteService){
    
  }

  login(){
    this.cliente.login(this.email, this.password).subscribe(res=>{
      console.log(res)
    })
  }


  async performBiometricVerificatin() {
    const result = await NativeBiometric.isAvailable();

    if (!result.isAvailable) return;

    //const isFaceID = result.biometryType == BiometryType.FACE_ID;

    const verified = await NativeBiometric.verifyIdentity({
      reason: 'For easy log in',
      title: 'Log in',
      subtitle: 'Maybe add subtitle here?',
      description: 'Maybe a description too?',
    })
      .then(() => true)
      .catch(() => false);

    if (!verified) return;

    const credentials = await NativeBiometric.getCredentials({
      server: 'www.example.com',
    });
  }

  saveCredentials = () => {
    // Save user's credentials
    NativeBiometric.setCredentials({
      username: 'username',
      password: 'password',
      server: 'www.example.com',
    }).then();
  };

  deleteCredentials = () => {
    // Delete user's credentials
    NativeBiometric.deleteCredentials({
      server: 'www.example.com',
    }).then();
  };
}
