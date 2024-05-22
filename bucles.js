const data = ['a', 'b', 'c'];

// let i = 0;
// do {
//     console.log(data[i]);
//     i++;

// } while(i < data.length)


// for (let i = 0; i < data.length; i++) {
//     console.log(data[i])
// }

for (const item of data) {
    console.log(item);

}


for (const item in data) {
    console.log(item);
}