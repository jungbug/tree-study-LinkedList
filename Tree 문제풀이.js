const categories = [
    {id: 'animals', parent: null},
    {id: 'mammals', parent: 'animals'},
    {id: 'cats', parent: 'mammals'},
    {id: 'dogs', parent: 'mammals'},
    {id: 'chihuahua', parent: 'dogs'},
    {id: 'labrador', parent: 'dogs'},
    {id: 'persian', parent: 'cats'},
    {id: 'siamese', parent: 'cats'}
]

// Tree 구조
// 폴더 구조
// {
//     animals: {
//         mammals: {
//             cats: {
//                 persian: {},
//                 siamese: {}
//             },
//             dogs: {
//                 chihuahua: {},
//                 labrador: {}
//             }
//         }
//     }
// }


const makeTree = (categories, parent) => {
    let node = {}
    categories
        .filter(c => c.parent === parent)
        .forEach(v => node[v.id] = makeTree(categories, v.id))
    return node
}

const tree = makeTree(categories, null)

console.dir(tree, {depth: 5})
