var number = Math.floor(Math.random() *10);
var bomb = Math.floor(Math.random() *10);
const treasure = (rannumb) => {
    if (number === rannumb) {
        document.getElementById("board").innerHTML = "<img src=1.jpeg>"
        return alert ("you found prize")}
        
    else if (bomb === rannumb) {
        document.getElementById ("board").innerHTML = "💣"
    return alert ("try again 🤣")}
        else  {
            document.getElementById (rannumb).innerHTML = "🪼"}}


            