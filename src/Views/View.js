export class View {
  constructor(document) {
    this.document = document;
    this.form = this._getElement('#form');

    this.addButton = this._getElement('#add_button');
    this.submitButton = this._getElement('#submit_button');
    this.tableBody = this._getElement('#beam_table_body');
    this.formInputs = this._getElements('.form__input');
  }

  _createElement(elementName) {
    return this.document.createElement(elementName);
  }

  _getElement(elementName) {
    return this.document.querySelector(elementName);
  }

  _getElements(elementsName) {
    return this.document.querySelectorAll(elementsName);
  }
}
