import { AppState } from "../AppState.js";
import { player } from "../models/Player.js";
import { playerService } from "../services/PlayerService.js";


export class PlayerController {
    constructor() {
        console.log('Yay! Loaded Character Controller! Yay!')
        this.drawPlayer()
    }
    testFunction() {
        console.log('we are doing it!')
    }

    drawPlayer() {
        const players = AppState.players
        let content = ''
        players.forEach(player => content += player.playerTemplate())
        document.getElementById('player-list').innerHTML = content
    }

    addPlayers() {
        let newName = window.prompt('what is new players name?')
        let newPoints = window.prompt('what are your points at?')
        let newFun = window.prompt('whats your fun point at')
        let newSnacks = window.prompt('you have snacks? True or False?')
        playerService.addPlayer(newName, newPoints, newFun, newSnacks)
        this.drawPlayer()
    }
    gainPoints(player) {

    }



}