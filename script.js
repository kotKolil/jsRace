const stringArr1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis erat, elementum vel lacus at, rutrum pretium dolor. Integer eleifend, urna sed elementum commodo, lectus tellus lacinia urna, quis fermentum elit mauris eu felis. Aenean viverra nisi sed mollis volutpat. Duis elementum tortor eu nunc aliquet, quis viverra mi ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non elit augue. Etiam egestas est sit amet lorem hendrerit, nec posuere sem laoreet. Praesent vel maximus nibh, et aliquet magna. Cras quis lacus non diam ultricies efficitur. Mauris hendrerit, quam malesuada venenatis convallis, eros libero lobortis nisl, eu congue dui nisi et elit. Duis at dapibus arcu. Ut blandit sapien porta ligula sodales aliquet. Fusce ornare vel nunc nec aliquam. Integer sed nulla sed eros hendrerit sodales nec nec orci. Quisque vestibulum libero nec varius sollicitudin".split(" ")

let stringArr = stringArr1
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

console.log(stringArr)
var currentWord = 0

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
$(document).ready(() => {
    $("#currentWord").text(stringArr[currentWord])


    const carArr = [$("#car1"), $("#car2")];
    setInterval(() => {

        carArr.forEach( (elem) => {

            var currentPosition = elem.position().left;

            if ( currentPosition > 90 * window.screen.width / 100 ) {
                console.log("bots win!")
            }

            elem.css("left", currentPosition + 1 + "px");
        })
    }, 1);
});

$(document).on('keypress', (e) => {
    if (e.key === "Enter" ) {
        answer = $("#answer").val()

        if (answer === stringArr[currentWord]) {

            elem = $("#car3")
            var currentPosition = elem.position().left;
            elem.css("left", currentPosition + 35 + "px");
            $("#answer").val('')

            currentWord += 1
            $("#currentWord").text(stringArr[currentWord])

        }
    }
})

$(document).on("paste", (e) => {
    alert("Pasting is not allowed!");
    e.preventDefault();
});