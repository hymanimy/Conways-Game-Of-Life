let chanceOfLifeSlider = document.getElementById("chanceOfLifeRange");

chanceOfLifeSlider.oninput = function(){
    document.getElementById("sliderPercentage").innerHTML = chanceOfLifeSlider.value + "%";
    reset(chanceOfLifeSlider.value/100);
}
