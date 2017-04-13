(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _lodash = require('lodash.intersection');

var _lodash2 = _interopRequireDefault(_lodash);

var _matrix = require('matrix');

var _matrix2 = _interopRequireDefault(_matrix);

var _legends = require('legends');

var _legends2 = _interopRequireDefault(_legends);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gameContainer = $('.game-container');
var started = false;

gameContainer.on('click', '.game-buttons a', function (event) {
    var buttonSelected = $(this);
    buttonSelected.toggleClass('active');
    var idLegends = getIntersection();
    appendCards(idLegends);

    event.preventDefault();
});

function getIntersection() {
    var arraySelected = [];
    //Sets intersected elements into selected array
    gameContainer.find('a.active').map(function () {
        arraySelected.push(_matrix2.default[$(this).data('name')].legendIds);
    });
    return _lodash2.default.apply(null, arraySelected);
}

function appendCards(idLegends) {

    var carousel = gameContainer.find('.game-result');
    if (!started) {
        carousel.slick();
        started = true;
    }

    carousel.slick('removeSlide', null, null, true);
    if (idLegends.length == 0) {
        return carousel.slick('slickAdd', renderEmptyCard());
    }
    //Iterate over legend ids and find the correspondent text in legends.js
    idLegends.map(function (id, index) {
        carousel.slick('slickAdd', renderCardLegend(_legends2.default.find(function (x) {
            return x.id == id;
        }), idLegends.length, index));
    });
}

function renderCardLegend(legend, legendsLenght, index) {
    console.log(legend.text.split("\n"));
    var template = '<div class="card-legend">\n                        <div class="card-legend-author">\n                         <img src="http://cdn2.uvnimg.com/e1/37/d074a5e64ad7a9e7e539848d4ecc/rlc-selena.png">\n                            <div class="card-legend-author-song">\n                                <p>' + legend.author + '</p>\n                                <p>' + legend.song + '</p>\n                            </div>\n                        </div>\n                                <div class="card-legend-text">\n                                    \u201C' + legend.text.replace(/\n/g, '<br>') + '\u201D        \n                                </div>\n                        <div class="card-legend-socials">\n                            <a href="#">\n                              <img src="http://cdn1.uvnimg.com/2e/38/551afd624e6ab7019399206b6501/rlc-share-fb.png">                            \n                            </a>\n                            <a href="#">\n                              <img src="http://cdn1.uvnimg.com/90/a3/ce81f55a46578f02de5cff371636/rlc-share-tw.png">                            \n                            </a>\n                        </div>\n                        <div class="card-legend-page">\n                            ' + (index + 1) + '/' + legendsLenght + '\n                        </div>\n                    </div>';
    return template;
}

function renderEmptyCard() {
    var template = '<div class="card-legend">                        \n                        <div class="card-legend-content">\n                            <p>Intenta de nuevo, <span>no tenemos resultados.</span></p>\n                        </div>                        \n                        <div class="card-legend-page">\n                            0/0\n                        </div>\n                    </div>';
    return template;
}

},{"legends":2,"lodash.intersection":4,"matrix":3}],2:[function(require,module,exports){
'use strict';

var legends = [{
    id: 1,
    author: 'Jenni Rivera',
    song: 'Basta ya',
    text: 'Y basta ya de tu inconsciencia\n            De esta forma tan absurda de ver a diario\n            Como echas a la basura mi coraz\xF3n\n            Lo que te doy con rabra fe de ver en t\xED felicidad'
}, {
    id: 2,
    author: 'Selena',
    song: 'Amor Prohibido',
    text: 'Amor prohibido murmuran por las calles\n            Porque somos de distitas sociedades\n            Amor prohibido nos dice todo el mundo\n            El dinero no importa en ti y en mi, nie en el coraz\xF3n'
}, {
    id: 3,
    author: 'Selena',
    song: 'Amor Prohibido',
    text: 'Aunque soy pobre todo esto que te doy\n            Vale m\xE1s que el dinero poryqe s\xED es amor'
}, {
    id: 4,
    author: 'Selena',
    song: 'Amor Prohibido',
    text: 'Con unas ansias locas quiero verte hoy\n            Espero ese momento en que escuche tu voz'
}, {
    id: 5,
    author: 'Marco Antonio Solis',
    song: 'Basta Ya',
    text: 'Desde hoy he prohibido a mis ojos\n            El mirarte de nuevo a la cara'
}, {
    id: 6,
    author: 'Marco Antonio Solis',
    song: 'Basta Ya',
    text: 'Tengo que renunciar a quererte antes que ya no\n            Tenga remedio si mi vida la echara tu suerte \n            Mi camino ser\xE0 un sementerio'
}, {
    id: 7,
    author: 'Ninel Conde',
    song: 'El Bombón Asesino',
    text: 'Mi cinturita parace que a todos agita\n            Si me pongo una falda cortita\n            El meneo me la sube todita'
}, {
    id: 8,
    author: 'Ninel Conde',
    song: 'El Bombón Asesino',
    text: 'Me dicen bomb\xF3n insaciable que soy un \n            Bomb\xF3n masticable. Me dicen bomb\xF3n'
}, {
    id: 9,
    author: 'Ana Bárbara',
    song: 'Bandido',
    text: 'T\xFA lo sabes que la mujer que se enamora\n            Es cap\xE1z de cualquier cosa\n            Y yo doy el alma por tu amor'
}, {
    id: 10,
    author: 'Ana Bárbara',
    song: 'Bandido',
    text: 'Te buscar\xE9 bandido, te atrapar\xE9 maldito, te lo juro\n            Pagar\xE1s por mi amor'
}, {
    id: 11,
    author: 'Ana Bárbara',
    song: 'Loca',
    text: 'Con u\xF1as y con dientes\n            Ser\xE9 como una fiera\n            Voy a pelear de frente\n            Su amor contra cualquiera'
}, {
    id: 12,
    author: 'Ana Bárbara',
    song: 'Loca',
    text: 'Por culpa de ese amor estoy llorando\n            Y soy como una gata sin guarida\n            Las noches me las paso dando vueltas\n            Sigu\xE9ndole las huellas a escondidas'
}, {
    id: 13,
    author: 'Joan Sebastian',
    song: 'Tatuajes',
    text: 'Aunue eres mi necesidad, te dejo\n            Pero eso de que te olvide, no s\xE9'
}, {
    id: 14,
    author: 'Joan Sebastian',
    song: 'Tatuajes',
    text: 'Tatuajes de tus besos llevo en todo mi cuerpo\n            Tatuados sobre el tiempo, el tiempo que te conoc\xED\n            Se me hizo vicio ver tus ojos, respirar por tu aliento\n            Me voy, pero te llevo dentro de m\xED'
}, {
    id: 15,
    author: 'Rocío Durcal',
    song: 'El amor más bonito',
    text: 'Eres el amor m\xE0s bonito que Tengo\n            La verdad en la cual me mantengo'
}, {
    id: 16,
    author: 'Rocío Durcal',
    song: 'El amor más bonito',
    text: 'Eres el sentir que me toca vivir\n            Llena de ilusiones y motivaciones\n            Nuevas para m\xED'
}, {
    id: 17,
    author: 'Rocío Durcal',
    song: 'El amor más bonito',
    text: 'Tienes, en tus ojos mi f\xE9 y esperanza\n            Esa magia que nunca me cansa\n            Llevas en tu ser, tanto que aprender'
}, {
    id: 18,
    author: 'Los Recoditos',
    song: 'Ando Bien Pedo',
    text: 'S\xE9 que estoy perdido\n            S\xE9 que estoy muriendo sin tu amor\n            Sin tu calor por tu adi\xF3s'
}, {
    id: 19,
    author: 'Los Recoditos',
    song: 'Ando Bien Pedo',
    text: 'Ando bien pedo, bien loco\n            Cant\xE1ndole al recuerdo mis penas\n            Pidiendo tu recuerdo y tus besitos'
}, {
    id: 20,
    author: 'Los Recoditos',
    song: 'Ando Bien Pedo',
    text: 'S\xE9 que es un castigo\n            Que me des tu olvido\n            Qu\xE9 dolor, cu\xE1nto dolor siento yo'
}, {
    id: 21,
    author: 'Ana Gabriel',
    song: 'Tú lo Decidiste',
    text: 'Te fuiste sin siquiera despedirte\n\t    Pensaste y despu\xE9s me buscar\xE1\n\t    Pues mira te fallaron tus deseos\n\t    Y al final de cuentas fuiste t\xFA quien me extra\xF1\xF3'
}, {
    id: 22,
    author: 'Ana Gabriel',
    song: 'Tú lo Decidiste',
    text: 'Nadie sabe lo que tiene \n\t    Hasta que lo ve perdido\n\t    Nunca t\xFA debiste decidirlo,\n\t    Pues creo que eran cosas de los dos,\n\t    Nunca tu debiste decidirlo,\n\t    Pues mira ya aprendiste la lecci\xF3n'
}, {
    id: 23,
    author: 'Ana Gabriel',
    song: 'Tú lo Decidiste',
    text: 'Y vienes a contarme tu tristeza,\n\t    Y quieres aclarar la situaci\xF3n\n\t    Pretendes que yo olvide los detalles,\n\t    Que perdone todo y volvamos a empezar'
}, {
    id: 24,
    author: 'Julión Álvarez',
    song: 'El Amor de su Vida',
    text: 'Yo, yo era el amor de su vida\n\t    Yo disfrut\xE9 sus caricias y su primer beso\n\t    Fue m\xEDo y fue m\xEDa'
}, {
    id: 25,
    author: 'Julión Álvarez',
    song: 'El Amor de su Vida',
    text: 'Yo, no supe lo que ten\xEDa,\n\t    Me acostumbr\xE9 a la rutina y la hica llorar\n\t    Se maldito d\xEDa'
}, {
    id: 26,
    author: 'Julión Álvarez',
    song: 'El Amor de su Vida',
    text: 'Puede que te digan\n\t    Que he guardado todas tus fotograf\xEDas\n\t    Que me aferro como un loco en esperanza\n\t    Que alg\xFAn d\xEDa te despiertes recordando\n\t    Que a pesar de mis errores'
}, {
    id: 27,
    author: 'Selena',
    song: 'Como la flor',
    text: 'Yo s\xE9 que tienes un nuevo amor\n\t    Sin embargo, te deseo lo mejor\n\t    Si en m\xED, no encontraste felicidad\n\t    Tal vez, alguien m\xE1s te la dar\xE1'
}, {
    id: 28,
    author: 'Selena',
    song: 'Como la flor',
    text: 'Si vieras c\xF3mo duele perder tu amor\n\t    Con tu adi\xF3s te llevaste mi coraz\xF3n'
}, {
    id: 29,
    author: 'Los Ángeles Azules',
    song: 'Cómo te voy a Olvidar',
    text: 'Si en una rosa est\xE1s t\xFA\n\t    Si en cada respirar est\xE1s t\xFA\n\t    C\xF3mo te voy a olvidar'
}, {
    id: 30,
    author: 'Los Ángeles Azules',
    song: 'Cómo te voy a Olvidar',
    text: 'C\xF3mo no acordarme de t\xED\n\t    De qu\xE9 manera olvidarte\n\t    Si todo me recuerda a t\xED\n\t    En tods partes est\xE1s t\xFA'
}, {
    id: 31,
    author: 'Banda MS',
    song: 'Me vas a Extrañar',
    text: 'No me alcanz\xF3 el cari\xF1o \n\t    Para verte contenta\n\t    Te amaba como un loco\n\t    Y no te diste cuenta'
}, {
    id: 32,
    author: 'Banda MS',
    song: 'Me vas a Extrañar',
    text: 'De qu\xE9 sirvi\xF3 rogarte\n\t    Para que te quedaras\n\t    Mi error fue darte todo\n\t    Cuando no vales nada'
}, {
    id: 33,
    author: 'Banda MS',
    song: 'Me vas a Extrañar',
    text: 'Me vas a extra\xF1ar\n\t    Te apuesto lo que quieras que vas a buscarme\n\t    Y vas a llorar porque t\xFA a mi\n\t    Jam\xE1s supiste valorarme'
}, {
    id: 34,
    author: 'Banda El Recodo',
    song: 'El Sinaloense',
    text: 'Por Dios que borracho vengo\n\t    Que me echan con la "tambora"\n\t    Que me toquen el "Quelite"\n\t    Despu\xE9s el "Ni\xF1o perdido"\n\t    Y por \xFAltimo "El torito"\n\t    Pa\' que vean c\xF3mo le brinco'
}, {
    id: 35,
    author: 'Banda El Recodo',
    song: 'El Sinaloense',
    text: 'Soy del mero Sianloa\n\t    Donde se rompen las olas\n\t    Y busco una que ande sola\n\t    Y que no tenga marido\n\t    Pa\' no estar comprometido\n\t    Cuando resulte la boda'
}, {
    id: 36,
    author: 'La arrolladora Banda El Limón',
    song: 'Me va a pesar',
    text: 'Nunca lo entend\xED, t\xFA me diste todo\n\t    Y yo jam\xE1s te daba lo que merec\xEDas\n\t    Cu\xE1ntas veces te he visto llorar y ha sido culpa m\xEDa\n\t    Entre m\xE1s buena eras conmigo, yo m\xE1s te ofend\xEDa'
}, {
    id: 37,
    author: 'La arrolladora Banda El Limón',
    song: 'Me va a pesar',
    text: 'Me va a pesar, yo s\xE9 bien que me va a pesar\n\t    Cuando te vea con alguien m\xE1s y te empiece a besar\n\t    No valor\xE9 lo uie me dabas, tu coraz\xF3n lastimaba\n\t    S\xF3lo te hac\xEDa llorar'
}, {
    id: 38,
    author: 'Chayito Valdéz',
    song: 'Tres veces te engañé',
    text: 'T\xFA que me dejabas\n\t    Yo que te esperaba\n\t    Porque tontamente\n\t    Simpre te era fiel'
}, {
    id: 39,
    author: 'Chayito Valdéz',
    song: 'Tres veces te engañé',
    text: 'Tres veces te enga\xF1\xE9\n\t    La primera por coraje\n\t    La segunda por cari\xF1o\n\t    La tercera por placer'
}];

module.exports = legends;

},{}],3:[function(require,module,exports){
'use strict';

var matrix = {

    'amoroso': {
        id: 1,
        legendIds: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    },
    'cuernos': {
        id: 2,
        legendIds: [11, 12, 32, 36, 37, 38, 39]
    },
    'pisteado': {
        id: 3,
        legendIds: [7, 8, 18, 19, 20, 34, 35]
    },
    'arrepentido': {
        id: 4,
        legendIds: [14, 18, 19, 20, 21, 22, 23, 24, 25, 26, 33, 36, 37]
    },
    'altiro': {
        id: 5,
        legendIds: [7, 8, 34]
    },
    'tristeando': {
        id: 6,
        legendIds: [1, 2, 3, 5, 6, 13, 14, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 36, 37]
    },
    'echandoperros': {
        id: 7,
        legendIds: [3, 4, 7, 8, 9, 10, 11, 12, 15, 16, 17, 35]
    },
    'dolido': {
        id: 7,
        legendIds: [1, 5, 6, 10, 11, 12, 13, 14, 18, 19, 20, 21, 22, 23, 24, 27, 28, 33, 36, 37, 38, 39]
    },
    'encabritado': {
        id: 8,
        legendIds: []
    }
};

module.exports = matrix;

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
},{}]},{},[1]);
