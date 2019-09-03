const url = {
  urlNews: `https://newsapi.org/v2/top-headlines?country=us&apiKey=9357b6f9cbd64246abcf2c26886e6979`,
  search: search =>
    `https://newsapi.org/v2/everything?q=${search}&apiKey=9357b6f9cbd64246abcf2c26886e6979`,
  urlCurrncy: () => "https://api.exchangeratesapi.io/latest"
};
const format = abj => abj.articles.slice(0, 5);
const inputField = document.querySelector("#search-input");
const blog = document.querySelector(".plog-container");
const img = document.querySelector("#test-img");
const selectBox = document.querySelector(".currency__box");
const monyNumber = document.querySelector(".currency__value");

const createElm = arr => {
  for (let i = 0; i < arr.length; i++) {
    let parentDiv = document.createElement("DIV");
    let newImg = document.createElement("IMG");
    let contentDiv = document.createElement("DIV");
    let title = document.createElement("H1");
    let link = document.createElement("A");
    let para = document.createElement("P");
    newImg.classList.add("news-img");
    parentDiv.style.display = "flex";
    contentDiv.appendChild(title);
    contentDiv.appendChild(para);
    contentDiv.appendChild(link);
    parentDiv.appendChild(contentDiv);
    parentDiv.appendChild(newImg);
    contentDiv.classList.add("header-div");
    blog.appendChild(parentDiv);
    parentDiv.classList.add("plog-container-new");
    title.textContent = arr[i].title;
    title.classList.add("plog-container-new-title");
    para.textContent = arr[i].description;
    para.classList.add("plog-container-new-desciption");
    link.textContent = "Read more";
    link.setAttribute("href", arr[i].url);
    link.setAttribute("target", "_blank");
    newImg.setAttribute("src", arr[i].urlToImage);
    newImg.alt = "image-news";
  }
};

xhreqsuet(url.urlNews, res => {
  const arr = format(res);
  createElm(arr);
});

document.querySelector("#submit").addEventListener("click", e => {
  let search = inputField.value;
  blog.textContent = "";
  let urlSearch = url.search(search);
  xhreqsuet(urlSearch, res => {
    const arr = format(res);
    createElm(arr);
  });
});

document.querySelector(".currency__box").addEventListener("click", e => {
  xhreqsuet(url.urlCurrncy(), res => {
    let cone = e.target.value;
    monyNumber.textContent = res.rates[cone];
  });
});
