var i = 0; //start point for our array of images
var images = []; //our empty array
var time = 2500; //the time in miliseconds it will change to next image

//image list
images[0] = '/images/image1.jpg';
images[1] = '/images/image2.jpg';
images[2] = '/images/image3.jpg';

//change image
function changeImg(){
    document.slide.src = images[i]; //grabs our images from our img named slide

    if(i < images.length - 1){
        i++; //incrementing by 1
    } else {
        i = 0; //resets to 0 when loop is complete

    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;


//adding json products
fetch("./products.json")
.then((r) => r.json())
.then((r) => {
    console.log(r.products);
    const products = r.products;
    let productContainer = document.querySelector(".product-container");
    products.forEach((element) => {
        console.log(element);
        productContainer.innerHTML += `<p class="products">${element.item} <br> ${element.description} <br><br> ${element.price}</p> <img class="nails" src="${element.image}" width="100%">`;
      

    });
});
