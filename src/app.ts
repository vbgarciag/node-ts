import express, { Application } from "express";
import AppRoutes from './routes/index.routes';

export default class App {
    private app: Application;

    constructor(private port?: number) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    routes() {
        this.app.use('/api/v1', AppRoutes);
    }

    listen() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Process running on port: ${this.app.get('port')}`);
        });
    }
}