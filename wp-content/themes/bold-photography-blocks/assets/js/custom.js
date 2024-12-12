/**
 * Custom JS for theme elements
 */

/**
 * Wocommerce active class for category list
 */
let boldPhotographyblocksurl = window.location.href;
const boldPhotographyblockscatLink = document.querySelectorAll(
  ".wc-block-product-categories-list li a"
);
boldPhotographyblockscatLink.forEach((item) => {
  if (item.href === boldPhotographyblocksurl) {
    item.classList.add("active");
  }
});

/*
    Add class in body when search clicked
*/
let boldPhotographyblockssearchBtn = document.querySelector(".search-controller svg.search");

if (boldPhotographyblockssearchBtn !== null) {
  boldPhotographyblockssearchBtn.addEventListener("click", function (e) {
    document.body.classList.remove("open-social");
    document.body.classList.add("open-search");
    document.body.addEventListener("click", function () {
      document.body.classList.remove("open-search");
    });

    let boldPhotographyblockssearchContainer = document.querySelector(".search-container");
    boldPhotographyblockssearchContainer.addEventListener("click", function (e) {
      e.stopPropagation();
    });

    var boldPhotographyblockssearchInput = document.querySelector(".wp-block-search__input");
    window.setTimeout(() => boldPhotographyblockssearchInput.focus(), 0);
  });
}

var boldPhotographyblockssearchBtnClose = document.querySelector(
  ".search-controller svg.cross"
);

if (boldPhotographyblockssearchBtnClose !== null) {
  boldPhotographyblockssearchBtnClose.addEventListener("click", function (e) {
    document.body.classList.remove("open-search");

  });
}


/*
    Add class in body when social clicked
*/
let boldPhotographyblockssocialBtn = document.querySelector(".social-controller svg.social");

if (boldPhotographyblockssocialBtn !== null) {
  boldPhotographyblockssocialBtn.addEventListener("click", function (e) {
    document.body.classList.remove("open-search");
    document.body.classList.add("open-social");
    document.body.addEventListener("click", function () {
      document.body.classList.remove("open-social");
    });

    let boldPhotographyblockssocialContainer = document.querySelector(".social-container");
    boldPhotographyblockssocialContainer.addEventListener("click", function (e) {
      e.stopPropagation();
    });

    var boldPhotographyblockssocialInput = document.querySelector(".wp-block-social__input");
    window.setTimeout(() => boldPhotographyblockssocialInput.focus(), 0);
  });
}

var boldPhotographyblockssocialBtnClose = document.querySelector(
  ".social-controller svg.cross"
);

if (boldPhotographyblockssocialBtnClose !== null) {
  boldPhotographyblockssocialBtnClose.addEventListener("click", function (e) {
    document.body.classList.remove("open-social");

  });
}

/*
    Add blinker on input field when active
*/
let boldPhotographyblocksblinkerField = document.querySelector(".social-controller svg.search");

if (boldPhotographyblocksblinkerField !== null) {
  boldPhotographyblocksblinkerField.addEventListener("click", function () {
    var boldPhotographyblockssearchInput = document.querySelector(".wp-block-search__input");
        window.setTimeout(() => boldPhotographyblockssearchInput.focus(), 0);
  });
}