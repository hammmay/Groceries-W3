$(document).ready(function() {

    var groceryList = [];
    $("#addItem").click(function(event){
      event.preventDefault();

      .groceryList.push($("#textfield").val());

    $("#textField").val("");
    $("#textField").focus();

    console.log(groceryList);
  });

  $("#submit").click(function(event){
    event.preventDefault();

    $("#form").hide();

    groceryList.sort();

    groceryList.forEach(function(item){

      $("#results").append("<li>" + item + "</li>");
    });

    console.log("hidden");
});

// NOTE: to sort them alphabetically : ArrayName.sort()
