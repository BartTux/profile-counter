export class Model {
  constructor(
    profileType = null, 
    amountOf = null, 
    profileLength = null,
    mainProfileLength = null,
    sawThickness = null,
  ) {
    this.profileType = profileType;
    this.amountOf = amountOf;
    this.profileLength = profileLength;
    this.mainProfileLength = mainProfileLength;
    this.sawThickness = sawThickness;
  }

  getProfileType() {
    return this.profileType
  }

  getAmountOf() {
    return this.amountOf;
  }

  getProfileLength() {
    return this.profileLength;
  }

  getMainProfileLength() {
    return this.mainProfileLength;
  }

  getSawThickness() {
    return this.sawThickness;
  }

  setProfileType(profileType) {
    this.profileType = profileType;
  }

  setAmountOf(amountOf) {
    this.amountOf = amountOf;
  }

  setProfileLength(profileLength) {
    this.profileLength = profileLength;
  }

  setMainProfileLength(mainProfileLength) {
    this.mainProfileLength = mainProfileLength;
  }

  setSawThickness(sawThickness) {
    this.sawThickness = sawThickness;
  }
}