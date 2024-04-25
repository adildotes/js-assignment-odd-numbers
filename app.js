let pEl = document.querySelector("p");

function formatNumber(number) {
    const numString = number.toString();
    let result = '';

    for (let i = 0; i < numString.length; i++) {
        if (i % 2 === 0) {
            result += numString[i];
        } else {
            const currentDigit = parseInt(numString[i]);
            const previousDigit = parseInt(numString[i - 1]);
            if (currentDigit % 2 === 1 && previousDigit % 2 === 1) {
                result += '-' + numString[i];
            } else {
                result += numString[i];
            }
        }
    }
    return result;
}

const num = prompt("Please enter an odd number:");
const formattedNum = formatNumber(num);

pEl.textContent = formattedNum;
