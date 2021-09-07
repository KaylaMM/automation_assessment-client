const filter = (arr = [], key, value) =>value !=="ALL" ? arr.filter(el => el[key] === value) : arr;
export default filter;