class customLocalStorage {
    constructor() {
        this.map = new Map()
    }

    // set item in localstorage
    setItem(key, value) {
        if (typeof value == 'string') {
            this.map.set(key, value)
        }
    }

    // get item from localstorage
    getItem(key) {
        return this.map.get(key)
    }

    // remove item from localstorage
    removeItem(key) {
        this.map.delete(key)
    }

    // length of localstorage
    length() {
        return this.map.size
    }

    // show localstorage
    show() {
        return this.map
    }

    // clear localstorage
    clear() {
        this.map.clear();
    }
}

// creating object of local storage
let ls = new customLocalStorage()

// setting item 1
let obj = {
    'a': 1,
    'b': 2
}
ls.setItem("item1", JSON.stringify(obj))
let data1 = JSON.parse(ls.getItem("item1"))
console.log(data1);

// setting item 2
let arr = ['aa', 'bb']
ls.setItem("item2", JSON.stringify(arr))
let data2 = JSON.parse(ls.getItem("item2"))
console.log(data2);

// length of custom local storage
console.log(ls.length());

// removing item 2
ls.removeItem("item2")

// show custom local storage
console.log(ls.show())