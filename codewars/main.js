function likes(names) {
    return names.reduce((acc, rec) => {
        if (!rec) {
            return "no one likes this"
        }
        // else if (names.length === 1) {
        //     return `${rec} likes this`
        // } else if (names.length === 2) {
        //     return `${names[0]} and ${names[1]} like this`
        // } else if (names.length === 3) {
        //     return `${names[0]}, ${names[1]} and ${names[2]} like this`
        // } else if (names.length > 3) {
        //     return `${names[0]}, ${names[1]} and ${arr.length} others like this`
        // }
        return acc
    }, '')
}


console.log(likes([]))
    // console.log(likes(["Peter"]))
    // console.log(likes(["Jacob", "Alex"]))
    // console.log(likes(["Max", "John", "Mark"]))
    // console.log(likes([
    //     ["Alex", "Jacob", "Mark", "Max"]
    // ]))