let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:4000';
        break;
    case 'lrs-bike-client.herokuapp.com':
        APIURL = 'https://lrs-bike-client.herokuapp.com'
}

export default APIURL;