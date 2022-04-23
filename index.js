function shout(string) {
    return string.toUpperCase();   
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(spy) {
    const string = "hello"
    console.log(spy);
    console.log(spy.toUpperCase());
    console.log(spy === spy.toUpperCase());
}
function logWhisper(spy) {
    const string = 'HELLO'
    console.log(spy);
    console.log(spy.toLowerCase());
    console.log(spy === spy.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return `I can\'t hear you!` ;}
    else if (string === string.toUpperCase()) {
        return `YES INDEED!`;}
    else if (string === `Let's have dinner together!`) {
        return `I would love to!`;}
}