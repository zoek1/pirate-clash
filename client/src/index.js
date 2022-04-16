import Phaser from 'phaser';
import settings from './settings';
import GameScene from './scenes/Game';

new Phaser.Game(
    Object.assign(settings, {
        scene: [
            GameScene
        ]
    })
);