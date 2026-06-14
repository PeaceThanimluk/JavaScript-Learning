const card = ['A', 2, 3, 4, 6, 7, 8, 9, 20, 'J', 'Q'];

// FISHER-YATES ALGORITHM

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

