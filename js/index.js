"use strict"
// const numbers = [17, 52, 65, 41, 12, 9];
// const sum = numbers.reduce((acc, value) => acc += value, 0);
// console.log(sum);

const tweets = [
    {id: '012', likes: 23, tags: ['css', 'sass']},
    {id: '017', likes: 2, tags: ['js', 'javascript']},
    {id: '018', likes: 87, tags: ['html', 'css']},
    {id: '019', likes: 47, tags: ['react', 'js']},
    {id: '024', likes: 98, tags: ['nodejs', 'js']}
];
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes += tweet.likes, 0);
// console.log(likes);
// const likes = tweets => tweets.reduce((totalLikes, tweet) => totalLikes += tweet.likes, 0);
// console.log(likes(tweets));
// const tags = tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;

// }, []); console.log(tags);

// const tagsSum = tweets => tweets.reduce((allTags, tweet) => {
//         allTags.push(...tweet.tags);
//         return allTags;
    
//     }, []);
//     const tags = tagsSum(tweets);
//     const tagsCount = (acc, tag) => {
//         if (!acc.hasOwenProperty(tag)){
//             acc[tag] = 0;

//         };
//         acc[tag]++;
//         return acc;
//     };
//     const totalTags = tags => tags.reduce(tagsCount, {});
//     const tagCount = totalTags(tags);
//     console.log(tagCount);

// const numbers = [5, 6, 1, 3, 4, 2];
// console.log(numbers.sort())
// const names = ['Alex', 'Nick', 'Bob', 'John'];
// console.log(names.sort());

// const letters = [5, 6, 1, 3, 4, 2];
// console.log(letters.sort());

// const newLetters = letters.sort((curEl, nextEl) => {
//     return curEl - nextEl;
// });
// console.log(newLetters);

// const fruits = ['kiwi', 'apple', 'orange', 'banana'];
// fruits.sort(function(a, b){
//     return b.localeCompare(a);
// });
// console.log(fruits);

// const copy = [...fruits];
// console.log(copy);
// console.log(copy === fruits)

const num = [5, 6, 1, 3, 4, 2];
// const even = numbers.filter(x => x % 2 === 0);
// console.log(even);
// const newNum = even.map(x => x * 3);
// console.log(newNum);
// const reverseNum = newNum.reverse();
// console.log(reverseNum);
// const result = num
// .filter(x => x % 2 === 0)
// .map(y => y * 3)
// .reverse();
// console.log(result);

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
//     ];
//     players.sort((a, b) => a.timePlayed - b.timePlayed);
//     console.log(players);

    // const arr = [
    //     { name: 'John', age: 32 },
    //     { name: 'Jane', age: 26 },
    //     { name: 'Mike', age: 42 },
    //     { name: 'Emily', age: 29 }
    //     ];
    //     arr.sort((a, b) => {
    //         if (a.name < b.name){
    //             return -1;
    //         }
    //         else if (a.name > b.name){
    //             return 0;
    //         }
    //         else{
    //             return 0;
    //         }
    //     });
    //     console.log(arr);

    const products = [
        { name: 'Product 1', price: 100, quantity: 5 },
        { name: 'Product 2', price: 50, quantity: 10 },
        { name: 'Product 3', price: 200, quantity: 2 },
        { name: 'Product 4', price: 50, quantity: 5 }
        ];
        products.sort((a, b) => {
            if (a.price !== b.price){
                return b.price - a.price;
            }
            return a.quantity - b.quantity;
        });
        console.log(products);