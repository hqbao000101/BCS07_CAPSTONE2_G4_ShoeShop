// call api
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
// todo: detail - api
let promiseDetail = axios({
  url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
  method: "get",
});
promiseDetail.then((res) => {
  let relatedShoe = ``;
  let sp = res.data.content;
  let { name, price, description, size, image, relatedProducts } = sp;
  document.getElementById("name").innerHTML = name;
  document.getElementById("shoeName").innerHTML = name;
  document.getElementById("price").innerHTML = "$" + price + ".00";
  document.querySelector(".product_description").innerHTML = description;
  document.getElementById("img").src = image;
  let shoeSize = "";
  for (var i = 0; i < size.length; i++) {
    shoeSize += `<div class="px-2">
    <div class="size_item mb-3 ${i == 0 ? "active" : ""}">${size[i]}</div>
  </div>`;
  }
  document.getElementById("available-size").innerHTML = shoeSize;
  document.getElementById("sizeInput").innerHTML = size[0];
  for (let i = 0; i < relatedProducts.length; i++) {
    relatedShoe += `<!-- todo: item 1 -->
    <div class="sales_container">
      <!-- todo: sale-img -->
      <div class="sales_img">
        <img src=${relatedProducts[i].image} alt="Sales Pic 1" />
        <div class="img_interact">
          <i class="fa-regular fa-heart" onclick="likeShoes(this)"></i>
          <i class="fa-regular fa-images"></i>
        </div>
        <div class="img_add">
          <h5>QUICK ADD</h5>
        </div>
      </div>
      <!-- todo: sale-info -->
      <div class="sales_info">
        <a href="./detail.html?id=${relatedProducts[i].id}">
          <h4>${relatedProducts[i].name}</h4>
        </a>
        <div class="info_stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <div class="info_prices">
          <h5>$${relatedProducts[i].price}.00</h5>
        </div>
      </div>
    </div>`;
  }
  document.querySelector(".owl-carousel").innerHTML = relatedShoe;
});
promiseDetail.catch((err) => {
  console.log(err);
});

setTimeout(() => {
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  });
}, 500);

// ! Select size
setInterval(() => {
  var sizes = document.querySelectorAll(".px-2 .size_item");
  for (var i = 0; i < sizes.length; i++) {
    sizes[i].addEventListener("click", function () {
      let current = document.querySelector(".select_size .active");
      current.classList.remove("active");
      this.className += " active";
      let size = document.querySelector(".select_size .active").innerHTML;
      document.getElementById("sizeInput").innerHTML = size;
    });
  }
}, 2000);

// ! number products

setTimeout(() => {
  let currentPrice = document.getElementById("price").innerHTML;
  let handlePrice = currentPrice.slice(1) * 1;
  function tang() {
    let i = document.querySelector(".number").innerHTML * 1;
    i++;
    document.querySelector(".number").innerHTML = i;
    document.getElementById("price").innerHTML = `$${handlePrice * i}.00`;
  }
  function giam() {
    let i = document.querySelector(".number").innerHTML * 1;
    if (i > 1) {
      i--;
      document.querySelector(".number").innerHTML = i;
      document.getElementById("price").innerHTML = `$${handlePrice * i}.00`;
    } else document.querySelector(".number").innerHTML = 1;
  }

  document.querySelector(".minus .btn-change").onclick = () => {
    giam();
  };
  document.querySelector(".plus .btn-change").onclick = () => {
    tang();
  };
}, 500);

// ! write review

function writeReview() {
  let a = document.getElementById("writeReview").innerHTML;
  let content = "";
  if (a == "write a review") {
    content += `
    <div class="rating_stars">
    <p>rating</p>
    <div class="stars_picker">
      <span class="star-picker star-on"
        ><i class="fa-solid fa-star"></i
      ></span>
      <span class="star-picker star-on"
        ><i class="fa-solid fa-star"></i
      ></span>
      <span class="star-picker star-on"
        ><i class="fa-solid fa-star"></i
      ></span>
      <span class="star-picker star-on"
        ><i class="fa-solid fa-star"></i
      ></span>
      <span class="star-picker star-on"
        ><i class="fa-solid fa-star"></i
      ></span>
    </div>
  </div>
  <div class="review_title mb-3 fieldset">
    <label for="" class="form-label">review title</label>

    <textarea
      id="title"
      rows="5"
      name="review_body"
      placeholder="GIVE YOUR REVIEW A TITLE"
      aria-label="Review"
    ></textarea>
  </div>
  <div class="review_text mb-3 fieldset">
    <label for="" class="form-label">review</label>

    <textarea
      id="review"
      rows="5"
      name="review_body"
      placeholder="WRITE YOUR COMMENTS HERE"
      aria-label="Review"
    ></textarea>
  </div>
  <div class="user_name mb-3 fieldset">
    <label for="" class="form-label">Name</label>

    <textarea
      id="name"
      rows="5"
      name="review_body"
      placeholder="ENTER YOUR NAME (PUBLIC)"
      aria-label="Review"
    ></textarea>
  </div>
  <div class="user_email mb-3 fieldset">
    <label for="" class="form-label">email</label>

    <textarea
      id="email"
      rows="5"
      name="review_body"
      placeholder="ENTER YOUR EMAIL (PRIVATE)"
      aria-label="Review"
    ></textarea>
  </div>
  <button id="submitReview">Submit review</button>
      `;
    document.getElementById("writeReview").innerHTML = "cancle review";
  } else {
    content = "";

    document.getElementById("writeReview").innerHTML = "write a review";
  }
  document.querySelector(".review_form").innerHTML = content;
}

document.getElementById("writeReview").onclick = () => {
  writeReview();
};
