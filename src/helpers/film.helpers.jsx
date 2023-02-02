
export function filterFilmsByDirector(arr, string) {
    if (!string) {
        return arr;
    }
    return arr.filter(ele =>  ele.director == string)
}

export function getListOf(list, string) {
    const newArr = [];
    list.forEach((ele) => {
        if (!newArr.includes(ele[string])) {
            newArr.push(ele[string])
        }
    })
    return newArr;

}

