function generateRandom() {
    var category = document.getElementById("category").value;
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var resultElement = document.getElementById("result");

    if (min >= max) {
        resultElement.innerText = "Min should be less than Max";
        return;
    }

    var result;

    switch (category) {
        case "Number":
            result = Math.floor(Math.random() * (max - min + 1)) + min;
            break;
        case "Place":
            var places = ["New York", "Paris", "Tokyo", "London", "Sydney"];
            result = places[Math.floor(Math.random() * places.length)];
            break;
        case "Name":
            var names = ["John", "Emma", "Michael", "Sophia", "William"];
            result = names[Math.floor(Math.random() * names.length)];
            break;
        case "Animal":
            var animals = ["Dog", "Cat", "Elephant", "Lion", "Giraffe"];
            result = animals[Math.floor(Math.random() * animals.length)];
            break;
        case "Sport":
            var sports = ["Football", "Basketball", "Tennis", "Soccer", "Golf"];
            result = sports[Math.floor(Math.random() * sports.length)];
            break;
        default:
            result = "Select a valid category";
    }

    resultElement.innerText = result;
}
