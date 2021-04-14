var storage = [];

function handleGenerate() {
  var container = document.getElementById("meme-container");
  container.innerHTML = "";
  const memeindex = Math.floor(Math.random() * storage.length);

  var anchr = document.createElement('a');
  anchr.setAttribute("href", storage[memeindex].url);
  var img = document.createElement('img');
  img.setAttribute("class", "img-fluid generated-meme");
  img.setAttribute("src", storage[memeindex].url);
  var p = document.createElement('p');
  p.setAttribute("class", "template-name");
  var text = "Template Name : " + storage[memeindex].name;
  p.innerHTML = text;

  container.appendChild(anchr);
  anchr.appendChild(img);
  container.insertBefore(p, container.childNodes[0]);

}

function memegallery(imgurls) {

  for (var i = 0; i < 20; i++) {

    var container = document.getElementById("memerow");
    var divcol = document.createElement('div');
    divcol.setAttribute("class", "col-lg-3 col-md-4 col-6");
    var anchor = document.createElement('a');
    anchor.setAttribute("class", "d-block mb-4 h-100");
    anchor.setAttribute("href", imgurls[i].url);
    var image = document.createElement('img');
    image.setAttribute("class", "img-fluid img-thumbnail gallery-img");
    image.setAttribute("src", imgurls[i].url);

    container.appendChild(divcol);
    divcol.appendChild(anchor);
    anchor.appendChild(image);
  }

}

const apiCall = async () => {
  const response = await fetch('https://api.imgflip.com/get_memes');
  const apiData = await response.json();
  const imgurls = apiData.data.memes;

  memegallery(imgurls);
  storage = imgurls;

}

window.onload = function() {
  apiCall();
};
