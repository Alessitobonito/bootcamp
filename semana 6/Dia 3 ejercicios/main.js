const coins = [];
coins[0] = 1
coins[1] = 2 
coins[2] = 5 
coins[3] = 10 
coins[4] = 20 
coins[5] = 50 
function getCoins (change) {
    let result = new Array(coins.length).fill(0);

    for (let i = coins.length - 1; i >= 0; i--) {
        result[i] = Math.floor(change / coins[i]);
        change = change % coins[i];
    }

    return result;
}

console.log (getCoins(88))

function manufacture(gifts, materials) {
    return gifts.filter(function(gift) {
        const copygift = [...gift]
        return copygift.every(function (giftLetter) {
            return materials.includes(giftLetter)
        })
    })
    }

  const gifts1 = ['tren', 'oso', 'pelota']
const materials1 = 'tronesa'

console.log(manufacture(gifts1, materials1)) // ["tren", "oso"]

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

manufacture(gifts2, materials2) // ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

manufacture(gifts3, materials3); // []