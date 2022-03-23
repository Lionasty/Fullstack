var object1 = {
    Name: "Boufidjeline",
    Surname: "Youcef",
    Matricule: "123456",
    Level: 2,
    Hobbies: ['Doggo'],
    Skills: ['C/C++', 'JavaScript']
}
var object2 = {
    Name: "Boufidjeline",
    Surname: "Youcef",
    Matricule: "123456",
    Level: 2,
    Hobbies: ['Doggo'],
    Skills: ['C/C++', 'JavaScript']
}
var object3 = {
    Name: "Bennouna",
    Surname: "Mehdi",
    Matricule: "654321",
    Level: 2,
    Hobbies: ['PC'],
    Skills: ['C', 'JavaScript']
}

function compare(object1, object2) {
    for (key in object1) {
        if (Array.isArray(object1[key])) {
            for (var i = 0; i < object1[key].length; i++) {
                if (object1[key][i] !== object2[key][i])
                    return console.log("They don't contain equivalent property values");
            }
        }
        else if (object1[key] !== object2[key])
            return console.log("They don't contain equivalent property values");
    }
    return console.log("They do contain equivalent property values");
}

compare(object1, object2);
compare(object1, object3);