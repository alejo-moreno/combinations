import _intersection from 'lodash.intersection';
import matrix from 'matrix';
import legends from 'legends';

var gameContainer = $('.game-container');
var started = false

gameContainer.on('click', '.game-buttons a', function (event) {
    var buttonSelected = $(this);
    buttonSelected.toggleClass('active');
    var idLegends = getIntersection();
    appendCards(idLegends);

    event.preventDefault();    
})

function getIntersection() {
    var arraySelected = [];
    //Sets intersected elements into selected array
    gameContainer
        .find('a.active')
        .map(function () {
            arraySelected.push(matrix[$(this).data('name')].legendIds);
        });
    return _intersection.apply(null, arraySelected);
}

function appendCards(idLegends) {

    var carousel = gameContainer.find('.game-result');
    if (!started) {
        carousel.slick();
        started = true;
    }

    carousel.slick('removeSlide', null, null, true);
    if(idLegends.length == 0) {
        return  carousel.slick('slickAdd',renderEmptyCard() );
    }
    //Iterate over legend ids and find the correspondent text in legends.js
    idLegends.map((id, index) => {
        carousel.slick('slickAdd', renderCardLegend(legends.find(x => x.id == id), idLegends.length, index));
    });

}

function renderCardLegend(legend, legendsLenght, index) {
    console.log(legend.text.split("\n"))
    var template = `<div class="card-legend">
                        <div class="card-legend-author">
                         <img src="http://cdn2.uvnimg.com/e1/37/d074a5e64ad7a9e7e539848d4ecc/rlc-selena.png">
                            <div class="card-legend-author-song">
                                <p>${legend.author}</p>
                                <p>${legend.song}</p>
                            </div>
                        </div>
                                <div class="card-legend-text">
                                    “${legend.text.replace(/\n/g, '<br>')}”        
                                </div>
                        <div class="card-legend-socials">
                            <a href="#">
                              <img src="http://cdn1.uvnimg.com/2e/38/551afd624e6ab7019399206b6501/rlc-share-fb.png">                            
                            </a>
                            <a href="#">
                              <img src="http://cdn1.uvnimg.com/90/a3/ce81f55a46578f02de5cff371636/rlc-share-tw.png">                            
                            </a>
                        </div>
                        <div class="card-legend-page">
                            ${index + 1}/${legendsLenght}
                        </div>
                    </div>`;
    return template;
}

function renderEmptyCard(){
    var template = `<div class="card-legend">                        
                        <div class="card-legend-content">
                            <p>Intenta de nuevo, <span>no tenemos resultados.</span></p>
                        </div>                        
                        <div class="card-legend-page">
                            0/0
                        </div>
                    </div>`;
    return template;
}
