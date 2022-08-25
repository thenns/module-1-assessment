const password = 'ThisismyPassword123!';
//Using regular expressions, I check if the password string contains at least one number,
//is at least 10 or more characters long,
//contains at least one lower case letter,
//contains at leas one upper case letter,
//isn't longer than 20 character, 
//contains at least one special characters and
//does not contain any spaces
const asciiArtSuccess = "___________.__             __________                                               .___ .___         _________                       .__                ._.\n"
                      + "\\__    ___/|  |__   ____   \\______   \\_____    ______ ________  _  _____________  __| _/ |   | ______ \\_   ___ \\  ____   _____ ______ |  |   ____ ___  __| |\n"
                      + "  |    |   |  |  \\_/ __ \\   |     ___/\\__  \\  /  ___//  ___/\\ \\/ \\/ /  _ \\_  __ \\/ __ |  |   |/  ___/ /    \\  \\/ /  _ \\ /     \\\\____ \\|  | _/ __ \\\\  \\/  / |\n"
                      + "  |    |   |   Y  \\  ___/   |    |     / __ \\_\\___ \\ \\___ \\  \\     (  <_> )  | \\/ /_/ |  |   |\\___ \\  \\     \\___(  <_> )  Y Y  \\  |_> >  |_\\  ___/ >    < \\|\n"
                      + "  |____|   |___|  /\\___  >  |____|    (____  /____  >____  >  \\/\\_/ \\____/|__|  \\____ |  |___/____  >  \\______  /\\____/|__|_|  /   __/|____/\\___  >__/\\_ \\__\n"
                      + "                \\/     \\/                  \\/     \\/     \\/                          \\/           \\/          \\/             \\/|__|             \\/      \\/\\/\n";

const asciiArtFail = "__________             .___                                                     .___._.\n"
                   + "\\______   \\_____     __| _/ ___________    ______ ________  _  _____________  __| _/| |\n"
                   + " |    |  _/\\__  \\   / __ |  \\____ \\__  \\  /  ___//  ___/\\ \\/ \\/ /  _ \\_  __ \\/ __ | | |\n"
                   + " |    |   \\ / __ \\_/ /_/ |  |  |_> > __ \\_\\___ \\ \\___ \\  \\     (  <_> )  | \\/ /_/ |  \\|\n"
                   + " |______  /(____  /\\____ |  |   __(____  /____  >____  >  \\/\\_/ \\____/|__|  \\____ |  __\n"
                   + "        \\/      \\/      \\/  |__|       \\/     \\/     \\/                          \\/  \\/\n";
const specialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const lowerCase = /[a-z]/g;
const upperCase = /[A-Z]/g;
const numberTest = /\d/;
const spaceTest = /\s/g;

if (numberTest.test(password) && password.length >= 10 && lowerCase.test(password) && upperCase.test(password) && password.length <=20 && specialCharacters.test(password) && !spaceTest.test(password)) {
    console.log(asciiArtSuccess);
}
else{
    console.log(asciiArtFail);
}
