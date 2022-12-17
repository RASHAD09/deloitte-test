import { strings } from '../localization';

export class UserController {
  

  login({ username ,date,number}) {
    console.log('number inside login', number)
   
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username ) {
            resolve({ data: { user: { username ,date ,number }} });
          } else {
            reject({ data: { error: strings.login.invalidCredentials } });
          }
        }, 250);
      });


    
  }

  logout({  } = {}) {

      return new Promise((resolve) => {
        setTimeout(resolve, 250);
      });

  
  }
}
