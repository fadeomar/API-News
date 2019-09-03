const url = {
    urlNews: `https://newsapi.org/v2/top-headlines?country=us&apiKey=9357b6f9cbd64246abcf2c26886e6979`,
    search: search =>
    `https://newsapi.org/v2/everything?q=${search}&apiKey=9357b6f9cbd64246abcf2c26886e6979`,
    urlCurrncy: () => 'https://api.exchangeratesapi.io/latest'
};
const format = abj => abj.articles.slece(0, 5);
const inputField = document.querySelector('#search-input');
const blog = document.querySelector('.plog-container')
const img = document.querySelector('#test-img');
const selectBox = document.querySelector('.currency__box');
const monyNumber = document.querySelector('.currency__value');

const createElm = (arr) => {
    for(let i = 0; i<arr.length; i++){
        
    }
}
xhr(rl.urlNews, res => {
    const arr = format(res);
    createElm(arr)
})