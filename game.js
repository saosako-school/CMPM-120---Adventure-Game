class Hallway extends AdventureScene {
    constructor() {
        super('hallway', 'Hallway');
    }

    preload() {
        this.load.image('doorPlaceholder', 'images/Placeholders/placeholderDoor.png');
        this.load.image('upButtonPlaceholder', 'images/Placeholders/triangle.png');
    }

    onEnter() {
        let mathDoor = this.doorAdd(this.w*0.3, this.w*0.3, 'doorPlaceholder', 0.08, 'math classroom');
        let englishDoor = this.doorAdd(this.w*0.1, this.w*0.1, 'doorPlaceholder', 0.08, 'english classroom');
        let chemDoor = this.doorAdd(this.w*0.2, this.w*0.2, 'doorPlaceholder', 0.08, 'chemistry classroom');
        let orchDoor = this.doorAdd(this.w*0.4, this.w*0.4, 'doorPlaceholder', 0.08, 'orchestra classroom');

        let tester = this.add.image(this.w*0.6, this.w*0.6, 'upButtonPlaceholder')
        .setScale(0.8)
        .setInteractive()
        .on('pointerdown', () => {
            let val1 = 0;
            let val2 = 0;
            let val3 = 0;

            let codeInput = this.add.text(this.w * 0.1, this.w * 0.1, `${val1} ${val2} ${val3}`, {font: '400px Arial'});
            let up1 = this.add.image(this.w * 0.15, this.w * 0.1, 'upButtonPlaceholder')
            .setScale(0.04)
            .setInteractive()
            .on('pointerdown', () => {
                if (val1 == 9){
                    val1 = 0;
                }
                else{
                    val1 += 1;
                }
                codeInput.setText(`${val1} ${val2} ${val3}`);
            });
            
            let up2 = this.add.image(this.w * 0.33, this.w * 0.1, 'upButtonPlaceholder')
            .setScale(0.04)
            .setInteractive()
            .on('pointerdown', () => {
                if (val2 == 9){
                    val2 = 0;
                }
                else{
                    val2 += 1;
                }
                codeInput.setText(`${val1} ${val2} ${val3}`);
            });

            let up3 = this.add.image(this.w * 0.5, this.w * 0.1, 'upButtonPlaceholder')
            .setScale(0.04)
            .setInteractive()
            .on('pointerdown', () => {
                if (val3 == 9){
                    val3 = 0;
                }
                else{
                    val3 += 1;
                }
                codeInput.setText(`${val1} ${val2} ${val3}`);
            });
        });
    }
}

class MathClassroom extends AdventureScene {
    constructor() {
        super('math classroom', 'MathClassroom');
    }

    preload() {
        this.load.image('doorPlaceholder', 'images/Placeholders/placeholderDoor.png');
    }

    onEnter() {
        let hallway = this.doorAdd(this.w*0.3, this.w*0.3, 'doorPlaceholder', 0.08, 'hallway');
    }
}

class EnglishClassroom extends AdventureScene {
    constructor() {
        super('english classroom', 'EnglishClassroom');
    }

    preload() {
        this.load.image('doorPlaceholder', 'images/Placeholders/placeholderDoor.png');
    }

    onEnter() {
        let hallway = this.doorAdd(this.w*0.3, this.w*0.3, 'doorPlaceholder', 0.08, 'hallway');
    }
}

class ChemClassroom extends AdventureScene {
    constructor() {
        super('chemistry classroom', 'ChemClassroom');
    }

    preload() {
        this.load.image('doorPlaceholder', 'images/Placeholders/placeholderDoor.png');
    }

    onEnter() {
        let hallway = this.doorAdd(this.w*0.3, this.w*0.3, 'doorPlaceholder', 0.08, 'hallway');
    }
}

class OrchestraClassroom extends AdventureScene {
    constructor() {
        super('orchestra classroom', 'OrchestraClassroom');
    }

    preload() {
        this.load.image('doorPlaceholder', 'images/Placeholders/placeholderDoor.png');
    }

    onEnter() {
        let hallway = this.doorAdd(this.w*0.3, this.w*0.3, 'doorPlaceholder', 0.08, 'hallway');
    }
}

/*class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "First Room");
    }

    onEnter() {

        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('demo2');
                }
            })

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('demo1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}

*/
const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Hallway, MathClassroom, EnglishClassroom, ChemClassroom, OrchestraClassroom],
    title: "Adventure Game",
});

