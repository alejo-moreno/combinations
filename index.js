import _intersection from 'lodash.intersection';
import _shuffle from 'lodash.shuffle';
import matrix from 'matrix';
import legends from 'legends';

var gameContainer = $('.game-container');
var carousel = gameContainer.find('.game-result');
var gameButtons = gameContainer.find('.game-buttons')
var isEmpty = true

gameContainer.on('click', '.game-buttons a', function (e) {
    var buttonSelected = $(this);
    buttonSelected.toggleClass('active');
    var idLegends = getIntersection();
    appendCards(idLegends);
})

function getIntersection() {
    var arraySelected = [];
    //Sets intersected elements into selected array
    var arrActive = gameButtons.find('a.active');

    arrActive.map(function () {
        arraySelected.push(matrix[$(this).data('name')].legendIds);
    });
    return _shuffle(_intersection.apply(null, arraySelected));
}

function appendCards(idLegends) {

    var arrayLength = idLegends.length;

    if (isEmpty) {
        carousel.empty();
    } else {
        carousel.slick('removeSlide', null, null, true);
        carousel.slick('unslick');
    }

    if (arrayLength == 0) {
        isEmpty = true;
        return carousel.append(renderEmptyCard());
    }

    //Iterate over legend ids and find the correspondent text in legends.js
    idLegends
        .forEach(function (l, i) {
            carousel.append(renderCardLegend(legends[l - 1], arrayLength, i));
        });

    carousel.slick();
    isEmpty = false;

}

function renderCardLegend(legend, legendsLenght, index) {
    var shareTxt = legend
        .text
        .replace(/\n/g, ' ')
    shareTxt = shareTxt
        .charAt(0)
        .toUpperCase() + shareTxt
        .slice(1)
        .toLowerCase();

    const template = `<div class="card-legend">
                        <div class="card-legend-author">                         
                            <svg width="55px" height="55px" viewBox="0 0 67 67" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">      
                                <defs>
                                    <circle id="path-1" cx="23.2142857" cy="23.2142857" r="23.2142857"></circle>
                                </defs>
                                <g id="Final-Version" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="juego_interactivo_desktop_screen_2" transform="translate(-715.000000, -751.000000)">
                                        <g id="Selena" transform="translate(716.000000, 752.000000)">
                                            <g transform="translate(9.285714, 9.285714)">
                                                <mask id="mask-2" fill="white">
                                                    <use xlink:href="#path-1"></use>
                                                </mask>
                                                <use id="Mask" fill="#D8D8D8" xlink:href="#path-1"></use>
                                                <image id="rs-634x1024-150716105835-634.Selena-Perez.jl.071615" mask="url(#mask-2)" x="-9.928571429" y="0" width="65" height="65" xlink:href="${legend
        .image_url}"></image>
                                            </g>
                                            <path d="M32.5,65 C50.4492544,65 65,50.4492544 65,32.5 M32.5,0 C14.5507456,0 0,14.5507456 0,32.5" id="Circle" stroke="#B52BA1" stroke-width="1.2"></path>
                                            <circle id="Circle" stroke="#715CAE" stroke-width="1.2" cx="32.5" cy="32.5" r="27.3412698"></circle>
                                            <path d="M1.86363291,43.3737658 C5.03609748,52.3116428 12.0089739,59.4499628 20.8388236,62.8452872" id="Circle" stroke="#FACE39" stroke-width="1.2"></path>
                                            <path d="M43.429031,1.42918604 C46.6014956,10.3670631 53.574372,17.505383 62.4042217,20.9007075" id="Circle" stroke="#FACE39" stroke-width="1.2"                            transform="translate(52.916626, 11.164947) rotate(178.000000) translate(-52.916626, -11.164947) "></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <div class="card-legend-author-song">
                                <p>${legend
        .author}</p>
                                <p>${legend
        .song}</p>
                            </div>
                        </div>
                                <div class="card-legend-text">
                                    “${legend
        .text
        .replace(/\n/g, '<br>')}”        
                                </div>
                        <div class="card-legend-socials">
                            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http://www.univision.com/test/rlc-game&p[title]=${encodeURIComponent(shareTxt)}&p[summary]=${encodeURIComponent(shareTxt)}">
                              <img src="http://cdn1.uvnimg.com/2e/38/551afd624e6ab7019399206b6501/rlc-share-fb.png">                            
                            </a>
                            <a target="_blank" href="https://twitter.com/intent/tweet?source=http://www.univision.com/test/rlc-game&amp;text=http://www.univision.com/test/rlc-game ${shareTxt}">
                              <img src="http://cdn1.uvnimg.com/90/a3/ce81f55a46578f02de5cff371636/rlc-share-tw.png">                            
                            </a>
                        </div>
                        <div class="card-legend-page">
                            ${index + 1}/${legendsLenght}
                        </div>
                    </div>`;
    return template;
}

function renderEmptyCard() {
    var template = `<div class="card-legend">                        
                        <div class="card-legend-content">                         
                            <p>No hay palabras para decir lo que sientes. <span>Inténtalo de nuevo.</span></p>
                        </div>                        
                        <div class="card-legend-page">
                            0/0
                        </div>
                    </div>`;
    return template;
}
