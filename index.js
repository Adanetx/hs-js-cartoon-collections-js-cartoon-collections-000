
  function dwarfRollCall(dwarves) {
    
  var y = [ ];
 

for(let i = 0; i < dwarves.length; i++){
  
 y[i] = ` ${i + 1}. ${dwarves[i]}`

}

return `${y}`;
}

function summonCaptainPlanet(planeteerCalls){
  
  var str = [ ];

for(let i = 0; i < planeteerCalls.length; i++)

{
  str[i] = planeteerCalls[i].concat('!').toUpperCase();
  
}
return str;
  
}

function longPlaneteerCalls(words) {
  
  for(let i = 0; i < words.length; i++)
  
    {
        if(words[i].length > 4)

        return true;
    }
    
    return false;
}
    function findTheCheese (foods)
    {
      
    for(let i = 0; i < foods.length; i++)
    {
        if(foods[i] === 'cheese')

        return foods[i];
    }

    return "no cheese!";
      
}

