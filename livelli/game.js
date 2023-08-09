/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/ELfWsWKD
 *
 * This source requires Phaser 2.6.2
 */

var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.stage.backgroundColor = '#9ccadc';

    //game.load.baseURL = 'http://examples.phaser.io/assets/';
    game.load.crossOrigin = 'anonymous';

    //game.load.spritesheet('corsa', 'spritesaria/cappuccetto1.png', 310, 565, 30);
	game.load.spritesheet('cappuccetto', 'spritesbosco/frame.png', 409, 250, 61);

	game.load.image('platform', 'spritesacqua/platform.png'); //SPRITES LIVELLO 1
    game.load.spritesheet('jellyfish', 'spritesacqua/altramedusina.png', 57, 104, 10);
    game.load.image('succo', 'spritesacqua/lattino.png');
	game.load.image('water', 'spritesacqua/acqua.png');
    game.load.image('bubble', 'spritesacqua/bolla.png');
    game.load.image('fishsx', 'spritesacqua/pesce.png');
    game.load.image('fishdx', 'spritesacqua/pesce1.png');
    game.load.image('reti', 'spritesacqua/amo.png');
    game.load.image('wire', 'spritesacqua/filo.png');
    game.load.image('waves', 'spritesacqua/sfondo1.png');
    game.load.image('piattaformina', 'spritesacqua/piattaforma5.png');
    game.load.image('unapiattaforma', 'spritesacqua/unapiattaforma.png');
    game.load.image('platform1', 'spritesacqua/piattaforma1.png');
    game.load.image('platform2', 'spritesacqua/piattaforma2.png');
    game.load.image('platform3', 'spritesacqua/piattaforma3.png');
    game.load.image('platform4', 'spritesacqua/piattaforma4.png');
	game.load.image('lattino', 'spritesacqua/latte.png');
	game.load.image('cartellone1', 'spritesacqua/cartello1.png');
	game.load.image('cartellone2', 'spritesacqua/cartello2.png');
	game.load.image('cartellone3', 'spritesacqua/cartello3.png');
	game.load.image('cartellone4', 'spritesacqua/cartello4.png');
	game.load.image('cartellone5', 'spritesacqua/cartello5.png');


	game.load.image('nuvolona1', 'spritesaria/nuvole/nuvolona.png'); //SPRITES LIVELLO 2
	game.load.image('nuvolona2', 'spritesaria/nuvole/nuvolona2.png');
    game.load.image('nuvola1', 'spritesaria/nuvole/nuvola1.png');
	game.load.image('nuvola2', 'spritesaria/nuvole/nuvola2.png');
	game.load.image('temporale', 'spritesaria/nuvole/temporale.png');
	game.load.image('mela', 'spritesaria/mela.png');
	game.load.spritesheet('gabbiani', 'spritesaria/gabbiani1.png', 101.27, 77, 10);
	game.load.image('sfondoaria', 'spritesaria/sfondo.png');
	game.load.image('cartello', 'spritesaria/cartello.png');
	game.load.image('cartelloo', 'spritesaria/cartelloo.png');
	game.load.image('cartellone6', 'spritesaria/cartello1.png');
	game.load.image('cartellone7', 'spritesaria/cartello2.png');
	game.load.image('cartellone8', 'spritesaria/cartello3.png');
	game.load.image('cartellone9', 'spritesaria/cartello4.png');
	game.load.image('cartellone10', 'spritesaria/cartello5.png');
	game.load.spritesheet('door', 'spritesaria/portale1.png', 266, 266, 16);

	game.load.spritesheet('ricci', 'spritesbosco/riccio.png', 90.8, 68, 9);//SPRITES LIVELLO 3
    game.load.image('piattaforma1', 'spritesbosco/terrenoo1.png');//terreno
	game.load.image('piattaforma2', 'spritesbosco/terrenoo2.png')
    game.load.image('torta', 'spritesbosco/torta.png')//pezzi di torta da raccogliere
	game.load.image('rametto1', 'spritesbosco/rami/rametto1.png')//rami corti
	game.load.image('rametto2', 'spritesbosco/rami/rametto2.png')
	game.load.image('rametto3', 'spritesbosco/rami/rametto3.png')
	game.load.image('rametto4', 'spritesbosco/rami/rametto4.png')
	game.load.image('ramo1', 'spritesbosco/rami/ramo1.png')//rami lunghi
	game.load.image('ramo2', 'spritesbosco/rami/ramo2.png')//rami medi
	game.load.image('ramo3', 'spritesbosco/rami/ramo3.png')
	game.load.image('ramof', 'spritesbosco/rami/ramof.png')//rami che cadono
	game.load.image('ramof2', 'spritesbosco/rami/ramof2.png')
	game.load.image('ramof3', 'spritesbosco/rami/ramof3.png')
	game.load.image('ramof4', 'spritesbosco/rami/ramof4.png')
	game.load.image('ramettof1', 'spritesbosco/rami/ramettof1.png')//rami piccoli che cadono
	game.load.image('ramettof2', 'spritesbosco/rami/ramettof2.png')
	game.load.image('ramettof3', 'spritesbosco/rami/ramettof3.png')
	game.load.image('sfondobosco', 'spritesbosco/sfondo.png')
	game.load.image('cartellone11', 'spritesbosco/cartello1.png');
	game.load.image('cartellone12', 'spritesbosco/cartello2.png');
	game.load.image('cartellone13', 'spritesbosco/cartello3.png');
	game.load.image('cartellone14', 'spritesbosco/cartello4.png');
	game.load.image('casetta', 'spritesbosco/casetta.png');


	game.load.image('vite', 'spritesaria/interfaccia/vite.png'); //SPRITES INTERFACCIA
	game.load.image('riquadro_2', 'spritesaria/interfaccia/riquadro_2.png');
	game.load.image('riquadro_3', 'spritesaria/interfaccia/riquadro_3.png');
	game.load.image('riquadro_1', 'spritesaria/interfaccia/riquadro_1.png');
	game.load.image('riquadrone_1', 'spritesaria/interfaccia/riquadro_grande1.png');
	game.load.image('riquadrone_2', 'spritesaria/interfaccia/riquadro_grande2.png');
	game.load.image('riquadrone_3', 'spritesaria/interfaccia/riquadro_grande3.png');
	//game.load.image('tempo', 'spritesaria/interfaccia/tempo.png');
	game.load.spritesheet('tempo', 'spritesaria/interfaccia/linea_tempo.png', 1080, 120.43, 20);
	//game.load.bitmapFont('PoorRichard', 'assets/Fontesque-Bold/Fontesque-Bold.png', 'assets/Fontesque-Bold/Fontesque-Bold.xml');
	game.load.bitmapFont('PoorRichard', 'assets/PoorRichard/PoorRichard.png', 'assets/PoorRichard/PoorRichard.xml');

	game.load.image('sconfitta1', 'finali/sconfitta1.jpg'); //FINALI
	game.load.image('sconfitta2', 'finali/sconfitta2.jpg');
	game.load.image('vittoria0', 'finali/vittoria0.jpg');
	game.load.image('vittoria1', 'finali/vittoria1.jpg');

}

var initialTime;
var player;
var nuvole, terreno, temporale, rami, fakeplatforms, aplatforms, platforms1, platforms2, platforms3, platforms4; //PIATTAFORME
var bordo, bordo2, platformfissa;
var disabledKeys = true; //
var numero = 1; //
var filosale = false;
var funzionante = true;
var rete1, rete2, rete3;

var cursors;
var jumpButton;
var gabbiani, ricci, medusa, retipesca; //NEMICI
var mela, torta, succo; //OGGETTI DA RACCOGLIERE
var fine;
var filo1, filo2, filo3;
var p, g, n, m; //lettere a caso che altrimenti da errore
var label;
var countDown = 100;
//CARTELLI
var cartelli;
var tempo;
var cartellone1, cartellone2, cartellone3, cartellone4, cartellone5, cartellone6, cartellone7, cartellone8, cartellone9, cartellone10, cartellone11, cartellone12, cartellone13, cartellone14;
var  bolle, pesci; //SFONDI
//INTERFACCIA
var vita1, vita2, vita3;
var torta_interfaccia, mela_interfaccia, succo_interfaccia;
var riquadro11, riquadro12, riquadro21, riquadro22, riquadro31, riquadro32, riquadrone1, riquadrone2, riquadrone3;
var noggetti = 0, nmele = 0, nsucchi = 0, ntorte = 0; //contatori di oggetti
var label_mele, label_torte, label_succhi;


var sconfitta1, sconfitta2;
var vittoria0, vittoria1;

function create() {

    game.world.setBounds(0, 0, 12000, 6000);

	//LIVELLO 1!!!


	bolle = game.add.physicsGroup();
	pesci = game.add.physicsGroup();
	pesci.create(1195, 1788, 'fishdx');
	pesci.create(1367, 1454, 'fishdx');
	pesci.create(2288, 1562, 'fishdx');
	pesci.create(2344, 1454, 'fishdx');
	pesci.create(2264, 1374, 'fishdx');
    pesci.create(242, 1408, 'fishsx');
    pesci.create(305, 1974, 'fishsx');
    pesci.create(1024, 1818, 'fishsx');
    pesci.create(1488, 1488, 'fishsx');
	pesci.create(1548, 1385, 'fishsx');
	pesci.scale.setTo(0.7)
	bolle.create(133, 1588, 'bubble');
	bolle.create(628, 1950, 'bubble');
	bolle.create(1966, 1966, 'bubble');
	bolle.create(3114, 1913, 'bubble');
	bolle.create(2860, 1565, 'bubble');
	bolle.scale.setTo(0.6);
	game.add.sprite(81.3, 818, 'waves');
	game.add.sprite(444, 568, 'piattaformina');

	cartelli = game.add.physicsGroup();
	cartelli.create(164, 1293, 'cartello');
	cartelli.create(433, 1230, 'cartello');
	cartelli.create(1264, 1326, 'cartello');
	cartelli.create(1930, 1236, 'cartello');
	cartelli.create(5533, 1211, 'cartello');

	game.add.sprite(-31, 1354, 'unapiattaforma');


	bordo = game.add.sprite(-30, 1600, 'platform');
	bordo.alpha = 0;
	game.physics.enable([bordo], Phaser.Physics.ARCADE);
	bordo.body.immovable = true;
	//bordo2 = game.add.sprite(300, 674, 'platform');
	//bordo2.alpha = 0;
	//game.physics.enable([bordo2], Phaser.Physics.ARCADE);
	//bordo2.body.immovable = true;

	medusa = game.add.physicsGroup();
    m = medusa.create(511, 1041, 'jellyfish');
	m.body.velocity.y = 130;
	m.sotto = 1040;
	m.sopra = 800;
    m.animations.add('medusagiu', [1, 3, 5, 7, 9]);
    m.animations.play('medusagiu', 10, true);
	m = medusa.create(800, 1393, 'jellyfish');
	m.body.velocity.y = 130;
	m.sotto = 1600;
	m.sopra = 1100;
    m.animations.add('medusagiu', [1, 3, 5, 7, 9]);
    m.animations.play('medusagiu', 10, true);
	m = medusa.create(1113, 957, 'jellyfish');
    m.body.velocity.y = 130;
	m.sotto = 1100;
	m.sopra = 790;
    m.animations.add('medusagiu', [1, 3, 5, 7, 9]);
    m.animations.play('medusagiu', 10, true);
	m = medusa.create(2804, 1021, 'jellyfish');
    m.body.velocity.y = 130;
	m.sotto = 1050;
	m.sopra = 905;
    m.animations.add('medusagiu', [1, 3, 5, 7, 9]);
    m.animations.play('medusagiu', 10, true);
	m = medusa.create(3059, 949, 'jellyfish');
    m.body.velocity.y = 130;
	m.sotto = 1021;
	m.sopra = 759;
    m.animations.add('medusagiu', [1, 3, 5, 7, 9]);
    m.animations.play('medusagiu', 10, true);
	m = medusa.create(3500, 1521, 'jellyfish');
    m.body.velocity.y = 130;
	m.sotto = 1554;
	m.sopra = 1337;
    m.animations.add('medusagiu', [1, 3, 5, 7, 9]);
    m.animations.play('medusagiu', 10, true);
	m = medusa.create(4417, 1462, 'jellyfish');
    m.body.velocity.y = 130;
	m.sotto = 1618;
	m.sopra = 1302;
    m.animations.add('medusagiu', [1, 3, 5, 7, 9]);
    m.animations.play('medusagiu', 10, true);
	m = medusa.create(4596, 1410, 'jellyfish');
    m.body.velocity.y = 130;
	m.sotto = 1566;
	m.sopra = 1250;
    m.animations.add('medusagiu', [1, 3, 5, 7, 9]);
    m.animations.play('medusagiu', 10, true);
	m = medusa.create(5297, 847, 'jellyfish');
    m.body.velocity.y = 130;
	m.sotto = 928;
	m.sopra = 716;
    m.animations.add('medusagiu', [1, 3, 5, 7, 9]);
    m.animations.play('medusagiu', 10, true);



	fine = game.add.sprite(5700, 1091, 'door'); //5700, 1091
	fine.scale.setTo(0.7);
    game.physics.enable([fine], Phaser.Physics.ARCADE);
    fine.body.setSize(15, 15, 200, 66);
    fine.animations.add('rotate', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    fine.animations.play('rotate', 10, true);

	succo = game.add.physicsGroup();
    succo.create(2226, 1167, 'succo'); //
    succo.create(4027, 958, 'succo');
	succo.create(5558, 861, 'succo');
    succo.create(5130, 1510, 'succo'); //
    succo.create(3538, 1492, 'succo');
    game.physics.arcade.enable(succo);



	//LIVELLO 2!!!

	sfondoaria = game.add.sprite(-300, 1600, 'sfondoaria');

	fine = game.add.sprite(9700, 2300, 'door'); //PORTALE
    fine.scale.setTo(0.7);
    game.physics.enable([fine], Phaser.Physics.ARCADE);
    fine.body.setSize(15, 15, 200, 66);
    fine.animations.add('rotate', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    fine.animations.play('rotate', 10, true);

	cartelli = game.add.physicsGroup();
	cartelli.create(200, 3100, 'cartello');
	cartelli.create(1300, 2680, 'cartello');
	cartelli.create(1760, 2480, 'cartello');
	cartelli.create(2280, 2480, 'cartelloo');
	cartelli.create(9450, 2400, 'cartello');

	mela = game.add.physicsGroup();
    mela.create(1380, 2740, 'mela');
	mela.create(1800, 3200, 'mela');
    mela.create(2030, 2350, 'mela');
	mela.create(5200, 2700, 'mela');
	mela.create(6050, 2200, 'mela');
	mela.create(6800, 2600, 'mela');
	mela.create(7350, 2600, 'mela');
	mela.create(8950, 2400, 'mela')
	mela.create(8650, 2800, 'mela');
	mela.create(8950, 3200, 'mela');
    game.physics.arcade.enable(mela);

    nuvole = game.add.physicsGroup();
    nuvole.create(0, 3200, 'nuvolona1');
    nuvole.create(750, 3000, 'nuvola1');
	nuvole.create(1250, 2800, 'nuvola2');
	nuvole.create(1750, 2600, 'nuvolona1');
	nuvole.create(3150, 2500, 'nuvola1');
	nuvole.create(4050, 2350, 'nuvola2');
	nuvole.create(4800, 3050, 'nuvolona2');
	nuvole.create(8000, 2900, 'nuvola1');
	nuvole.create(9200, 2500, 'nuvolona2');

	nuvole.setAll('body.checkCollision.left', false);
	nuvole.setAll('body.checkCollision.right', false);
	nuvole.setAll('body.checkCollision.down', false);
    nuvole.setAll('body.immovable', true)

	aplatforms = game.add.physicsGroup();
	p = aplatforms.create(1700, 3200, 'nuvola1');
    p.basso = 3300
    p.alto = 2900
    p.body.velocity.y = 150
	p = aplatforms.create(4430, 2350, 'nuvola1');
    p.basso = 3050
    p.alto = 2350
    p.body.velocity.y = 150
	p = aplatforms.create(5900, 3050, 'nuvola1');
    p.basso = 3050
    p.alto = 2400
    p.body.velocity.y = 150
	p = aplatforms.create(8500, 2900, 'nuvolona1');
    p.basso = 3300
    p.alto = 2500
    p.body.velocity.y = 80
	aplatforms.setAll('body.checkCollision.left', false);
	aplatforms.setAll('body.checkCollision.right', false);
	aplatforms.setAll('body.checkCollision.down', false);
    aplatforms.setAll('body.immovable', true);

	temporale = game.add.physicsGroup();
	temporale.scale.setTo(0.8);
    temporale.create(3300, 3250, 'temporale');
	temporale.create (4600, 2950, 'temporale');
	temporale.create (8000, 3700, 'temporale');
	temporale.create (8700, 3700, 'temporale');
	temporale.create (9400, 3700, 'temporale');
	temporale.setAll('body.immovable', true);

	gabbiani = game.add.physicsGroup();
	g = gabbiani.create(2800, 2470, 'gabbiani');
    g.sinistra = 1850
    g.destra = 2150
	g.body.velocity.x = 200
	g = gabbiani.create(5150, 2930, 'gabbiani');
    g.sinistra = 5050
    g.destra = 5450
	g.body.velocity.x = 200
	g = gabbiani.create(8800, 2800, 'gabbiani');
    g.sinistra = 8800
    g.destra = 9000
	g.body.velocity.x = 200
	g = gabbiani.create(8500, 3200, 'gabbiani');
    g.sinistra = 8500
    g.destra = 8700
	g.body.velocity.x = 200
	g = gabbiani.create(8500, 2400, 'gabbiani');
    g.sinistra = 8500
    g.destra = 8700
	g.body.velocity.x = 200

	cartellone6 = game.add.sprite(100, 2800, 'cartellone6');
	cartellone7 = game.add.sprite(1200, 2380, 'cartellone7');
	cartellone8 = game.add.sprite(1660, 2180, 'cartellone8');
	cartellone9 = game.add.sprite(2180, 2180, 'cartellone9');
	cartellone10 = game.add.sprite(9350, 2100, 'cartellone10');

	//LIVELLO 3!!!

	sfondobosco = game.add.sprite(-20, 4160, 'sfondobosco');

	cartelli = game.add.physicsGroup();
	cartelli.create(250, 5800, 'cartello');
	cartelli.create(2800, 5800, 'cartello');
	cartelli.create(3750, 5670, 'cartello');
	cartelli.create(11300, 5800, 'cartello');

	casetta = game.add.sprite(11500, 5340, 'casetta');

	terreno = game.add.physicsGroup();
    terreno.create(-100, 5930, 'piattaforma1');//terreno
    terreno.create(2570, 5930, 'piattaforma1');
	terreno.create(7200, 5930, 'piattaforma2');
	terreno.create(11000, 5930, 'piattaforma1');
    terreno.setAll('body.immovable', true);

	rami = game.add.physicsGroup();
    rami.create(1000, 5800, 'rametto1');
    rami.create(1400, 5750, 'ramo1');
	rami.create(2150, 5800, 'rametto1');
	rami.create(3000, 5800, 'rametto2');
	rami.create(3200, 5650, 'rametto3');
	rami.create(3000, 5500, 'rametto4');
	rami.create(2800, 5350, 'rametto1');
	rami.create(2600, 5200, 'rametto2');
	rami.create(3700, 5800, 'rametto3');
	rami.create(4200, 5520, 'rametto4');
	rami.create(4700, 5260, 'ramo1');
	rami.create(5400, 5410, 'ramo2');
	rami.create(5800, 5270, 'ramo3');
	rami.create(6200, 5130, 'ramo2');
	rami.create(6600, 4980, 'rametto1');
	rami.create(6150, 5650, 'rametto2');
	rami.create(6750, 5900, 'rametto3');
	rami.setAll('body.checkCollision.left', false);
	rami.setAll('body.checkCollision.right', false);
	rami.setAll('body.checkCollision.down', false);
    rami.setAll('body.immovable', true);
	game.physics.enable(rami, Phaser.Physics.ARCADE);

    fakeplatforms = game.add.physicsGroup(); //rami che cadono
    fakeplatforms.create(3950, 5660, 'ramof');
	fakeplatforms.create(4450, 5380, 'ramof2');
	fakeplatforms.create(5850, 5525, 'ramof3');
	fakeplatforms.create(6450, 5775, 'ramof4');
	fakeplatforms.create(7650, 5790, 'ramettof2');
	fakeplatforms.create(8050, 5790, 'ramettof3');
	fakeplatforms.create(8870, 5780, 'ramof');
	fakeplatforms.create(8570, 5630, 'ramof2');
	fakeplatforms.create(8870, 5480, 'ramof3');
	fakeplatforms.create(8570, 5330, 'ramof4');
	fakeplatforms.create(8870, 5180, 'ramof');
	fakeplatforms.create(8570, 5030, 'ramof2');
	fakeplatforms.create(9400, 5790, 'ramettof1');
	fakeplatforms.create(9800, 5790, 'ramettof2');
	fakeplatforms.create(10200, 5790, 'ramettof3');
	fakeplatforms.create(10600, 5790, 'ramettof1');
	fakeplatforms.setAll('body.checkCollision.left', false);
	fakeplatforms.setAll('body.checkCollision.right', false);
	fakeplatforms.setAll('body.checkCollision.down', false);
    fakeplatforms.setAll('body.immovable', true);
	game.physics.enable(fakeplatforms, Phaser.Physics.ARCADE);

	torta = game.add.physicsGroup();
    torta.create(2670, 5120, 'torta');
	torta.create(3120, 5420, 'torta');
	torta.create(4340, 5420, 'torta');
	torta.create(4900, 5050, 'torta');
	torta.create(5950, 5070, 'torta');
	torta.create(6280, 5550, 'torta');
    torta.create(6740, 4900, 'torta');
	torta.create(6880, 5800, 'torta');
	torta.create(7900, 5500, 'torta');
	torta.create(8720, 4900, 'torta');
	torta.create(9000, 5050, 'torta');
	torta.create(8720, 5200, 'torta');
	torta.create(9600, 5460, 'torta');
	torta.create(10000, 5460, 'torta');
	torta.create(10400, 5460, 'torta');
    game.physics.arcade.enable(torta);

	ricci = game.add.physicsGroup();
    n = ricci.create(300, 5860, 'ricci');
    n.sinistra = 350
    n.destra = 550
    n.body.velocity.x = 100
    n = ricci.create(1600, 5680, 'ricci');
    n.sinistra = 1530
    n.destra = 1730
	n.body.velocity.x = 100
    n = ricci.create(4900, 5180, 'ricci');
    n.sinistra = 4850
    n.destra = 4980
    n.body.velocity.x = 100
    n = ricci.create(5600, 5340, 'ricci');
    n.sinistra = 5450
    n.destra = 5680
    n.body.velocity.x = 100
    n = ricci.create(6000, 5200, 'ricci');
    n.sinistra = 5850
    n.destra = 6080
    n.body.velocity.x = 100
    n = ricci.create(6400, 5060, 'ricci');
    n.sinistra = 6250
    n.destra = 6480
    n.body.velocity.x = 100
    n = ricci.create(7600, 5860, 'ricci');
    n.sinistra = 7550
    n.destra = 7750
    n.body.velocity.x = 100
    n = ricci.create(7750, 5860, 'ricci');
    n.sinistra = 7700
    n.destra = 7900
    n.body.velocity.x = 100
    n = ricci.create(7900, 5860, 'ricci');
    n.sinistra = 7850
    n.destra = 8050
    n.body.velocity.x = 100
    n = ricci.create(8050, 5860, 'ricci');
    n.sinistra = 8000
    n.destra = 8200
    n.body.velocity.x = 100

	cartellone11 = game.add.sprite(150, 5500, 'cartellone11');
	cartellone12 = game.add.sprite(2700, 5500, 'cartellone12');
	cartellone13 = game.add.sprite(3650, 5370, 'cartellone13');
	cartellone14 = game.add.sprite(11200, 5500, 'cartellone14');



	//PLAYER!!!
	player = game.add.sprite(50, 500, 'cappuccetto');
	//	player = game.add.sprite(5800, 250, 'cappuccetto'); //fine livello sarah

	//player = game.add.sprite(50, 2800, 'cappuccetto'); //inizio livello giulia
	//player = game.add.sprite(9500, 2300, 'cappuccetto'); //fine livello giulia
	player.animations.add('corsadx', [32, 33, 34, 35, 36, 37, 38, 39, 40]);
	player.animations.add('corsasx', [41, 42, 43, 44, 45, 46, 47, 48, 49]);
	player.animations.add('saltodx', [50, 51, 52, 53, 54, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 54, 53, 52, 51, 50]);
	player.animations.add('saltosx', [61, 60, 59, 58, 57, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 57, 58, 59, 60, 61]);
	player.animations.add('nuotadx', [11, 12, 13, 14, 15, 16, 17, 18, 19]);
	player.animations.add('nuotasx', [28, 27, 26, 25, 24, 23, 22, 21]);
	player.animations.add('caduta', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
	player.animations.play('caduta', 8, true);
	player.vite = 3;
    //game.camera.follow(player);
    game.physics.enable([player], Phaser.Physics.ARCADE);
	player.body.setSize(100, 168.104, 128, 29); //a sto punto penso abbiamo finito
	player.scale.setTo(0.8);
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 100;
	player.body.bounce.set(0.05);



	filo1 = game.add.sprite(1431.0832, 87.6831, 'wire');
    filo2 = game.add.sprite(3363.1816, 583.944, 'wire');
	filo3 = game.add.sprite(4205.2616, 121.944, 'wire');

    game.physics.arcade.enable(filo1);
    game.physics.arcade.enable(filo2);
    game.physics.arcade.enable(filo3);

	rete1 = game.add.sprite(1396, 903, 'reti');
    rete2 = game.add.sprite(3329, 1399, 'reti');
	rete3 = game.add.sprite(4170.2593 , 937, 'reti');

	game.physics.arcade.enable(rete1);
    game.physics.arcade.enable(rete2);
    game.physics.arcade.enable(rete3);

	platforms1 = game.add.sprite(1451, 818, 'platform1');
    game.physics.enable([platforms1], Phaser.Physics.ARCADE);
    platforms1.body.setSize(1092, 168, 111, 0);
	platforms1.body.immovable = true;
	platforms2 = game.add.sprite(1443, 1339, 'platform2');
	game.physics.enable([platforms2], Phaser.Physics.ARCADE);
    platforms2.body.setSize(1256, 373, 0, 33);
	platforms2.body.immovable = true;
	platforms3 = game.add.sprite(4050, 818, 'platform3');
	game.physics.enable([platforms3], Phaser.Physics.ARCADE);
    platforms3.body.setSize(1216, 190, 143, 0);
	platforms3.body.immovable = true;
	platforms4 = game.add.sprite(5242, 1341, 'platform4');
	game.physics.enable([platforms4], Phaser.Physics.ARCADE);
    platforms4.body.setSize(749, 323, 25, 15);
	platforms4.body.immovable = true;

	cartellone1 = game.add.sprite(64, 993, 'cartellone1');
	cartellone2 = game.add.sprite(333, 930, 'cartellone2');
	cartellone3 = game.add.sprite(1164, 1026, 'cartellone3');
	cartellone4 = game.add.sprite(1830, 936, 'cartellone4');
	cartellone5 = game.add.sprite(5433, 911, 'cartellone5');


	riquadro11 = game.add.sprite(680, 20, 'riquadro_1'); //INTERFACCIA 1
	riquadro12 = game.add.sprite(850, 20, 'riquadro_1');
	riquadro11.fixedToCamera = true;
	riquadro12.fixedToCamera = true;
	riquadrone1 = game.add.sprite(10, 20, 'riquadrone_1');
	riquadrone1.fixedToCamera = true;
	succo_interfaccia = game.add.sprite(947, 30, 'succo');
	succo_interfaccia.fixedToCamera = true;
	succo_interfaccia.scale.setTo(0.5);
	label_succhi = game.add.bitmapText(880, 33, 'PoorRichard', "0/5", 30);
	label_succhi.fixedToCamera = true;

	riquadro21 = game.add.sprite(680, 20, 'riquadro_2'); //INTERFACCIA 2
	riquadro22 = game.add.sprite(850, 20, 'riquadro_2');
	riquadro21.fixedToCamera = true;
	riquadro22.fixedToCamera = true;
	riquadro21.alpha = 0;
	riquadro22.alpha = 0;
	riquadrone2 = game.add.sprite(10, 20, 'riquadrone_2');
	riquadrone2.fixedToCamera = true;
	riquadrone2.alpha = 0;
	mela_interfaccia = game.add.sprite(950, 30, 'mela');
	mela_interfaccia.fixedToCamera = true;
	mela_interfaccia.alpha = 0;
	label_mele = game.add.bitmapText(875, 33, 'PoorRichard', "0/10", 30);
	label_mele.fixedToCamera = true;
	label_mele.alpha = 0;

	riquadro31 = game.add.sprite(680, 20, 'riquadro_3'); //INTERFACCIA 3
	riquadro32 = game.add.sprite(850, 20, 'riquadro_3');
	riquadro31.fixedToCamera = true;
	riquadro32.fixedToCamera = true;
	riquadro31.alpha = 0;
	riquadro32.alpha = 0;
	riquadrone3 = game.add.sprite(10, 20, 'riquadrone_3');
	riquadrone3.fixedToCamera = true;
	riquadrone3.alpha = 0;
	torta_interfaccia = game.add.sprite(950, 30, 'torta');
	torta_interfaccia.scale.setTo(0.9);
	torta_interfaccia.fixedToCamera = true;
	torta_interfaccia.alpha = 0;
	label_torte = game.add.bitmapText(875, 33, 'PoorRichard', "0/15", 30);
	label_torte.fixedToCamera = true;
	label_torte.alpha = 0;

	vita1 = game.add.sprite(695, 33, 'vite');
	vita1.fixedToCamera = true;
    vita2 = game.add.sprite(741, 33, 'vite');
	vita2.fixedToCamera = true;
    vita3 = game.add.sprite(787, 33, 'vite');
	vita3.fixedToCamera = true;

	tempo = game.add.sprite(22, 25, 'tempo'); //LINEA TEMPO
	tempo.scale.setTo(0.38);
	tempo.animations.add('linea_tempo', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
	tempo.animations.play('linea_tempo', 0.18, true); // per far durare la linea 100s - 18/100=0.18
	tempo.fixedToCamera = true;

	//label = game.add.text(10, 10, "Time: ...", { fill: "white" })
    //label.fixedToCamera = true;

	sconfitta1 = game.add.sprite(0, 0, 'sconfitta1');
	sconfitta1.fixedToCamera = true;
	sconfitta1.alpha = 0;

	sconfitta2 = game.add.sprite(0, 0, 'sconfitta2');
	sconfitta2.fixedToCamera = true;
	sconfitta2.alpha = 0;

	vittoria0 = game.add.sprite(0, 0, 'vittoria0'); //vittoria totale con 20 oggetti o più
	vittoria0.fixedToCamera = true;
	vittoria0.alpha = 0;
	vittoria1 = game.add.sprite(0, 0, 'vittoria1'); //vittoria parziale con meno di 20 oggetti
	vittoria1.fixedToCamera = true;
	vittoria1.alpha = 0;

	initialTime = game.time.time;
   // game.camera.follow(player);

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

}






function update () {

	time = Math.floor((game.time.time - initialTime) / 1000)
    //label.setText("Time: " + (countDown - time))
    		game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER, 1, numero);

    if (  (countDown - time) < 1) {
        //game.paused = true;
		game.add.tween(sconfitta2).to( {alpha: 1}, 200, Phaser.Easing.Linear.None, true); //poi sostituire con l'immagine giusta

    }


     if(player.y < 820 && player.y < 1550)
    {

        player.alpha = 0.4;
        disabledKeys = true;
		game.time.events.add(Phaser.Timer.SECOND * 3, attiva);
	function attiva() {
    disabledKeys = false;
	}
	}

    if(player.y > 832 && player.y < 1600)
    {
		numero = 0;
		player.alpha = 1;
		player.body.gravity.y = -20;
	if (game.camera.y < 820) {
			game.camera.y = game.camera.y + 5;
		}
		else {
			game.camera.y = 820;
		}
		platformfissa = game.add.sprite(-189, 674, 'platform');
		platformfissa.alpha = 0;
        game.physics.enable([platformfissa], Phaser.Physics.ARCADE);
		platformfissa.body.immovable = true;



		if (cursors.left.isDown)
    {
        player.body.velocity.x = -120;
		player.animations.play('nuotasx', 9, true);
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 120;
		player.animations.play('nuotadx', 9, true);

    }

    if (cursors.up.isDown)
    {
        player.body.velocity.y = -120;

    }
    else if (cursors.down.isDown)
    {
        player.body.velocity.y = 120;
    }
		if (player.y > 1600) {
numero = 1;
		}


    }

	if (player.y > 3450 && player.y < 4000) { //CADUTA LIVELLO ARIA
		player.vite = player.vite - 1;
		player.tint = 0x777777;
		player.y = 2300;
		//player.body.velocity.y = 50;
		game.time.events.add(Phaser.Timer.SECOND * 3, colore);
	function colore() {
		player.tint = 0xffffff;

	} }


	if (player.y > 5850) { //CADUTA LIVELLO BOSCO
		player.vite = player.vite - 1;
		player.tint = 0x777777;
		player.y = 4700;
		player.body.velocity.y = 50;
		game.time.events.add(Phaser.Timer.SECOND * 3, colore);
	function colore() {
		player.tint = 0xffffff;
	} }



    if(player.vite < 3) {vita3.alpha = 0.2;}
	else {vita3.alpha = 1;}
    if(player.vite < 2) {vita2.alpha = 0.2}
	else {vita2.alpha = 1;}
    if(player.vite < 1) {
		vita1.alpha = 0.2;
        //game.paused;
		sconfitta2.kill;
		game.add.tween(sconfitta1).to( {alpha: 1}, 200, Phaser.Easing.Linear.None, true); //poi sostituire con l'immagine giusta
     }
	else {vita1.alpha = 1;}




	if (player.x > 5700 && player.y < 1200)  //PORTALE DA LIVELLO 1 A 2
	{
		countDown = 140;
		initialTime = game.time.time;
		numero = 1;
		game.camera.follow(player);

		tempo.animations.add('linea_tempo1', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
		tempo.animations.play('linea_tempo1', 0.128, true); // per far durare la linea 140s - 18/140=0.128
		player.x = 50;
		player.y = 2800;
		player.body.gravity.y = 350;
		player.vite = 3;

		label_mele.alpha = 1;
		mela_interfaccia.alpha = 1;
		riquadro22.alpha = 1;
		riquadro21.alpha = 1;
		riquadrone2.alpha = 1;

		label_succhi.alpha = 0;
		succo_interfaccia.alpha = 0;
		riquadro12.alpha = 0;
		riquadro11.alpha = 0;
		riquadrone1.alpha = 0;
	}


	if (player.x > 9700 && player.y > 2000 && player.y < 2400)  //PORTALE DA LIVELLO 2 A 3
	{
		countDown = 160;
		initialTime = game.time.time;
		game.camera.follow(player);

		tempo.animations.add('linea_tempo1', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
		tempo.animations.play('linea_tempo1', 0.1125, true); // per far durare la linea 160s - 18/160=0.1125
		player.x = 100;
		player.y = 5700;
		player.body.gravity.y = 500;
		player.vite = 3;

		label_mele.alpha = 0;
		mela_interfaccia.alpha = 0;
		riquadro22.alpha = 0;
		riquadro21.alpha = 0;
		riquadrone2.alpha = 0;

		label_torte.alpha = 1;
		torta_interfaccia.alpha = 1;
		riquadro32.alpha = 1;
		riquadro31.alpha = 1;
		riquadrone3.alpha = 1;

	}

	if (player.x > 11400 && player.y > 4000) //VITTORIA
		{
			if (noggetti >= 20) {
				game.add.tween(vittoria0).to( {alpha: 1}, 200, Phaser.Easing.Linear.None, true);
				sconfitta2.kill;
				sconfitta1.kill;
			}
			else {
				game.add.tween(vittoria1).to( {alpha: 1}, 200, Phaser.Easing.Linear.None, true);
				sconfitta2.kill;
				sconfitta1.kill;
			}
		}


	if (player.x > 40 && player.x < 130 && player.y < 1340 && player.y > 1193)  { cartellone1.alpha = 1;}
    else {cartellone1.alpha = 0;}
	if ( player.x > 260 && player.x < 403 && player.y < 1277 && player.y > 1130)  { cartellone2.alpha = 1;}
    else {cartellone2.alpha = 0;}
	if ( player.x > 1124 && player.x < 1214 && player.y < 1373 && player.y > 1226)  {cartellone3.alpha = 1;}
    else {cartellone3.alpha = 0;}
	if ( player.x > 1820 && player.x < 1910 && player.y < 1283 && player.y > 1136)  { cartellone4.alpha = 1;}
    else {cartellone4.alpha = 0;}
	if ( player.x > 5383 && player.x < 5483 && player.y < 1258 && player.y > 1111)  {cartellone5.alpha = 1;}
    else {cartellone5.alpha = 0;} //
	if (player.x > 50 && player.x < 150 && player.y < 3100 && player.y > 2900)  {cartellone6.alpha = 1;}
    else {cartellone6.alpha = 0;}
	if (player.x > 1150 && player.x < 1230 && player.y < 2680 && player.y > 2480)  {cartellone7.alpha = 1;}
    else {cartellone7.alpha = 0;}
	if (player.x > 1580 && player.x < 1690 && player.y < 2480 && player.y > 2280)  {cartellone8.alpha = 1;}
    else {cartellone8.alpha = 0;}
	if (player.x > 2100 && player.x < 2210 && player.y < 2480 && player.y > 2280)  {cartellone9.alpha = 1;}
    else {cartellone9.alpha = 0;}
	if (player.x > 9300 && player.x < 9380 && player.y < 2400 && player.y > 2200)  {cartellone10.alpha = 1;}
    else {cartellone10.alpha = 0;}  //
	if ( player.x > 50 && player.x < 280 && player.y < 5800 && player.y > 5600)  {cartellone11.alpha = 1;}  // se le coordinate del player sono 5 lo spazio occupato dal cartello l'immagine con le istruzioni è visibile
    else {cartellone11.alpha = 0;} //se il player non è più davanti al blocco/cartello, le istruzioni scompaiono
	if ( player.x > 2630 && player.x < 2730 && player.y < 5800 && player.y > 5600)  {cartellone12.alpha = 1;}
    else {cartellone12.alpha = 0;}
	if ( player.x > 3580 && player.x < 3680 && player.y < 5760 && player.y > 5560)  {cartellone13.alpha = 1;}
    else {cartellone13.alpha = 0;}
	if ( player.x > 11120 && player.x < 11230 && player.y < 5800 && player.y > 5600)  {cartellone14.alpha = 1;}
    else {cartellone14.alpha = 0;}

	aplatforms.forEach(patrol);
	gabbiani.forEach(patrol_g);
	ricci.forEach(patrol_r);
	medusa.forEach(patrol_m);

	game.physics.arcade.collide(player, nuvole, scossetta);
	game.physics.arcade.collide(player, rami, scossetta);
	game.physics.arcade.collide(player, terreno);
	game.physics.arcade.collide(player, aplatforms);
	game.physics.arcade.collide(player, temporale, fallingPlatform);
	game.physics.arcade.collide(player, fakeplatforms, fallingPlatform);
	game.physics.arcade.overlap(player, gabbiani, hit);
	game.physics.arcade.overlap(player, ricci, hit);
	game.physics.arcade.overlap(player, medusa, hit);
    game.physics.arcade.overlap(player, mela, collectmele);
	game.physics.arcade.overlap(player, torta, collecttorte);
	//livello3
	game.physics.arcade.collide(player, platforms1);
    game.physics.arcade.collide(player, platforms2);
    game.physics.arcade.collide(player, platforms3);
    game.physics.arcade.collide(player, platforms4);
	game.physics.arcade.collide(player, bordo);
	game.physics.arcade.collide(player, bordo2);
	game.physics.arcade.overlap(player, succo, collectsucchi);

    player.body.velocity.x = 0;

	if ( funzionante == true )   {
	   	game.physics.arcade.overlap(player, rete1, ostacolo);
		game.physics.arcade.overlap(player, rete1, filosale1);
		game.physics.arcade.overlap(player, rete2, ostacolo);
		game.physics.arcade.overlap(player, rete2, filosale2);
		game.physics.arcade.overlap(player, rete3, ostacolo);
		game.physics.arcade.overlap(player, rete3, filosale3);
	}
	if ( funzionante == false ) {
		game.time.events.add(Phaser.Timer.SECOND * 5, attiva);
	    function attiva() {
      funzionante = true;
	}
	}

function filosale1(p, o) {
	filo1.body.velocity.y = -100;
}
	function filosale2(p, o) {
	filo2.body.velocity.y = -100;
}
function filosale3(p, o) {
	filo3.body.velocity.y = -100;
}

function ostacolo(p, r, filo) { //FUNZIONE AMI DA PESCA
    filosale = true;
	p.vite = p.vite - 1;
	funzionante = false;
	disabledKeys = true;
    player.tint = 0x777777;
	r.body.velocity.y = -100;
	p.body.velocity.y = -100;
	filosale = true;
	game.time.events.add(Phaser.Timer.SECOND * 2, colore1);
	  function colore1() {
		    disabledKeys = false;
	        filosale = false;
	        player.tint = 0xffffff;
	        p.body.velocity.y = 0;
	      }
}


function collectsucchi (p, o) {
    o.kill();
    noggetti = noggetti + 1;
	nsucchi = nsucchi + 1;
    label_succhi.setText( (nsucchi) + "/5");
}

function collectmele (p,o) {
    o.kill();
    noggetti = noggetti + 1;
	nmele = nmele + 1;
    label_mele.setText( (nmele) + "/10")
}

function collecttorte (p, o) {
    o.kill();
    noggetti = noggetti + 1;
	ntorte = ntorte + 1;
    label_torte.setText( (ntorte) + "/15");
}

function hit(p, g) {

	if ( filosale == false ) {
    p.vite = p.vite - 1;
	player.tint = 0x777777;
	game.time.events.add(Phaser.Timer.SECOND * 3, colore);
	function colore() {
		player.tint = 0xffffff;
	}
    g.kill();
}
}

if(disabledKeys == false)
    {
	if (player.y > 1800) {
     if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))  //MOVIMENTI CAPPUCCETTO
    {
        player.body.velocity.y = -400;
		if (cursors. left.isDown) {
			player.animations.play('saltosx', 13, false);
		}
		else {
			player.animations.play('saltodx', 13, false);
		}
    }

	else if (cursors.left.isDown)
    {
        player.body.velocity.x = -250;
		if (!(player.body.onFloor() || player.body.touching.down)) {
			player.animations.play('saltosx', 13, false);
		}
		else {
        	player.animations.play('corsasx', 13, false);
		}

    }

	else if (cursors.right.isDown)
    {
        player.body.velocity.x = 250;
		if (!(player.body.onFloor() || player.body.touching.down)) {
			player.animations.play('saltodx', 13, false);
		}
		else {
        	player.animations.play('corsadx', 13, false);
		}
    }

	else{
		player.animations.stop('corsadx', 10, false);
		player.animations.stop('corsasx', 10, false);
	}
	}
	else {

		if (cursors.left.isDown)
    {
        player.body.velocity.x = -120;
		player.animations.play('nuotasx', 9, true);
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 120;
		player.animations.play('nuotadx', 9, true);

    }

    if (cursors.up.isDown)
    {
        player.body.velocity.y = -120;
		//player.animations.play('corsadx', 9, true);

    }
    else if (cursors.down.isDown)
    {
        player.body.velocity.y = 120;
		//player.animations.play('corsadx', 9, true);
    }



	}
} }


function patrol(p) {
    if(p.y > p.basso&& !p.toccata)
        p.body.velocity.y = -150
    if(p.y < p.alto&& !p.toccata)
        p.body.velocity.y = 150
}

function patrol_r(n) {
    if(n.x < n.sinistra) {
        n.body.velocity.x = 100;
		n.animations.add('corsaasx', [4, 5, 6, 7]);
		n.animations.play('corsaasx', 8, true);
	}
    if(n.x > n.destra) {
        n.body.velocity.x = -100;
		n.animations.add('corsaadx', [0, 1, 2, 3]);
		n.animations.play('corsaadx', 8, true);
	}
}

function patrol_g(n) {
    if(n.x < n.sinistra) {
        n.body.velocity.x = 200;
		n.animations.add('volosx', [5, 6, 7, 8, 9, 8, 7, 6, 5]);
		n.animations.play('volosx', 10, true);
	}
    if(n.x > n.destra) {
        n.body.velocity.x = -200;
		n.animations.add('volodx', [0, 1, 2, 3, 4, 3, 2, 1, 0]);
		n.animations.play('volodx', 10, true);
	}
}

function patrol_m(m) {
	 if (m.y > m.sotto) {
		 m.body.velocity.y = -130;
         m.animations.add('medusasu', [0, 2, 4, 6, 8]);
         m.animations.play('medusasu', 10, true);
	 }
	 if (m.y < m.sopra) {
		  m.body.velocity.y = 130;
         m.animations.add('medusagiu', [1, 3, 5, 7, 9]);
         m.animations.play('medusagiu', 10, true);
}
}

function fallingPlatform(p, t) {
	 if (t.body.touching.up) {
	t.body.velocity.y = 100;
	game.add.tween(t).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
	game.time.events.add(Phaser.Timer.SECOND * 2, scompare, this);
	function scompare ()
	{
		t.kill();
	}
	}
}

function scossetta (p, r) {
	if (r.body.touching.up) {
		r.body.velocity.y = 100;
		p.body.velocity.y = 100;
		game.time.events.add(Phaser.Timer.SECOND * 0.4, stop);
		game.time.events.add(Phaser.Timer.SECOND * 0.2, scossetta1);
	function scossetta1 () {
		r.body.velocity.y = -100;
		//p.body.velocity.y = -100;
	}
	function stop () {
		r.body.velocity = 0; //funziona ma perchè è sbagliato e si blocca
		//p.body.velocity.y = 0;
	}
	}
}

function render () {

}
