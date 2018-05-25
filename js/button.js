var searchOpen = document.querySelector(".search-open-btn");
var searchForm =  document.querySelector(".apartments-form");

if (searchOpen) {
  if (searchForm) {
    searchForm.classList.add("apartments-form-hide");
  };

  searchOpen.addEventListener("click", function (event) {
    event.preventDefault();
    searchForm.classList.toggle("apartments-form-hide");
    searchForm.classList.toggle("apartments-form-show");
  });
};