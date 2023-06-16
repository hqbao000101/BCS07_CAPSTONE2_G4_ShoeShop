// todo: show side navbar
function showSideNav() {
  document.getElementById("overlay").classList.remove("d-none");
  document.getElementById("sidenav").classList.remove("width-0");
  document.getElementById("sidenav").classList.remove("invisible");
  document.getElementById("sidenav").classList.remove("d-none");
}

// todo: hide side navbar
function hideSideNav() {
  document.getElementById("overlay").classList.add("d-none");
  document.getElementById("sidenav").classList.add("width-0");
  document.getElementById("sidenav").classList.add("invisible");
  document.getElementById("sidenav").classList.add("d-none");
}

// todo: render-home-shoes
function renderShoes(arr) {
  let categories_list = ["all", "men", "women", "adidas", "nike", "converse"];
  for (let i = 0; i < categories_list.length; i++) {
    document.querySelector(`#${categories_list[i]} .row`).innerHTML = arr[i];
  }
}

// todo: filter shoes by categories
function filterCategory(shoeArr, category) {
  let result = [];
  for (let item of shoeArr) {
    let categories = JSON.parse(item.categories);
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].category.toLowerCase() == category) {
        result.push(item);
      }
    }
  }
  return result;
}

// todo: update content for different shoes' categories
function loopUpdateContent(arr, stt, result) {
  for (let item of arr) {
    result += `
    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
      <div class="product_item animate__animated animate__zoomIn">
        <div class="sales_container">
          <!-- todo: sale-img -->
          <div class="sales_img">
            <img
              src=${item.image}
              alt="Sales Pic ${stt}"
            />
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
            <a href="../views/detail.html?id=${item.id}">
              <h4>${item.name}</h4>
            </a>
            <div class="info_stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
            <div class="info_prices">
              <h5>$${item.price}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
    stt++;
  }
  return result;
}
