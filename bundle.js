(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';var _lodash=require('lodash.intersection');var _lodash2=_interopRequireDefault(_lodash);var _lodash3=require('lodash.shuffle');var _lodash4=_interopRequireDefault(_lodash3);var _matrix=require('matrix');var _matrix2=_interopRequireDefault(_matrix);var _legends=require('legends');var _legends2=_interopRequireDefault(_legends);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var gameContainer=$('.game-container');var carousel=gameContainer.find('.game-result');var gameButtons=gameContainer.find('.game-buttons');var isEmpty=true;gameContainer.on('click','.game-buttons a',function(e){var buttonSelected=$(this);buttonSelected.toggleClass('active');var idLegends=getIntersection();appendCards(idLegends)});function getIntersection(){var arraySelected=[];//Sets intersected elements into selected array
var arrActive=gameButtons.find('a.active');arrActive.map(function(){arraySelected.push(_matrix2.default[$(this).data('name')].legendIds)});return(0,_lodash4.default)(_lodash2.default.apply(null,arraySelected))}function appendCards(idLegends){var arrayLength=idLegends.length;if(isEmpty){carousel.empty()}else{carousel.slick('removeSlide',null,null,true);carousel.slick('unslick')}if(arrayLength==0){isEmpty=true;return carousel.append(renderEmptyCard())}//Iterate over legend ids and find the correspondent text in legends.js
idLegends.forEach(function(l,i){carousel.append(renderCardLegend(_legends2.default[l-1],arrayLength,i))});carousel.slick();isEmpty=false}function renderCardLegend(legend,legendsLenght,index){var shareTxt=legend.text.replace(/\n/g,' ');shareTxt=shareTxt.charAt(0).toUpperCase()+shareTxt.slice(1).toLowerCase();var template='<div class="card-legend">\n                        <div class="card-legend-author">                         \n                            <svg width="55px" height="55px" viewBox="0 0 67 67" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">      \n                                <defs>\n                                    <circle id="path-1" cx="23.2142857" cy="23.2142857" r="23.2142857"></circle>\n                                </defs>\n                                <g id="Final-Version" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                                    <g id="juego_interactivo_desktop_screen_2" transform="translate(-715.000000, -751.000000)">\n                                        <g id="Selena" transform="translate(716.000000, 752.000000)">\n                                            <g transform="translate(9.285714, 9.285714)">\n                                                <mask id="mask-2" fill="white">\n                                                    <use xlink:href="#path-1"></use>\n                                                </mask>\n                                                <use id="Mask" fill="#D8D8D8" xlink:href="#path-1"></use>\n                                                <image id="rs-634x1024-150716105835-634.Selena-Perez.jl.071615" mask="url(#mask-2)" x="-9.928571429" y="0" width="65" height="65" xlink:href="'+legend.image_url+'"></image>\n                                            </g>\n                                            <path d="M32.5,65 C50.4492544,65 65,50.4492544 65,32.5 M32.5,0 C14.5507456,0 0,14.5507456 0,32.5" id="Circle" stroke="#B52BA1" stroke-width="1.2"></path>\n                                            <circle id="Circle" stroke="#715CAE" stroke-width="1.2" cx="32.5" cy="32.5" r="27.3412698"></circle>\n                                            <path d="M1.86363291,43.3737658 C5.03609748,52.3116428 12.0089739,59.4499628 20.8388236,62.8452872" id="Circle" stroke="#FACE39" stroke-width="1.2"></path>\n                                            <path d="M43.429031,1.42918604 C46.6014956,10.3670631 53.574372,17.505383 62.4042217,20.9007075" id="Circle" stroke="#FACE39" stroke-width="1.2"                            transform="translate(52.916626, 11.164947) rotate(178.000000) translate(-52.916626, -11.164947) "></path>\n                                        </g>\n                                    </g>\n                                </g>\n                            </svg>\n                            <div class="card-legend-author-song">\n                                <p>'+legend.author+'</p>\n                                <p>'+legend.song+'</p>\n                            </div>\n                        </div>\n                                <div class="card-legend-text">\n                                    \u201C'+legend.text.replace(/\n/g,'<br>')+'\u201D        \n                                </div>\n                        <div class="card-legend-socials">\n                            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http://www.univision.com/test/rlc-game&p[title]='+encodeURIComponent(shareTxt)+'&p[summary]='+encodeURIComponent(shareTxt)+'">\n                              <img src="http://cdn1.uvnimg.com/2e/38/551afd624e6ab7019399206b6501/rlc-share-fb.png">                            \n                            </a>\n                            <a target="_blank" href="https://twitter.com/intent/tweet?source=http://www.univision.com/test/rlc-game&amp;text=http://www.univision.com/test/rlc-game '+shareTxt+'">\n                              <img src="http://cdn1.uvnimg.com/90/a3/ce81f55a46578f02de5cff371636/rlc-share-tw.png">                            \n                            </a>\n                        </div>\n                        <div class="card-legend-page">\n                            '+(index+1)+'/'+legendsLenght+'\n                        </div>\n                    </div>';return template}function renderEmptyCard(){var template='<div class="card-legend">                        \n                        <div class="card-legend-content">                         \n                            <p>No hay palabras para decir lo que sientes. <span>Int\xE9ntalo de nuevo.</span></p>\n                        </div>                        \n                        <div class="card-legend-page">\n                            0/0\n                        </div>\n                    </div>';return template}

},{"legends":2,"lodash.intersection":4,"lodash.shuffle":5,"matrix":3}],2:[function(require,module,exports){
'use strict';var legends=[{id:1,author:'Jenni Rivera',song:'Basta ya',image_url:'http://cdn4.uvnimg.com/ce/0b/e84927544a40a1922bc68b77e69e/Jenni%2520Rivera%252009-1%2520(universal).jpg',text:'Y basta ya de tu inconsciencia\nDe esta forma tan absurda de ver a diario\nComo echas a la basura mi coraz\xF3n\nLo que te doy con rabra fe de ver en t\xED felicidad'},{id:2,author:'Selena',song:'Amor Prohibido',image_url:'http://cdn1.uvnimg.com/a6/88/5997825747e5b2a1c070aedeedae/11159456_10152819722057876_6471116984783737507_n.jpg',text:'Amor prohibido murmuran por las calles\nPorque somos de distitas sociedades\nAmor prohibido nos dice todo el mundo\nEl dinero no importa en ti y en mi \nNi en el coraz\xF3n'},{id:3,author:'Selena',song:'Amor Prohibido',image_url:'http://cdn1.uvnimg.com/a6/88/5997825747e5b2a1c070aedeedae/11159456_10152819722057876_6471116984783737507_n.jpg',text:'Aunque soy pobre todo esto que te doy\nVale m\xE1s que el dinero porque s\xED es amor'},{id:4,author:'Selena',song:'Amor Prohibido',image_url:'http://cdn1.uvnimg.com/a6/88/5997825747e5b2a1c070aedeedae/11159456_10152819722057876_6471116984783737507_n.jpg',text:'Con unas ansias locas quiero verte hoy\nEspero ese momento en que escuche tu voz'},{id:5,author:'Marco Antonio Solis',song:'Basta Ya',image_url:'http://cdn4.uvnimg.com/ac/1d/eb6823224d1d96a75a1f3d43cb65/GettyImages-132195572_master.jpg',text:'Desde hoy he prohibido a mis ojos\nEl mirarte de nuevo a la cara'},{id:6,author:'Marco Antonio Solis',song:'Basta Ya',image_url:'http://cdn4.uvnimg.com/ac/1d/eb6823224d1d96a75a1f3d43cb65/GettyImages-132195572_master.jpg',text:'Tengo que renunciar a quererte antes que ya no\nTenga remedio si mi vida la echara tu suerte \nMi camino ser\xE1 un cementerio'},{id:7,author:'Ninel Conde',song:'El Bomb\xF3n Asesino',image_url:'http://cdn2.uvnimg.com/53/d1/7b29fb4f4f4ab3c115b4b3125001/untitled-8.jpg',text:'Mi cinturita parace que a todos agita\nSi me pongo una falda cortita\nEl meneo me la sube todita'},{id:8,author:'Ninel Conde',song:'El Bomb\xF3n Asesino',image_url:'http://cdn2.uvnimg.com/53/d1/7b29fb4f4f4ab3c115b4b3125001/untitled-8.jpg',text:'Me dicen bomb\xF3n insaciable que soy un \nBomb\xF3n masticable. Me dicen bomb\xF3n'},{id:9,author:'Ana B\xE1rbara',song:'Bandido',image_url:'http://cdn1.uvnimg.com/7d/84/bed13bc24469a3a7b443ea6dd2ff/anabarbara.jpg',text:'T\xFA lo sabes que la mujer que se enamora\nEs cap\xE1z de cualquier cosa\nY yo doy el alma por tu amor'},{id:10,author:'Ana B\xE1rbara',song:'Bandido',image_url:'http://cdn1.uvnimg.com/7d/84/bed13bc24469a3a7b443ea6dd2ff/anabarbara.jpg',text:'Te buscar\xE9 bandido\nTe atrapar\xE9 maldito\nTe lo juro\nPagar\xE1s por mi amor'},{id:11,author:'Ana B\xE1rbara',song:'Loca',image_url:'http://cdn1.uvnimg.com/7d/84/bed13bc24469a3a7b443ea6dd2ff/anabarbara.jpg',text:'Con u\xF1as y con dientes\nSer\xE9 como una fiera\nVoy a pelear de frente\nSu amor contra cualquiera'},{id:12,author:'Ana B\xE1rbara',song:'Loca',image_url:'http://cdn1.uvnimg.com/7d/84/bed13bc24469a3a7b443ea6dd2ff/anabarbara.jpg',text:'Por culpa de ese amor estoy llorando\nY soy como una gata sin guarida\nLas noches me las paso dando vueltas\nSigui\xE9ndole las huellas a escondidas'},{id:13,author:'Joan Sebastian',song:'Tatuajes',image_url:'http://cdn2.uvnimg.com/ba/22/3632ee38494dada3127a3297a71a/joan2-0052ed851a2ccb97d7c169fdc675430e.jpg',text:'Aunque eres mi necesidad\nTe dejo\nPero eso de que te olvide\nNo s\xE9'},{id:14,author:'Joan Sebastian',song:'Tatuajes',image_url:'http://cdn2.uvnimg.com/ba/22/3632ee38494dada3127a3297a71a/joan2-0052ed851a2ccb97d7c169fdc675430e.jpg',text:'Tatuajes de tus besos llevo en todo mi cuerpo\nTatuados sobre el tiempo el tiempo que te conoc\xED\nSe me hizo vicio ver tus ojos respirar por tu aliento\nMe voy, pero te llevo dentro de m\xED'},{id:15,author:'Roc\xEDo Durcal',song:'El amor m\xE1s bonito',image_url:'http://cdn3.uvnimg.com/59/29/c6d034b6432fbc780ebbb3a3a8c4/gettyimages-57183872.jpg',text:'Eres el amor m\xE1s bonito que tengo\nLa verdad en la cual me mantengo'},{id:16,author:'Roc\xEDo Durcal',song:'El amor m\xE1s bonito',image_url:'http://cdn3.uvnimg.com/59/29/c6d034b6432fbc780ebbb3a3a8c4/gettyimages-57183872.jpg',text:'Eres el sentir que me hace vivir\nLlena de ilusiones y motivaciones\nNuevas para m\xED'},{id:17,author:'Roc\xEDo Durcal',song:'El amor m\xE1s bonito',image_url:'http://cdn3.uvnimg.com/59/29/c6d034b6432fbc780ebbb3a3a8c4/gettyimages-57183872.jpg',text:'Tienes en tus ojos mi f\xE9 y esperanza\nEsa magia que nunca me cansa\nLlevas en tu ser\nTanto que aprender'},{id:18,author:'Los Recoditos',song:'Ando Bien Pedo',image_url:'http://cdn4.uvnimg.com/45/07/ddafef5d4b53848627b85b050fdd/508160d824784871903f3155d0cdffe7',text:'S\xE9 que estoy perdido\nS\xE9 que estoy muriendo sin tu amor\nSin tu calor por tu adi\xF3s'},{id:19,author:'Los Recoditos',song:'Ando Bien Pedo',image_url:'http://cdn4.uvnimg.com/45/07/ddafef5d4b53848627b85b050fdd/508160d824784871903f3155d0cdffe7',text:'Ando bien pedo bien loco\nCant\xE1ndole al recuerdo mis penas\nPidiendo tu recuerdo y tus besitos'},{id:20,author:'Los Recoditos',song:'Ando Bien Pedo',image_url:'http://cdn4.uvnimg.com/45/07/ddafef5d4b53848627b85b050fdd/508160d824784871903f3155d0cdffe7',text:'S\xE9 que es un castigo\nQue me des tu olvido\nQu\xE9 dolor cu\xE1nto dolor siento yo'},{id:21,author:'Ana Gabriel',song:'T\xFA lo Decidiste',image_url:'http://cdn3.uvnimg.com/fa/7b/c5e2993e4c758efe00d59fe45725/ana-gabriel4.jpg',text:'Te fuiste sin siquiera despedirte\nPensaste ya despu\xE9s me buscar\xE1\nPues mira te fallaron tus deseos\nY al final de cuentas fuiste t\xFA quien me extra\xF1\xF3'},{id:22,author:'Ana Gabriel',song:'T\xFA lo Decidiste',image_url:'http://cdn3.uvnimg.com/fa/7b/c5e2993e4c758efe00d59fe45725/ana-gabriel4.jpg',text:'Nadie sabe lo que tiene \nHasta que lo ve perdido\nNunca t\xFA debiste decidirlo\nPues creo que eran cosas de los dos\nNunca tu debiste decidirlo\nPues mira ya aprendiste la lecci\xF3n'},{id:23,author:'Ana Gabriel',song:'T\xFA lo Decidiste',image_url:'http://cdn3.uvnimg.com/fa/7b/c5e2993e4c758efe00d59fe45725/ana-gabriel4.jpg',text:'Y vienes a contarme tu tristeza\nY quieres aclarar la situaci\xF3n\nPretendes que yo olvide los detalles\nQue perdone todo y volvamos a empezar'},{id:24,author:'Juli\xF3n \xC1lvarez',song:'El Amor de su Vida',image_url:'http://cdn2.uvnimg.com/4c/4e/50df7de04f1fb34bc9bce01b8c69/julion123456789.jpg',text:'Yo\nYo era el amor de su vida\nYo disfrut\xE9 sus caricias y su primer beso\nFue m\xEDo y fue m\xEDa'},{id:25,author:'Juli\xF3n \xC1lvarez',song:'El Amor de su Vida',image_url:'http://cdn2.uvnimg.com/4c/4e/50df7de04f1fb34bc9bce01b8c69/julion123456789.jpg',text:'Yo\nNo supe lo que ten\xEDa\nMe acostumbr\xE9 a la rutina y la hice llorar\nEse maldito d\xEDa'},{id:26,author:'Juli\xF3n \xC1lvarez',song:'El Amor de su Vida',image_url:'http://cdn2.uvnimg.com/4c/4e/50df7de04f1fb34bc9bce01b8c69/julion123456789.jpg',text:'Puede que te digan\nQue he guardado todas tus fotograf\xEDas\nQue me aferro como un loco en esperanza\nQue alg\xFAn d\xEDa te despiertes recordando\nQue a pesar de mis errores\nTuvimos hermosos d\xEDas'},{id:27,author:'Selena',song:'Como la flor',image_url:'http://cdn1.uvnimg.com/a6/88/5997825747e5b2a1c070aedeedae/11159456_10152819722057876_6471116984783737507_n.jpg',text:'Yo s\xE9 que tienes un nuevo amor\nSin embargo te deseo lo mejor\nSi en m\xED no encontraste felicidad\nTal vez alguien m\xE1s te la dar\xE1'},{id:28,author:'Selena',song:'Como la flor',image_url:'http://cdn1.uvnimg.com/a6/88/5997825747e5b2a1c070aedeedae/11159456_10152819722057876_6471116984783737507_n.jpg',text:'Si vieras c\xF3mo duele perder tu amor\nCon tu adi\xF3s te llevaste mi coraz\xF3n'},{id:29,author:'Los \xC1ngeles Azules',song:'C\xF3mo te voy a Olvidar',image_url:'http://cdn3.uvnimg.com/3a/d0/bcdb2a9847ceb43e8f902e01637b/bba482a2ccec4f64b64e6a44e591bd92',text:'Si en una rosa est\xE1s t\xFA\nSi en cada respirar est\xE1s t\xFA\nC\xF3mo te voy a olvidar'},{id:30,author:'Los \xC1ngeles Azules',song:'C\xF3mo te voy a Olvidar',image_url:'http://cdn3.uvnimg.com/3a/d0/bcdb2a9847ceb43e8f902e01637b/bba482a2ccec4f64b64e6a44e591bd92',text:'C\xF3mo no acordarme de ti\nDe qu\xE9 manera olvidarte\nSi todo me recuerda a ti\nEn todas partes est\xE1s t\xFA'},{id:31,author:'Banda MS',song:'Me vas a Extra\xF1ar',image_url:'http://cdn4.uvnimg.com/21/b7/73fca4a14a9684dab7696848bbb6/MS1.png',text:'No me alcanz\xF3 el cari\xF1o \nPara verte contenta\nTe amaba como un loco\nY no te diste cuenta'},{id:32,author:'Banda MS',song:'Me vas a Extra\xF1ar',image_url:'http://cdn4.uvnimg.com/21/b7/73fca4a14a9684dab7696848bbb6/MS1.png',text:'De qu\xE9 sirvi\xF3 rogarte\nPara que te quedaras\nMi error fue darte todo\nCuando no vales nada'},{id:33,author:'Banda MS',song:'Me vas a Extra\xF1ar',image_url:'http://cdn4.uvnimg.com/21/b7/73fca4a14a9684dab7696848bbb6/MS1.png',text:'Me vas a extra\xF1ar\nTe apuesto lo que quieras \nQue vas a buscarme\nY vas a llorar porque t\xFA a mi\nJam\xE1s supiste valorarme'},{id:34,author:'Banda El Recodo',song:'El Sinaloense',image_url:'http://cdn1.uvnimg.com/f7/50/b4404cd2431da6d60b6aa7d40ed4/11899490_739304522859090_531974673_n.jpg',text:'Por Dios que borracho vengo\nQue me echan con la "tambora"\nQue me toquen el "Quelite"\nDespu\xE9s el "Ni\xF1o perdido"\nY por \xFAltimo "El torito"\nPa\' que vean c\xF3mo le brinco'},{id:35,author:'Banda El Recodo',song:'El Sinaloense',image_url:'http://cdn1.uvnimg.com/f7/50/b4404cd2431da6d60b6aa7d40ed4/11899490_739304522859090_531974673_n.jpg',text:'Soy del mero Sinaloa\nDonde se rompen las olas\nY busco una que ande sola\nY que no tenga marido\nPa\' no estar comprometido\nCuando resulte la boda'},{id:36,author:'La arrolladora Banda El Lim\xF3n',song:'Me va a pesar',image_url:'http://cdn1.uvnimg.com/d4/d9/efcc1f2a46f5bd75ad1ab1055820/g.jpeg',text:'Nunca lo entend\xED t\xFA me diste todo\nY yo jam\xE1s te daba lo que merec\xEDas\nCu\xE1ntas veces te he visto llorar \nY ha sido culpa m\xEDa\nEntre m\xE1s buena eras conmigo\nYo m\xE1s te ofend\xEDa'},{id:37,author:'La arrolladora Banda El Lim\xF3n',song:'Me va a pesar',image_url:'http://cdn1.uvnimg.com/d4/d9/efcc1f2a46f5bd75ad1ab1055820/g.jpeg',text:'Me va a pesar yo s\xE9 bien que me va a pesar\nCuando te vea con alguien m\xE1s \nY te empiece a besar\nNo valor\xE9 lo que me dabas \nTu coraz\xF3n lastimaba\nS\xF3lo te hac\xEDa llorar'},{id:38,author:'Chayito Vald\xE9z',song:'Tres veces te enga\xF1\xE9',image_url:'http://cdn4.uvnimg.com/dims4/default/51b5c17/2147483647/thumbnail/182x182/quality/75/?url=http%3A%2F%2Fcdn1.uvnimg.com%2Fc3%2F47%2F9fd3cc0d45d28ad68d940d092abe%2Fchayitovaldez.png',text:'T\xFA que me dejabas\nYo que te esperaba\nPorque tontamente\nSimpre te era fiel'},{id:39,author:'Chayito Vald\xE9z',song:'Tres veces te enga\xF1\xE9',image_url:'http://cdn4.uvnimg.com/dims4/default/51b5c17/2147483647/thumbnail/182x182/quality/75/?url=http%3A%2F%2Fcdn1.uvnimg.com%2Fc3%2F47%2F9fd3cc0d45d28ad68d940d092abe%2Fchayitovaldez.png',text:'Tres veces te enga\xF1\xE9\nLa primera por coraje\nLa segunda por cari\xF1o\nLa tercera por placer'},{id:40,author:'Chiquis Rivera',song:'Horas Extras',image_url:'http://cdn1.uvnimg.com/09/db/af1810744d2cb5fda4d75c558432/GettyImages-480983962_master.jpg',text:'Me cans\xE9 de escucharte\nY estar soportando tanta estupidez\nNo me sirve de nada\nQue digas que est\xE1s a mis pies\nMejor ub\xEDcate'},{id:41,author:'Jenni Rivera',song:'Por qu\xE9 no le calas',image_url:'http://cdn4.uvnimg.com/ce/0b/e84927544a40a1922bc68b77e69e/Jenni%2520Rivera%252009-1%2520(universal).jpg',text:'Porque no le calas\nQuizas bien dices y te quiera m\xE1s que yo\nQuiz\xE1s te haga m\xE1s fel\xEDz en el amor\nHaz tu maleta y vete con ella'},{id:42,author:'Jenni Rivera',song:'Por qu\xE9 no le calas',image_url:'http://cdn4.uvnimg.com/ce/0b/e84927544a40a1922bc68b77e69e/Jenni%2520Rivera%252009-1%2520(universal).jpg',text:'Si crees que otra\nSi ha de amarte por completo\nPor qu\xE9 no empacas\nLe buscas y le calas'},{id:43,author:'Lola Beltr\xE1n',song:'No volver\xE9',image_url:'http://cdn2.uvnimg.com/dims4/default/714a6e4/2147483647/crop/506x506%2B155%2B57/resize/182x182/quality/75/?url=http%3A%2F%2Fcdn4.uvnimg.com%2Fd1%2Fa6%2F4cd45ea5456faa1cead3dd645afb%2Flolabeltran.jpg',text:'Yo te juro que no volver\xE9\nAunque me haga pedazos la vida\nSi una vez con locura te am\xE9\nYa de mi alma estar\xE1s despedido'},{id:44,author:'Lola Beltr\xE1n',song:'No volver\xE9',image_url:'http://cdn2.uvnimg.com/dims4/default/714a6e4/2147483647/crop/506x506%2B155%2B57/resize/182x182/quality/75/?url=http%3A%2F%2Fcdn4.uvnimg.com%2Fd1%2Fa6%2F4cd45ea5456faa1cead3dd645afb%2Flolabeltran.jpg',text:'Fuimos nubes que el viento apart\xF3\nFuimos piedras que siempre chocamos\nGotas de agua que el sol resec\xF3\nBorracheras qeu no terminamos'},{id:45,author:'Selena',song:'Si una vez',image_url:'http://cdn1.uvnimg.com/a6/88/5997825747e5b2a1c070aedeedae/11159456_10152819722057876_6471116984783737507_n.jpg',text:'Si una vez dije que te amaba hoy me arrepiento\nSi una vez dije que te amaba\nNo s\xE9 lo que pens\xE9 estaba loca\nSi una vez dije que te amaba\nY que por t\xED la vida daba\nSi una vez dije que te amaba \nNo lo vuelvo a hacer\nEse error es cosa de ayer'},{id:46,author:'Espinoza Paz',song:'Qu\xE9 mal te ves sin m\xED',image_url:'http://cdn1.uvnimg.com/dims4/default/6dfe63c/2147483647/thumbnail/182x182/quality/75/?url=http%3A%2F%2Fcdn2.uvnimg.com%2F6a%2Fbb%2F2d56b34a4fe0b544027ed37f3900%2Fa.jpeg',text:'Con un trago en la mano\nY en la otra el fulano\nS\xE9 que te vale mi opini\xF3n\nPero te ves muy mal sin m\xED\nY yo tambi\xE9n sin t\xED'},{id:47,author:'Espinoza Paz',song:'Qu\xE9 mal te ves sin m\xED',image_url:'http://cdn1.uvnimg.com/dims4/default/6dfe63c/2147483647/thumbnail/182x182/quality/75/?url=http%3A%2F%2Fcdn2.uvnimg.com%2F6a%2Fbb%2F2d56b34a4fe0b544027ed37f3900%2Fa.jpeg',text:'Que mal te ves sin m\xED\nYa sabes que lo tuyo\nEs el maldito orgullo\nNo finjas m\xE1s mi amor\nQu\xE9 mal te ves sin m\xED'},{id:48,author:'Paquita la del Barrio',song:'Rata de dos patas',image_url:'http://cdn2.uvnimg.com/dims4/default/d1c5a29/2147483647/thumbnail/182x182/quality/75/?url=http%3A%2F%2Fcdn2.uvnimg.com%2Fa8%2F7d%2F38ed7e3e42de89668ced39f06487%2FDSC_3432.jpg',text:'Rata de dos patas\nTe estoy hablando a ti\nPorque un bicho rastrero\nA\xFAn siendo el m\xE1s maldito\nComparado contigo\nSe queda muy chiquito'},{id:49,author:'Paquita la del Barrio',song:'Rata de dos patas',image_url:'http://cdn2.uvnimg.com/dims4/default/d1c5a29/2147483647/thumbnail/182x182/quality/75/?url=http%3A%2F%2Fcdn2.uvnimg.com%2Fa8%2F7d%2F38ed7e3e42de89668ced39f06487%2FDSC_3432.jpg',text:'Alima\xF1a\nCulebra ponzo\xF1osa\nDeshecho de la vida\nTe odio y te desprecio'},{id:50,author:'Noel Torres',song:'No va a ser cuando t\xFA quieras',image_url:'http://cdn2.uvnimg.com/dims4/default/797fbee/2147483647/thumbnail/182x182/quality/75/?url=http%3A%2F%2Fcdn2.uvnimg.com%2F8a%2Fab%2F1c544c6140b99bb83f26da7ae744%2FIMG_4033.JPG',text:'A\xFAn no entiendo\nC\xF3mo me atrev\xED a rogarte\nSi un buen cari\xF1o\nMe lo encuentro en cualquier parte'},{id:51,author:'Noel Torres',song:'No va a ser cuando t\xFA quieras',image_url:'http://cdn2.uvnimg.com/dims4/default/797fbee/2147483647/thumbnail/182x182/quality/75/?url=http%3A%2F%2Fcdn2.uvnimg.com%2F8a%2Fab%2F1c544c6140b99bb83f26da7ae744%2FIMG_4033.JPG',text:'Seguro le buscaste\nPero nadie lleg\xF3 al precio\nQue pagu\xE9 yo por tus besos\nY hoy por m\xE1s que quieras\nYo contigo ya no quiero\nDeja de perder tu tiempo'},{id:52,author:'Banda la Misma Tierra',song:'Ya no me v a doler',image_url:'http://cdn2.uvnimg.com/dims4/default/a7e402a/2147483647/thumbnail/182x182/quality/75/?url=http%3A%2F%2Fcdn4.uvnimg.com%2F3c%2F48%2F4d9f54a14aebb894b2500f99ba5c%2Fbandalamismatierra.jpg',text:'Ya no me va a doler\nProbar tu indiferencia\nMe cueste lo que me cueste\nTe saldr\xE1s de mi cabeza'},{id:53,author:'Christian Nodal',song:'Adi\xF3s amor',image_url:'http://cdn1.uvnimg.com/09/37/43cb577042e3bee64332cc3249d3/16230087-314204058981337-5631415351620141056-n.jpg',text:'Miro tus ojos y no eres fel\xEDz\nY tu mirada no sabe mentir\nNo tiene caso continuar as\xED\nSi no me amas es mejor partir'},{id:54,author:'Christian Nodal',song:'Adi\xF3s amor',image_url:'http://cdn1.uvnimg.com/09/37/43cb577042e3bee64332cc3249d3/16230087-314204058981337-5631415351620141056-n.jpg',text:'Desde hace tiempo ya nada es igual\nNo eres la misma y me tratas mal\nY ante mi Dios te podr\xEDa jurar\nCu\xE1nto te quise y te quiero todav\xEDa'},{id:55,author:'Christian Nodal',song:'Adi\xF3s amor',image_url:'http://cdn1.uvnimg.com/09/37/43cb577042e3bee64332cc3249d3/16230087-314204058981337-5631415351620141056-n.jpg',text:'Adi\xF3s amor me voy de ti\nY esta vez para siempre\nMe ir\xE9 sin marcha atr\xE1s\nPorque ser\xEDa fatal'},{id:56,author:'Calibre 50',song:'Siempre te voy a querer',image_url:'http://cdn3.uvnimg.com/dims4/default/d130ffa/2147483647/thumbnail/182x182/quality/75/?url=http%3A%2F%2Fcdn2.uvnimg.com%2F6d%2Fff%2Fdccaa14e4454b60074d8b1ae3236%2FCALIBRE%252050%2520%28CLEAR%29.jpg',text:'Siempre te voy a querer\nMe asegurar\xE9 de enamorarte cada d\xEDa\nA\xFAn con mis defectos\nA\xFAn con mis locuras y mis tonterias\nSiempre te voy a querer\nTe voy a cuidar por el resto de mi vida'},{id:57,author:'Banda Los Recoditos',song:'Me est\xE1 tirando el rollo',image_url:'http://cdn4.uvnimg.com/45/07/ddafef5d4b53848627b85b050fdd/508160d824784871903f3155d0cdffe7',text:'Me pone nervioso\nCuando la miro a los ojos\nSe lo he notado todo\nQue me est\xE1 tirando el rollo'},{id:58,author:'Banda Los Recoditos',song:'Me est\xE1 tirando el rollo',image_url:'http://cdn4.uvnimg.com/45/07/ddafef5d4b53848627b85b050fdd/508160d824784871903f3155d0cdffe7',text:'Me est\xE1 tirando e rollo\nEst\xE1 m\xE1s claro que el agua\nYa no le har\xE9 m\xE1s al tonto\nYo tambi\xE9n le traigo ganas'},{id:59,author:'Ulises Chaidez y Sus Plebes',song:'Te regalo',image_url:'http://cdn2.uvnimg.com/dims4/default/80b3d40/2147483647/thumbnail/182x182/quality/75/?url=http%3A%2F%2Fcdn2.uvnimg.com%2Fe6%2F4c%2F783ac743491c9a512f9633dd231f%2Fuliceschaidez.jpg',text:'Te regalo un pedacito de cielo\nDe mis labios un te quiero\nDe mis manos las caricias\nQue te van a hacer sentir\nLo que yo siento por t\xED'},{id:60,author:'La Adictiva Banda San Jos\xE9 de Mesillas',song:'Durmiendo en el Lugar Equivocado',image_url:'http://cdn1.uvnimg.com/dims4/default/6f46144/2147483647/thumbnail/182x182/quality/75/?url=http%3A%2F%2Fcdn4.uvnimg.com%2Fff%2Fe4%2F979afed84ff0876e8fd1fb42297d%2FIMG_0540.JPG',text:'Tal vez alguno de los dos ya est\xE9 cansado\nDurmiendo en el lugar equivocado\nTal vez tambi\xE9n te han preguntado\nSi existe alguien m\xE1s y lo has callado'},{id:61,author:'La Adictiva Banda San Jos\xE9 de Mesillas',song:'Durmiendo en el Lugar Equivocado',image_url:'http://cdn1.uvnimg.com/dims4/default/6f46144/2147483647/thumbnail/182x182/quality/75/?url=http%3A%2F%2Fcdn4.uvnimg.com%2Fff%2Fe4%2F979afed84ff0876e8fd1fb42297d%2FIMG_0540.JPG',text:'Despu\xE9s de t\xED \nYa no volv\xED a hacer el amor\nMe siento culpable\nMe acuesto con alguien por obligaci\xF3n\nEstoy confundido durmiendo con ella\nSo\xF1ando contigo'},{id:62,author:'Banda MS',song:'Tengo que colgar',image_url:'http://cdn4.uvnimg.com/21/b7/73fca4a14a9684dab7696848bbb6/MS1.png',text:'Yo no merezco ser segunda opci\xF3n de nadie\nDe todo estoy aqu\xED \nYo soy el responsable\nPor no preguntar antes de empezar...'},{id:63,author:'Banda MS',song:'Tengo que colgar',image_url:'http://cdn4.uvnimg.com/21/b7/73fca4a14a9684dab7696848bbb6/MS1.png',text:'Y si al principio hubieras dicho la verdad\nNo me hubiera enamorado\nYo tambi\xE9n s\xE9 jugar\nSuerte en todo\nTengo que colgar'}];module.exports=legends;

},{}],3:[function(require,module,exports){
'use strict';var matrix={'amoroso':{id:1,legendIds:[1,2,3,4,5,6,9,10,11,12,13,14,15,16,17,18,19,20,23,24,25,26,27,28,29,30,31,53,54,55,56,57,58,59,60]},'cuernos':{id:2,legendIds:[11,12,32,36,37,38,39,41,42,54,57,58,60,61,62,63]},'pisteado':{id:3,legendIds:[7,8,18,19,20,34,35,44,46]},'arrepentido':{id:4,legendIds:[14,18,19,20,21,22,23,24,25,26,33,36,37,45,50,52,60,61,63]},'altiro':{id:5,legendIds:[7,8,34,58]},'tristeando':{id:6,legendIds:[1,2,3,5,6,13,14,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,36,37,43,44,46,47,52,53,55,61]},'echandoperros':{id:7,legendIds:[3,4,7,8,9,10,11,12,15,16,17,35,46,47,56,57,58,59,61]},'dolido':{id:7,legendIds:[1,5,6,10,11,12,13,14,18,19,20,21,22,23,24,27,28,33,36,37,38,39,40,41,42,43,44,45,46,47,48,49,51,55,62]},'encabritado':{id:8,legendIds:[40,41,42,43,48,49,50,51,52,62,63]}};module.exports=matrix;

},{}],4:[function(require,module,exports){
(function (global){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith : arrayIncludes,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, baseUnary(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
      ? new SetCache(othIndex && array)
      : undefined;
  }
  array = arrays[0];

  var index = -1,
      seen = caches[0];

  outer:
  while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (!(seen
          ? cacheHas(seen, computed)
          : includes(result, computed, comparator)
        )) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache
              ? cacheHas(cache, computed)
              : includes(arrays[othIndex], computed, comparator))
            ) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : [];
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order of result values is determined by the
 * order they occur in the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
var intersection = baseRest(function(arrays) {
  var mapped = arrayMap(arrays, castArrayLikeObject);
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped)
    : [];
});

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = intersection;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
(function (global){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */
function iteratorToArray(iterator) {
  var data,
      result = [];

  while (!(data = iterator.next()).done) {
    result.push(data.value);
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    iteratorSymbol = Symbol ? Symbol.iterator : undefined,
    propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor,
    nativeKeys = overArg(Object.keys, Object),
    nativeRandom = Math.random;

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */
function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Gets `n` random elements at unique keys from `collection` up to the
 * size of `collection`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to sample.
 * @param {number} [n=1] The number of elements to sample.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the random elements.
 * @example
 *
 * _.sampleSize([1, 2, 3], 2);
 * // => [3, 1]
 *
 * _.sampleSize([1, 2, 3], 4);
 * // => [2, 3, 1]
 */
function sampleSize(collection, n, guard) {
  var index = -1,
      result = toArray(collection),
      length = result.length,
      lastIndex = length - 1;

  if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
    n = 1;
  } else {
    n = baseClamp(toInteger(n), 0, length);
  }
  while (++index < n) {
    var rand = baseRandom(index, lastIndex),
        value = result[rand];

    result[rand] = result[index];
    result[index] = value;
  }
  result.length = n;
  return result;
}

/**
 * Creates an array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 * @example
 *
 * _.shuffle([1, 2, 3, 4]);
 * // => [4, 1, 3, 2]
 */
function shuffle(collection) {
  return sampleSize(collection, MAX_ARRAY_LENGTH);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to an array.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * _.toArray({ 'a': 1, 'b': 2 });
 * // => [1, 2]
 *
 * _.toArray('abc');
 * // => ['a', 'b', 'c']
 *
 * _.toArray(1);
 * // => []
 *
 * _.toArray(null);
 * // => []
 */
function toArray(value) {
  if (!value) {
    return [];
  }
  if (isArrayLike(value)) {
    return isString(value) ? stringToArray(value) : copyArray(value);
  }
  if (iteratorSymbol && value[iteratorSymbol]) {
    return iteratorToArray(value[iteratorSymbol]());
  }
  var tag = getTag(value),
      func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

  return func(value);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object ? baseValues(object, keys(object)) : [];
}

module.exports = shuffle;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
