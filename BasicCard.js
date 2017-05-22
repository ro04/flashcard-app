var BasicCard = function(front, back){
    this.front = front;
    this.back = back;
}

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington"
);

var longestTerm = new BasicCard(
    "Who was the only President to serve more than two terms?", "Franklin D. Roosevelt"
);

var nonConsecutiveTerms = new BasicCard(
    "Who was the only President to serve two non-consecutive terms?", "Grover Cleveland"
);

var youngestPresident = new BasicCard(
    "Who was the youngest elected President", "Theodore Roosevelt"
);

var whiteHouse = new BasicCard(
    "Who was the first President to live in the White House?", "John Adams"
);

var usBorn = new BasicCard(
    "Who was the first president born an American citizen?", "Martin Van Buren"
);

var patentPresident = new BasicCard (
    "Who is the only president to hold a patent?", "Abraham Lincoln"
);

var divorcedPresident = new BasicCard(
    "Who was the first president elected who had previously been divorced?", "Ronald Reagan"
);

var pressPresident = new BasicCard(
    "Who was the first president to hold a news conference", "Dwight Eisenhower"
);

var unaffiliatedPresident = new BasicCard(
    "Who is the only president who was unaffiliated to a political party?", "George Washington"
);


module.exports = BasicCard;

module.exports = {
    firstPresident: firstPresident,
    longestTerm: longestTerm,
    nonConsecutiveTerms: nonConsecutiveTerms,
    youngestPresident: youngestPresident,
    whiteHouse: whiteHouse,
    usBorn: usBorn,
    patentPresident: patentPresident,
    divorcedPresident: divorcedPresident,
    pressPresident: pressPresident,
    unaffiliatedPresident: unaffiliatedPresident
};
