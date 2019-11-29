function type_check_v1(value, type) {
    switch (typeof value) {
        case "object":
            if (Array.isArray(value)) return type === "array";
            if (value === null) return null;
            break;
        default:
            return value === type;
    }
}

//console.log(type_check_v1(1, "number"));

function type_check_v2(value, object) {
    if (typeof value === "undefined" || value == null || value == "") return false;
    let theValue = null;
    let theReturn = false;
    typeof value === "object" ? theValue = value[Object.keys(value)[0]] : theValue = value;

    if (Object.keys(object).includes("type")) {
        object.type === typeof theValue ? theReturn = true : theReturn = false;
        if (!theReturn) return false;
    }
    if (Object.keys(object).includes("value")) {
        object.value === theValue ? theReturn = true : theReturn = false;
        if (!theReturn) return false;
    }
    if (Object.keys(object).includes("enum")) {
        object.enum.includes(value) ? theReturn = true : theReturn = false;
        if (!theReturn) return false;
    }

    return theReturn;
}

//console.log(type_check_v2(1, { "type": "number", "enum": ["rgrg", 3, 1] }))

function type_check(value, object) {

}