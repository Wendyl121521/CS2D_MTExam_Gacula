let favColors = [];
while (favColors.length < 3) {
    let color = prompt("Enter a color you like:");
    favColors.push(color);
    console.log("Updated favorite colors: ", favColors);
}
console.log("Your favorite colors are: ", favColors);
