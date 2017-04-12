import _intersection from 'lodash.intersection';
import matrix from 'matrix';
import legends from 'legends';

var gameContainer = $('.game-container');
var started = false

gameContainer.on('click', '.game-buttons a', function () {
    var buttonSelected = $(this);
    buttonSelected.toggleClass('active');
    var idLegends = getIntersection();
    appendCards(idLegends);
})

function getIntersection() {
    var arraySelected = [];
    //Sets intersected elements into selected array
    gameContainer.find('a.active').map(function () { 
        arraySelected.push(matrix[$(this).data('name')].legendIds); 
    });
    return  _intersection.apply(null, arraySelected);    
}

function appendCards(idLegends){
    //carousel.slick('removeSlide', null, null, true);    
    var carousel = gameContainer.find('.game-result'); 
    if(!started)  {
        carousel.slick();
        started = true;    
    } 
    
    carousel.slick('removeSlide', null, null, true);            
    //Iterate over legend ids and find the correspondent text in legends.js
    idLegends.map(id => {        
        //carousel.append(renderCardLegend(legends.find(x => x.id == id)));
         carousel.slick('slickAdd',renderCardLegend(legends.find(x => x.id == id)));
    });

    
    
}

function renderCardLegend(legend){
    console.log(legend.text.split("\n"))
    var template = `<div class="card-legend">
                        <div class="card-legend-author"></div>
                                <div class="card-legend-text">
                                    ${legend.text.replace(/\n/g,'<br>')}        
                                </div>
                        <div class="card-legend-socials"></div>
                    </div>`;
    return template ;
}