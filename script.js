$(document).ready(function () {
    let scrollAmount = 0;
    const itemWidth = $('.kitchen-item').outerWidth(true);
    const carouselContainer = $(".carousel-container");
    const carouselWidth = $(".carousel").width();
    const maxScroll = carouselContainer[0].scrollWidth - carouselWidth;

    $(".next-btn").click(function () {
        if (scrollAmount < maxScroll) {
            scrollAmount += itemWidth;
            carouselContainer.animate({ scrollLeft: scrollAmount }, 400);
        }
    });

    $(".prev-btn").click(function () {
        if (scrollAmount > 0) {
            scrollAmount -= itemWidth;
            carouselContainer.animate({ scrollLeft: scrollAmount }, 400);
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("homeVideo");
    const playButton = document.getElementById("playButton");

    video.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            playButton.classList.add("hidden"); // Hide play button
        } else {
            video.pause();
            playButton.classList.remove("hidden"); // Show play button
        }
    });

    playButton.addEventListener("click", function() {
        video.play();
        playButton.classList.add("hidden");
    });

    video.addEventListener("pause", function() {
        playButton.classList.remove("hidden"); // Show play button when paused
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Cart Modal Elements
    const cartIcon = document.querySelector(".cart-icon"); // Selects the first cart icon

    const cartModal = document.getElementById("cartModal");
    const closeCart = document.getElementById("closeCart");
    const backToMenu = document.getElementById("backToMenu");

    // Request Dish Modal Elements
    const requestDishBtn = document.getElementById("requestDishBtn");
    const requestModal = document.getElementById("requestModal");
    const closeRequest = document.getElementById("closeRequest");
    const submitRequest = document.getElementById("submitRequest");
    const cancelRequest = document.getElementById("cancelRequest");

    // Open Cart Modal
    cartIcon.addEventListener("click", function () {
        cartModal.style.display = "block";
        document.body.classList.add("modal-open");
    });

    // Close Cart Modal
    closeCart.addEventListener("click", closeCartModal);
    backToMenu.addEventListener("click", closeCartModal);

    function closeCartModal() {
        cartModal.style.display = "none";
        document.body.classList.remove("modal-open");
    }

    // Open Request Dish Modal
    requestDishBtn.addEventListener("click", function () {
        requestModal.style.display = "block";
        document.body.classList.add("modal-open");
    });

    // Close Request Dish Modal
    closeRequest.addEventListener("click", closeRequestModal);
    submitRequest.addEventListener("click", closeRequestModal);
    cancelRequest.addEventListener("click", closeRequestModal);

    function closeRequestModal() {
        requestModal.style.display = "none";
        document.body.classList.remove("modal-open");
    }

    // Close Modals When Clicking Outside
    window.addEventListener("click", function (e) {
        if (e.target === cartModal) closeCartModal();
        if (e.target === requestModal) closeRequestModal();
    });
});


