
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

export function getFilmStats(arr) {
    let rtScoreAcc = 0;
    let mostRecent = 0;
    arr.forEach((ele) => {
        rtScoreAcc += parseInt(ele.rt_score)
        if(mostRecent < ele.release_date) {
            mostRecent = ele.release_date;
        }
    })
    return(
        {
            acc_score: rtScoreAcc,
            avg_score: rtScoreAcc / arr.length,
            total: arr.length,
            latest: mostRecent
        }
    )

}

