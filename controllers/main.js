// todo: get shoe list
let promise = axios({
  method: "GET",
  url: "https://shop.cyberlearn.vn/api/Product",
});
promise.then((res) => {
  // todo: get list of shoes
  let shoe_arr = res.data.content;

  // todo: initialize variables containing shoe items
  let stt = 1;
  let all = '';
  let men = '';
  let women = '';
  let adidas = '';
  let nike = '';
  let converse = '';

  // todo: update content for all shoe section
  all = loopUpdateContent(shoe_arr, stt, all);

  // todo: update content for men shoe section
  let men_shoe_arr = filterCategory(shoe_arr, "men");
  men = loopUpdateContent(men_shoe_arr, stt, men);

  // todo: update content for women shoe section
  let women_shoe_arr = filterCategory(shoe_arr, "women");
  women = loopUpdateContent(women_shoe_arr, stt, women);

  // todo: update content for adidas shoe section
  let adidas_shoe_arr = filterCategory(shoe_arr, "adidas");
  adidas = loopUpdateContent(adidas_shoe_arr, stt, adidas);

  // todo: update content for nike shoe section
  let nike_shoe_arr = filterCategory(shoe_arr, "nike");
  nike = loopUpdateContent(nike_shoe_arr, stt, nike);

  // todo: update content for converse shoe section
  let converse_shoe_arr = filterCategory(shoe_arr, "vans converse");
  converse = loopUpdateContent(converse_shoe_arr, stt, converse);
  
  // todo: rendering shoes following shoes categories
  renderShoes([all, men, women, adidas, nike, converse]);
});
promise.catch((err) => {
  console.log(err);
});
