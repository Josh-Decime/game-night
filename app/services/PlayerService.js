import { AppState } from "../AppState.js";
import { player } from "../models/Player.js";

class PlayerService {
    addPlayer(newName, newPoints, newFun, newSnacks) {
        let createdPlayer = new player(newName, newPoints, newFun, newSnacks)
        AppState.players.push(createdPlayer)
    }
}

export const playerService = new PlayerService()