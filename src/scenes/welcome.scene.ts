import * as Phaser from "phaser";

export class WelcomeScene extends Phaser.Scene {

    // noinspection JSUnusedGlobalSymbols
    create() {

        this.add.text(540, 800, "YOU'RE NOT SUPPOSED TO BE HERE. GO AWAY", {
            fontSize: "48px",
            fontFamily: "Arial",
            color: "#000000",
            align: "left",
            wordWrap: {
                useAdvancedWrap: true,
                width: 700
            }
        }).setOrigin(0.5);

        this.add.text(575, 870, "- LEVELORD", {
            fontSize: "48px",
            fontFamily: "Arial",
            color: "#000000"
        });
    }
}
