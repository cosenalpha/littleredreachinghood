/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/ELfWsWKD
 *
 * This source requires Phaser 2.6.2
 */

var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.stage.backgroundColor = '#fce8d2';

    //game.load.baseURL = 'http://examples.phaser.io/assets/';
    game.load.crossOrigin = 'anonymous';

	game.load.image('mela', 'sprites/mela.png');
	game.load.image('vite', 'sprites/vite.png');
	game.load.image('riquadro_2', 'sprites/riquadro_2.png');
	game.load.image('tempo', 'sprites/tempo.png');
	//game.load.spritesheet('tempo', 'sprites/linea_tempo.png', 1027, 116, 20);
}

var oggetto_da_raccogliere;
var life;
var label_2;
var tempo;
var riquadro_2;

function create() {

    game.world.setBounds(0, 0, 5700, 768);
	
	tempo = game.add.sprite(20, 20, 'tempo');
	tempo.fixedToCamera = true;
	
	//tempo.animations.add('linea_tempo', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
	//tempo.animations.play('linea_tempo', 20, true);
	//tempo.fixedToCamera = true;
	
	riquadro_2 = game.add.sprite(680, 20, 'riquadro_2');//riquadro per le vite
	riquadro_2 = game.add.sprite(850, 20, 'riquadro_2');//riquadro per oggetti
	riquadro_2. fixedToCamera = true;
	
	oggetto_da_raccogliere = game.add.sprite(950, 30, 'mela')
	oggetto_da_raccogliere. fixedToCamera = true;
	
	label_2 = game.add.text(880, 35, "0/10", { fill: "#646363" })//uso stesso grigio del lupo
	label_2.fixedToCamera = true;
	
	life = game.add.sprite(695, 30, 'vite');
	life.fixedToCamera = true;
	
}

function update () {
	
	
}
	

function render () {

}
