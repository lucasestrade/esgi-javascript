function ucfirst(value) {
    if (typeof value !== "string" || !value) return "";
    let arrayValue = value.split("");
    arrayValue[0] = arrayValue[0].toUpperCase();
    let newArray = arrayValue.join("");
    return newArray;
}

//ucfirst("hello world");

function capitalize(value) {
    if (typeof value !== "string" || !value) return "";
    let arrayValue = value.split(" ");

    var i = 0;
    while (i < arrayValue.length) {
        arrayValue[i] = ucfirst(arrayValue[i]);
        i++;
    }

    let newArray = arrayValue.join(" ");

    return newArray;
}

//capitalize("hello world");

function camelCase(value) {
    if (typeof value !== "string" || !value) return "";
    let capitalizeValue = capitalize(value);
    let capitalizeArray = capitalizeValue.split(" ");
    return capitalizeArray.join("");
}

//camelCase("hello world");

function snake_case(value) {
    if (typeof value !== "string" || !value) return "";
    let newValue = value.toLowerCase();
    let arrayValue = newValue.split(" ");
    return arrayValue.join("_");
}

//snake_case("hello World");

function leet(value) {
    if (typeof value !== "string" || !value) return "";
    let arrayValues = value.split("");
    let i = 0;
    while (i < arrayValues.length) {
        if (arrayValues[i].toLowerCase() === "a") {
            arrayValues[i] = "4";
        } else if (arrayValues[i].toLowerCase() === "e") {
            arrayValues[i] = "3";
        } else if (arrayValues[i].toLowerCase() === "i") {
            arrayValues[i] = "1";
        } else if (arrayValues[i].toLowerCase() === "o") {
            arrayValues[i] = "0";
        } else if (arrayValues[i].toLowerCase() === "u") {
            arrayValues[i] = "(_)";
        } else if (arrayValues[i].toLowerCase() === "y") {
            arrayValues[i] = "7";
        }
        i++;
    }

    return arrayValues.join("");
}

//console.log(leet("hello world"));

function prop_access(object, path) {
    if (path === null || path === "") {
        return object;
    }

    let arrayPath = path.split(".");
    let i = 0;
    let value = object;
    while (i < arrayPath.length) {
        if (typeof value[arrayPath[i]] == "undefined") {
            return "Le chemin : " + path + " n'existe pas";
        }
        value = value[arrayPath[i]];
        i++;
    }
    return "La valeur est : " + value;
}

/*animal = { "type": { "name": "jason" } };
console.log(prop_access(animal, "type.name"));*/

function verlan(value) {
    if (typeof value !== "string" || !value) return "";
    let arrayValue = value.split(" ");
    let i = 0;
    let reversedArray = [];
    while (i < arrayValue.length) {
        reversedArray.push(arrayValue[i].split("").reverse().join(""));
        i++;
    }

    return reversedArray.join(" ");
}

//console.log(verlan("hello world"));

function yoda(value) {
    if (typeof value !== "string" || !value) return "";
    let arrayValue = value.split(" ").reverse();
    return arrayValue.join(" ");
}

//console.log(yoda("hello world"));

function vig(value, key) {

}

console.log(vig("hello world", "salaud"));