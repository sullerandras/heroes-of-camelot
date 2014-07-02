var Tabletop = require('tabletop')
var fs = require('fs')

function p(str){
  return str || '""'
}
function generate_cardsjs(data, tabletop) {
  var s = 'var cards = [\n'
  for(var i in data.elements){
    var obj = data.elements[i]
    var combos = '['
    for(var j = 1; j <= 7; j++){
      var combo = obj['skill' + j]
      if (combo && combo != '-') {
        combos += '"'+combo+'",'
      }
    }
    combos += ']'
    s += '  new Card("'+obj.name+'", "'+obj['class']+'", '+
      p(obj.stars)+', '+p(obj.mana)+', '+p(obj.maxlevel)+', '+
      p(obj.hp)+', '+p(obj.atk)+', '+combos+'),\n'
  }
  s += ']\n'
  fs.writeFile("cards.js", s)
}
function generate_combosjs(data, tabletop){
  var s = 'var combos = [\n'
  for(var i in data.elements){
    var obj = data.elements[i]
    var cards = '['
    for(var j = 1; j <= 4; j++){
      var card = obj['card' + j]
      if (card) {
        cards += '"'+card+'",'
      }
    }
    cards += ']'
    s += '  new Combo("'+obj.name+'", "'+obj.description+'", '+cards+'),\n'
  }
  s += ']\n'
  fs.writeFile("combos.js", s)
}
function update(){
  Tabletop.init( { key: '0AgrwVCi0Zp_LdHF0d1Y5R3NRTXFtZk1rUjJaUEI2dUE',
                   callback: function(data, tabletop){
                     generate_cardsjs(data.Cards, tabletop)
                     generate_combosjs(data.Skills, tabletop)
                   },
                 simpleSheet: false } )
}

update()