function makeStory() {
    // get form values (2 points)
    var noun1 = document.getElementById('noun1').value;
    var noun2 = document.getElementById('noun2').value;
    var noun3 = document.getElementById('noun3').value;
    var noun4 = document.getElementById('noun4').value;
    var noun5 = document.getElementById('noun5').value;
    var noun6 = document.getElementById('noun6').value;
    var male_name1 = document.getElementById('male_name1').value;
    var female_name1 = document.getElementById('female_name1').value;
    var plural_noun1 = document.getElementById('plural_noun1').value;
    var plural_noun2 = document.getElementById('plural_noun2').value;
    var adjective1 = document.getElementById('adjective1').value;
    var adjective2 = document.getElementById('adjective2').value;
    var adjective3 = document.getElementById('adjective3').value;
    var adjective4 = document.getElementById('adjective4').value;
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var body_part1 = document.getElementById('body_part1').value;


    // Set title of story. Use at least one form value in the title. (2 points)
    var title = "Celebrate";


    // Build story. you can add as many paragraphs as you like. (3 points)
    var paragraph1 = "Friends, this is a surprise party for " + female_name1 + " we are here to celebrate her " + noun1 +
                     ".  All of her most " + adjective1 + " friends are here, including me, her devoted and faithful " + noun2 +
                     ".  I must say that she doesn't look a day over " + number1 + ".  Naturally, we have some " + adjective2 +
                     "presents for her. " + male_name1 + " bought her some beautidul copper " + noun3 +
                     " that she can wear on her lovely " + body_part1 + ".  And our hostess got her a dozen " + plural_noun1 +
                     " that she can hang in her " + noun4 + ".  And we had the bakery send up a huge " + adjective3 + noun5 +
                     "with " + number2 + " candles on it. We all want to wish her a very " + adjective4 + " birthday and many happy " +
                     plural_noun2 + ".  Now, let's all sing together: Happy " + noun6 + "day to you!" ;



    // Display story by putting title & paragraphs into appropriate divs. (3 points)
document.getElementById('title').innerHTML = title;
document.getElementById('one').innerHTML = paragraph1;


}
