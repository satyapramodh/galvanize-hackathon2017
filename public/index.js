function displayOne(){
  $( "body" ).html("<a-scene>"+
  "<a-box color='red' position='0 0 0' rotation='0 45 0 ' scale='2 1 3'></a-box>" +
  "</a-scene>");
}

function displayTwo(){
  $( "body" ).html("<a-scene>"+
  "<a-box src='https://i.imgur.com/mYmmbrp.jpg' position='0 0 0' rotation='0 0 0' scale='1 1 1'></a-box>"+
  "<a-sky color='#222'></a-sky>" +
  "</a-scene>");
}

function displayThree(){
  

   $( "body" ).html("<a-scene>"+
  "<a-sphere position='0 .5 0' radius='1.25' color='blue'>" +
      
      "<a-sphere position='   0 1   .1' radius='1' color='green'></a-sphere>" +
      "<a-sphere position='   0  2    .25' radius='.75' color='red'></a-sphere>" +
      "<a-sphere position='   0  2.5 .5' radius='.5' color='yellow'></a-sphere>" +
      
   "</a-sphere>" +
  "</a-scene>");
}

function displayFour(){
  $( "body" ).html("<a-scene>"+
  "<a-assets>"
    "<a-asset-item id='optimerBoldFont' src='https://rawgit.com/mrdoob/three.js/dev/examples/fonts/optimer_bold.typeface.json'></a-asset-item>" + 
  "</a-assets> " +    
  "<a-entity text-geometry='value: Dog?; font: #optimerBoldFont'></a-entity>" +    
  "<a-marker-camera preset='hiro'></a-marker-camera>" +
  "</a-scene>");
}