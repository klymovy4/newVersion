const people = [
    { id: 1, name: "roma", age: 20, adress: "tesrnop" },
    { id: 1, name: "roma", age: 20 },
    { id: 1, name: "roma", age: 20 },
    { id: 1, name: "we", age: 222 }
]

console.table(people);

console.time("timer")
const items = []
for (let i = 0; i < 100000; i++) {
    items.push({ el: i + 1 })
}
console.timeEnd("timer");
console.log(items);
