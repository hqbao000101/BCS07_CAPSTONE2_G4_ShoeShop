$(".owl-carousel").owlCarousel({
  loop: true,
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
      items: 3,
      nav: false,
    },
    1000: {
      items: 4,
      nav: true,
    },
  },
});

// ! Select size

var sizes = document.querySelectorAll(".px-2 .size_item");
console.log(sizes);

for (var i = 0; i < sizes.length; i++) {
  sizes[i].addEventListener("click", function () {
    let current = document.querySelector(".select_size .active");
    current.classList.remove("active");
    this.className += " active";
    let size = document.querySelector(".select_size .active").innerHTML;
    console.log(size);
    document.getElementById("sizeInput").innerHTML = size;
  });
}

// ! number products

function tang() {
  let i = document.querySelector(".number").innerHTML * 1;
  i++;
  document.querySelector(".number").innerHTML = i;
}

function giam() {
  let i = document.querySelector(".number").innerHTML * 1;
  if (i > 0) {
    i--;
    document.querySelector(".number").innerHTML = i;
  } else document.querySelector(".number").innerHTML = 0;
}

document.querySelector(".minus .btn-change").onclick = () => {
  giam();
};
document.querySelector(".plus .btn-change").onclick = () => {
  tang();
};

// ! write review

function writeReview() {
  let a = document.getElementById("writeReview").innerHTML;
  console.log(a);
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
  console.log(content);
  document.querySelector(".review_form").innerHTML = content;
}

document.getElementById("writeReview").onclick = () => {
  writeReview();
};
