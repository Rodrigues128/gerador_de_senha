const inputEl = document.getElementById("password");
let passwordLength = 16;

const generatePasswor = () => {
    const chars = "abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]";

    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars[randomNumber]
    };

    inputEl.value = password
};
const copy = () => {
    navigator.clipboard.writeText(inputEl.value)
}
const passwordLengthEl = document.querySelector("#password-length");
passwordLengthEl.addEventListener("input", function () {
    passwordLength = passwordLengthEl.value
    generatePasswor()
})


const buttonCopy = document.querySelector("#copy");
buttonCopy.addEventListener("click", copy);

generatePasswor()