var BasicCard = require('./BasicCard');

var ClozeCard = function(text, cloze){
    this.text = text;
    this.cloze = cloze;
}

// Function that removes the text 
ClozeCard.prototype.deletedPortionText = function() {
    return this.cloze;
}; 

//Functon that removes the cloze deletion from the full text:
ClozeCard.prototype.partialText = function() {
    var str = this.text;
    str = str.replace("Who", "...");
    str = str.replace("?", ".");
    return str;
};

ClozeCard.prototype.fullText = function() {
    var str = this.cloze + this.text;
    str = str.replace("Who", "");
    return str;
}; 

var firstPresidentCloze = new ClozeCard(BasicCard.firstPresident.front, BasicCard.firstPresident.back);
var longestTermCloze = new ClozeCard(BasicCard.longestTerm.front, BasicCard.longestTerm.back);
var nonConsecutiveTermsCloze = new ClozeCard(BasicCard.nonConsecutiveTerms.front, BasicCard.nonConsecutiveTerms.back);
var youngestPresidentCloze = new ClozeCard(BasicCard.youngestPresident.front, BasicCard.youngestPresident.back);
var whiteHouseCloze = new ClozeCard(BasicCard.whiteHouse.front, BasicCard.whiteHouse.back);
var usBornCloze = new ClozeCard(BasicCard.usBorn.front, BasicCard.usBorn.back);
var patentPresidentCloze = new ClozeCard(BasicCard.patentPresident.front, BasicCard.patentPresident.back);
var divorcedPresidentCloze = new ClozeCard(BasicCard.divorcedPresident.front, BasicCard.divorcedPresident.back);
var pressPresidentCloze = new ClozeCard(BasicCard.pressPresident.front, BasicCard.pressPresident.back);
var unaffiliatedPresidentCloze = new ClozeCard(BasicCard.unaffiliatedPresident.front, BasicCard.unaffiliatedPresident.back);
var clozeCard =  new ClozeCard(BasicCard.firstPresident.front, BasicCard.firstPresident.back);

module.exports = {
    firstPresidentCloze: firstPresidentCloze,
    longestTermCloze: longestTermCloze,
    nonConsecutiveTermsCloze: nonConsecutiveTermsCloze,
    youngestPresidentCloze: youngestPresidentCloze,
    whiteHouseCloze: whiteHouseCloze,
    usBornCloze: usBornCloze,
    patentPresidentCloze: patentPresidentCloze,
    divorcedPresidentCloze: divorcedPresidentCloze,
    pressPresidentCloze: pressPresidentCloze,
    unaffiliatedPresidentCloze: unaffiliatedPresidentCloze
};




