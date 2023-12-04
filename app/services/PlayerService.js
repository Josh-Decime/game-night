import { AppState } from "../AppState.js";
import { player } from "../models/Player.js";

class PlayerService {
    addPlayer(newName, newPoints, newFun, newSnacks) {
        let createdPlayer = new player(newName, newPoints, newFun, newSnacks)
        AppState.players.push(createdPlayer)
    }

    gainPoints(playerName) {
        let selectedPlayer = AppState.players.find(player => player.name == playerName)
        console.log('selected to gain points', playerName, selectedPlayer)
    }
}

export const playerService = new PlayerService()