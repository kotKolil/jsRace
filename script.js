const stringArr1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis erat, elementum vel lacus at, rutrum pretium dolor. Integer eleifend, urna sed elementum commodo, lectus tellus lacinia urna, quis fermentum elit mauris eu felis. Aenean viverra nisi sed mollis volutpat. Duis elementum tortor eu nunc aliquet, quis viverra mi ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non elit augue. Etiam egestas est sit amet lorem hendrerit, nec posuere sem laoreet. Praesent vel maximus nibh, et aliquet magna. Cras quis lacus non diam ultricies efficitur. Mauris hendrerit, quam malesuada venenatis convallis, eros libero lobortis nisl, eu congue dui nisi et elit. Duis at dapibus arcu. Ut blandit sapien porta ligula sodales aliquet. Fusce ornare vel nunc nec aliquam. Integer sed nulla sed eros hendrerit sodales nec nec orci. Quisque vestibulum libero nec varius sollicitudin".split(" ");

let stringArr = stringArr1
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value).sort()

var currentWord = 0;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


$(document).ready(() => {
        $("#start_button").on("click", () => {
            $("#currentWord").text(stringArr[currentWord]);

            var carArr = [$("#car1"), $("#car2")];


            var mainGame = setInterval(() => {
                carArr.forEach((elem) => {
                    var currentPosition = parseInt(elem.css("margin-left"));

                    if (currentPosition > window.innerWidth * 0.8) {
                        alert("BOTS WINS! YOU ARE LOSER!");
                        clearInterval(mainGame);
                        return;
                    }
                    console.log($("#speedSlider").val())
                    elem.css({"margin-left": (currentPosition + parseInt($("#speedSlider").val())) + "px"});
                });
            }, 50);

            $(document).on('keypress', (e) => {
                playerCar = $("#car3")
                var playerCurrentPosition = parseInt(playerCar.css("margin-left"));
                if (e.key === "Enter") {
                    let answer = $("#answer").val();
                    if (answer === stringArr[currentWord]) {
                        playerCar.css({"margin-left": (playerCurrentPosition + 45) + "px"});
                        $("#answer").val('');
                        currentWord += 1;
                        $("#currentWord").text(stringArr[currentWord]);
                    }
                    if (playerCurrentPosition > window.innerWidth * 0.76) {
                        alert("YOU WIN!")
                        clearInterval(mainGame);
                    }
                }
            });

            $(document).on("paste", (e) => {
                alert("Pasting is not allowed!");
                e.preventDefault();
            });
        });
    }
)