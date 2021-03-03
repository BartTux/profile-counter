export class Model {
  constructor() {
    this.beams = JSON.parse(localStorage.getItem('beams')) || [];
  }

  addbeam(
    beamType, 
    amountOf, 
    beamLength,
    mainbeamLength,
    sawThickness
  ) {
    const beam = {
      id: this.beams.length > 0 
        ? this.beams[this.beams.id - 1].id + 1 
        : 1,
      beam_type: beamType,
      amount_of: amountOf,
      beam_length: beamLength,
      main_beam_length: mainbeamLength,
      saw_thickness: sawThickness
    }

    this.beams.push(beam);
    this._addBeamToLocalStorage(beam);
  }
  
  _addBeamToLocalStorage(beam) {
    localStorage.setItem('beams', JSON.stringify(beam));
  }
}