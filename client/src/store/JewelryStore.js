import {makeAutoObservable} from "mobx";

export default class JewelryStore {
  constructor() {
    this._types = [
      {id: 1, type: 'Eardrops'},
      {id: 2, type: 'Rings'},
      {id: 3, type: 'Prendants'},
      {id: 4, type: 'Bracelets'},
      {id: 5, type: 'Brooches'}
    ];

    this._jewelry = [
      {}
    ]
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }

  setJewelry(jewelry) {
    this._jewelry = jewelry
  }

  get types() {
    return this._types
  }

  get jewelry() {
    return this._jewelry
  }

}