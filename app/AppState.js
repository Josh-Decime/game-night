import { player } from './models/Player.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []



  players = [
    new player('Wizzy', '9000', '90000', false),
    new player('Shrock', '8500', '95000', true),
    new player('Hopeful McGee the 2nd', '100000', '500', false)

  ]
















}

export const AppState = createObservableProxy(new ObservableAppState())
console.log('AppState code', AppState)