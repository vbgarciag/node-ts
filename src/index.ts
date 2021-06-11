import App from './app';

function runApp() {
    const app = new App(3001);
    app.listen();
}

runApp();