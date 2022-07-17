import Phaser from 'phaser';
import { GameConfig } from './config';
import { DemoScene } from './scenes/demo';

new Phaser.Game(
  Object.assign(GameConfig, {
    scene: [DemoScene]
  })
);
