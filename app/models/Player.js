

export class player {
    name
    points
    funScore
    snacks

    constructor(setName, setPoints, setFunscore, setSnacks) {
        console.log('build player', setName, setPoints, setFunscore, setSnacks)
        this.name = setName
        this.points = setPoints
        this.funScore = setFunscore
        this.snacks = setSnacks
        this.welcome()
    }

    welcome() {
        console.log(`hello, my name is ${this.name} & I am ready for games!`)
    }

    playerTemplate() {
        return `
        <div class="col-4 border bg-primary shadow rounded text-center">
        <h3>${this.name}</h3>
        <h4>${this.points}</h4>
        <h4>${this.funScore}</h4>
        <h4>${this.snacks}</h4>
        <button onclick="app.PlayerController.gainPoints('${this.name}')" class="btn btn-dark mdi mdi-plus-box"></button>
        <button onclick="app.PlayerController.losePoints('${this.name}')" class="btn btn-dark mdi mdi-minus-box"></button>
      </div>
        `
    }
}