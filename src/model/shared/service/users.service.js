import _products from '../../react/component/container/development/user/api/products';

class UsersService {

  static getProducts(cb) {
    return fetch('http://localhost:10001/users').then(response => {
      response.json().then(
        r => {
          return cb(r);
        }
      );
    }).catch(error => {
      return error;
    });
  }

  static getAll() {
    return fetch('http://localhost:10001/users').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static update(user) {
    const request = new Request(`http://localhost:10001/users/${user.id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({cat: user})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static create(user) {
    const request = new Request('http://localhost:10001/users/', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({cat: user})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static remove(user) {
    const request = new Request(`http://localhost:10001/users/${user.id}`, {
      method: 'DELETE'
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default UsersService;
