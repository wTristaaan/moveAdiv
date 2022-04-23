/* get grab zone */ 
/* obtient la zone a attrapée */
moveable = document.getElementById('moveable')

/* get the element to move */ 
/* obtient l'élément à bouger */
folder = document.getElementById('folder')

/* new postion of element */
/* nouvelle position de l'élément */
function newPosition(r) {
    /* get sinus of position */
    /* obtient le sinus de la postion */
    x = 400 * Math.sin(r),
    /* get cosinus of position */
    /* obtine le cosinus de la postion */
    y = 400 * Math.cos(r);

    /* add new position calculed to element */
    /* ajoute la nouvelle position à l'élément */
    folder.style.left = x + 'px';
    folder.style.top = y + 'px';
}

/* dragging an element for smooth movement */
/* glessement de l'élément pour un mouvement fluid */
function slide(e) {

    /* give mouse position of element --> + 250 to let mouse at top of window */
    /* donne la postion de la souris à l'élément --> +  250 pour laisser la souris en haut de la fenêtre */
    folder.style.top = e.clientY +250 + 'px';
    folder.style.left = e.clientX + 'px';
    newPosition(e);
}

moveable.addEventListener('mousedown', function(e){
    /* when mouse down nothing happens */
    /* quand le clique gauche est enfoncé, rien ne se passe */
    e.preventDefault()
    /* when mouse is down and mouse dragging into all page, the slide function are used this one call newPostion() */
    /* quand le clique gauche est enfoncé et que la souris est en mouvement dans toute la page, la function slide est utilisée. 
    Cette dernière fera appelle à newposition() */
    window.addEventListener('mousemove', slide, false);
}, false)

/* when the mouse up, the mouse move event and the slide function are canceled */
/* quand le bouton de la souris est relaché, l'événement de mouvement et la fonction slide sont annulés */
window.addEventListener('mouseup', function( e ) {
    this.removeEventListener('mousemove', slide, false);
}, false);
