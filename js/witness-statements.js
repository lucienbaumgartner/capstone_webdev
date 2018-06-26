function unhide(clickedButton, divID) {
var item = document.getElementById(divID);
if (item) {
    if(item.className=='folded'){
        item.className = 'unfolded' ;
        clickedButton.value = 'Show Less'
    }else{
        item.className = 'folded';
        clickedButton.value = 'Show More'
    }
}}
