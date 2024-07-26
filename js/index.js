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

const numbers = [5, 6, 1, 3, 4, 2];
console.log(numbers.sort())
const names = ['Alex', 'Nick', 'Bob', 'John'];
console.log(names.sort());