$("#shake-image").on("mouseover",function () {
  $( "#shake-image" ).effect( "shake", {"distance":5,"times":5}, 100 );
});

$( "#draggable" ).draggable();
$( "#droppable" ).droppable({
  drop: function( event, ui ) {
      $("#draggable").fadeOut();
  }
});
