// Задание:
// Cделайте первый символ в строке "word" заглавным

// Решение:
function capitalizeWord(word) {
    let a = word[0].toUpperCase() + word.slice(1);
    return a;
}