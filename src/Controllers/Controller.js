/**
 * @class Controller 
 * 
 * Links the user input and view output.
 * 
 * @param model object represent by Model class 
 * @param view object represent by View class
 */
export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
}