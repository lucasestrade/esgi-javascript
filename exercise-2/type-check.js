function type_check_v1(value, type) {
    if (typeof type !== "string") return false;
    return typeof value === type;
}

//console.log(type_check_v1(1, "number"));

function type_check_v2(value, object) {
    if (typeof value === "undefined" || value == null || value == "") return false;
    let theValue = null;
    let theReturn = false;
    switch (typeof value) {
        case "object":
            let key = Object.keys(value)[0];
            theValue = value[key];
            break;
        default:
            theValue = value;
    }

    if (Object.keys(object).includes("type")) {
        object.type === typeof theValue ? theReturn = true : theReturn = false;
        if (Object.keys(object).includes("value")) {
            object.value === theValue ? theReturn = true : theReturn = false;
        }
    }

    if (Object.keys(object).includes("enum")) {
        object.enum.includes(value) ? theReturn = true : theReturn = false;
    }

    return theReturn;
}

//console.log(type_check_v2(1, { "type": "number", "enum": ["rgrg", 3, 2] }))