const sort = (arr = [], key) => {
    if (key === "hdd_capacity") {
        return arr.sort((a, b) => a.hdd_capacity - b.hdd_capacity)
    }
    return arr.sort((a, b) => a[key] < b[key]? -1 : a[key] > b[key]? 1: 0);
  
}
export default sort;