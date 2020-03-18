/*
Question:

Determine whether a one-to-one character mapping exists from one string, s1, to another string,
s2.

For example, given s1 = abc and s2 = bcd , print " true" into stdout since we can map each
character in "abc" to a character in "bcd".

Given s1 = foo and s2 = bar , print " false" since the character ‘o’ cannot map to two characters.

Given s1 = foo and s2 = brr , print " false" since the character ‘o’ cannot map to two characters.

But given s1 = bar and s2 = foo , print "true " since each character in "bar" can be mapped to a
character in "foo".

No Special Characters
No Spaces
*/

const tests = [
    {
        "s1" : "abc",
        "s2" : "bcd",
    },
    {
        "s1" : "foo",
        "s2" : "bar",
    },
    {
        "s1" : "bar",
        "s2" : "foo",
    },
    {
        "s1" : "foo",
        "s2" : "brr",
    },
    {
        "s1" : "",
        "s2" : "bcd",
    },
    {
        "s1" : "HelloMyNameIsHugoAndThisIsMySubmission",
        "s2" : "HopeYouFindThisToBeUpToYourCompanyStandards"
    },
    {
        "s1" : "Aacdefg",
        "s2" : "ruVwXyZ"
    }
]

const canMap = (s1, s2) => {

    //Check if length of input strings are equal
    //If they're not a one-to-one mapping is not possible
    if(s1.length !== s2.length) return false

    //Check for repeating characters in s1
    var s1Array = s1.split("")
    var dict = new Set()

    for(let i = 0; i < s1Array.length; i++) {
        //Normalize character case
        //If "A" and "a" are considered distinct, remove .toLowerCase()
        let char = s1Array[i].toLowerCase()
        if(dict.has(char)) {
            //Duplicate character found
            return false
        } else {
            dict.add(char)
        }
    }

    return true
}

tests.forEach(test => {
    console.log(canMap(test.s1, test.s2))
})