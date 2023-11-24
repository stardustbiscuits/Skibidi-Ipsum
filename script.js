var button = document.getElementById("btn");
var amount = document.getElementById("amount");
var output = document.getElementById("output");

button.addEventListener("click", () => {
    var words_amount = amount.value;
    var goofy_words = [" sigma ", " skibidi ", " gyatt ", " ohio moment ", " sus ", " gigachad ", " ohio gyatt ", " grimace shake skibidi ", " grimace gyatt ", " ohio grimace shake ", " ohio grimace ", " ohio grimace shake ", " only in ohio ", " what the dog doin ", " rizzler gyatt ", " fanum tax ", " kai cenat rizz ", " you've got to be rizzing me", " rizzing all over the place ", " We go jim Zizz creatine ", " Livvy Dunne rizzing up Baby Gronk ", " Alpha sigma ", " cuh dey bored ", " hittin the griddy ", " sigma griddy ", " ice spice what the dog doin ", " ice spice ", " roblox man face ", " duke dennis did you pray today ", " sussy baka ", " light skin stare ", " sussy imposter ", " literally hitting the griddy ", " fortnite battle pass ", " all my fellas ", " based ", "  better caul saul ", " i am a surgeon ", " you have GYATT to be SKIBIDI TOILET while RIZZING me in OHIO "];
    var text = "";
    for (var i = 0; i < words_amount; i++) {
        text += goofy_words[Math.floor(Math.random() * goofy_words.length)];
        output.innerHTML = text;
    }
})