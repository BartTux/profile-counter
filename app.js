import { Model } from './src/Models/Model.js';
import { View } from './src/Views/View.js';
import { Controller } from './src/Controllers/Controller.js';

const model = new Model();
const view = new View(document);

const controller = new Controller(model, view);
