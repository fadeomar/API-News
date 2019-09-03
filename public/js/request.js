const xhreqsuet = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const res = JSON.parse(xhr.responseText);
        cb(res);
      }
    }
  });
  xhr.open("GET", url);
  xhr.send();
};
