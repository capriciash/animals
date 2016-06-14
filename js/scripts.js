$(document).ready(function() {
  $("form#animal").submit(function(event) {
    var animal1 = $("input#animal1").val();
    var animal2 = $("input#animal2").val();
    var animal3 = $("input#animal3").val();
    var animalArray = [animal1, animal2, animal3];
    var newAnimalArray = animalArray.slice();
    alert(newAnimalArray[1,0,2]);
    // var animalsArray = $(".animalsCheck:checked").val();
    //
    // alert(animalsArray);
    event.preventDefault();
  });
});
