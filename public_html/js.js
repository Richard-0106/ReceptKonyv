
var receptTomb=[];

$(function(){

  //adat betöltés
  
        $.ajax({
            url: "receptek.json",
            success: function(result){
        receptTomb=result;
        console.log(result);
            tablazatLetrehozas();
  }}
      );
      $("#bal").click(balraLeptet);
      $("#jobb").click(jobbraLeptet);
      $("article").on("click","tr",receptKivalaszt);
});
function tablazatLetrehozas(){
    $("article").append("<table>");
    $("article table").append("<tr><th>Receptnev</th><th>Elkészítési idő</th><th>Leírás</th><th>Kép</th><th>Hozzávalók</th></tr>");
    
    for (var i = 0; i < receptTomb.length; i++) {
        $("article table").append("<tr id='"+i+"'>");
        for(var item in receptTomb[i]){
            
            $("article table tr").eq(i+1).append("<td>"+ receptTomb[i][item]+ "</td>");
        }
    }
    //$("tr").click(receptKivalaszt);
}
function receptKivalaszt(){
    
    console.log("itt vagyok");
    var id = $(this).attr("id");
    console.log(id);
    console.log(receptTomb[id]);
    leptetoIndex=id;
    
    megjelenit(id);
}

function megjelenit(id){
    $("#recept").empty();
    $("#recept").append("<img src='"+receptTomb[id].kep +"' alt='"+receptTomb[id].nev+"'>");
    $("#recept").append("<h2>");
    $("#recept h2").append(receptTomb[id].nev);
    $("#recept").append("<p>");
    $("#recept p").append(receptTomb[id].leiras);
    $("#recept").append("<p>");
    $("#recept p").eq(1).append("Elkészítési idő: "+ receptTomb[id].ido);
    
    $("#recept").append("<h3>");
    $("#recept h3").append("Hozzavalók");
    $("#recept").append("<ul>");
    var hozzavalok=receptTomb[id].hozzavalok;
    console.log(hozzavalok);
    for (var i = 0; i < hozzavalok.length; i++) {
        for (var item in hozzavalok[i]) {
            $("section ul").append("<li>" + item + " " + hozzavalok[i][item]+"</li>");
        }
    }
    
}
var leptetoIndex=0;
function balraLeptet(){
    leptetoIndex--;
    if(leptetoIndex<0){
        leptetoIndex=receptTomb.length-1;
    }
    
    console.log(leptetoIndex);
    megjelenit(leptetoIndex);
    

}
function jobbraLeptet(){
      leptetoIndex++;
      if(leptetoIndex>receptTomb.length-1){
          leptetoIndex=0;
          
      }
    megjelenit(leptetoIndex);
    
    
}
