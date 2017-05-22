var BasicCard = require('./BasicCard');
var ClozeCard = require('./ClozeCard');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = process.env.PORT || 8080;


//Setting view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//bodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// Set Static Path
app.use(express.static(path.join(__dirname, 'client')));

//on GET request to the url
app.get('/', function(req, res) {
    res.render('index', {
        frontClickHandler: BasicCard.displayFront(),
        backClickHandler: BasicCard.displayBack(),
        frontClickHandlerCloze: ClozeCard.displayText()
   });
 });

//start server on port 3000
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});


//*******************BASIC CARD *********************/

var frontSide = [];
var backSide = [];

BasicCard = [
    {
        front: BasicCard.firstPresident.front,
        back: BasicCard.firstPresident.back
    },
    {
        front: BasicCard.longestTerm.front,
        back: BasicCard.longestTerm.back
    },
    {
        front: BasicCard.nonConsecutiveTerms.front,
        back: BasicCard.nonConsecutiveTerms.back
    },
    {
        front: BasicCard.youngestPresident.front,
        back: BasicCard.youngestPresident.back
    },
    {
        front: BasicCard.whiteHouse.front,
        back: BasicCard.whiteHouse.back
    },
    {
        front: BasicCard.usBorn.front,
        back: BasicCard.usBorn.back       

    },
    {
        front: BasicCard.patentPresident.front,
        back: BasicCard.patentPresident.back

    },
    {
        front: BasicCard.divorcedPresident.front,
        back: BasicCard.divorcedPresident.back
    },
    {
        front: BasicCard.pressPresident.front,
        back: BasicCard.pressPresident.back
    },
    {
        front: BasicCard.unaffiliatedPresident.front,
        back: BasicCard.unaffiliatedPresident.back
    }
];


//generates the array of questions

BasicCard.displayFront = function() {
    for(var i = 0; i < this.length; i++) {
        frontSide.push(this[i].front);
    };
    return frontSide;
};


//generate the array of answers
BasicCard.displayBack = function() {
    for(var i = 0; i < this.length; i++) {
        backSide.push(this[i].back);
    };
    return backSide;
};

//******************* CLOZE CARD *******************/
var frontSideCloze = [];

ClozeCard = [
    {
        text: ClozeCard.firstPresidentCloze.partialText()
    },
    {
        text: ClozeCard.longestTermCloze.partialText()
    },
    {
        text: ClozeCard.nonConsecutiveTermsCloze.partialText()
    },
    {
        text: ClozeCard.youngestPresidentCloze.partialText()
    },
    {
        text: ClozeCard.whiteHouseCloze.partialText()
    },
    {
        text: ClozeCard.usBornCloze.partialText()
    },
    {
        text: ClozeCard.patentPresidentCloze.partialText()
    },
    {
        text: ClozeCard.divorcedPresidentCloze.partialText()
    },
    {
        text: ClozeCard.pressPresidentCloze.partialText()
    },
    {
        text: ClozeCard.unaffiliatedPresidentCloze.partialText()
    }
];


//generates the array of questions

ClozeCard.displayText = function() {
    for(var i = 0; i < this.length; i++) {
        frontSideCloze.push(this[i].text);
    };
    return frontSideCloze;
};

