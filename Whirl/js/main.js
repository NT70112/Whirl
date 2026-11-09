$(function () {
    $('.futures_button').on('click', function () {
        $(this).next('.futures_description').slideToggle();
    });

    $('.futures_button').on('click', function () {
        $(this).find('.arrow_icon').toggleClass('arrow_icon_active');
    });

        $('.futures_button').on('click', function () {
        $(this).find('.futures_name').toggleClass('futures_name--active');
    });
    $(".header_links a").on("click", function (e) {
        e.preventDefault();
        let id = $(this).attr('href'),
            top = ($(id).offset().top) - 200;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
});


const sections = document.querySelectorAll('.section_invisible');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('section_invisible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0,
    rootMargin: '0px 0px -30% 0px'
});

sections.forEach(section => observer.observe(section));


let footer = document.querySelector('.footer')
footer.innerHTML = `<div class="container">
                <div class="footer_main">
                    <ul class="footer_whirl">
                        <li class="footer_whirl-item">
                            <img src="images/logos/logo-whirl.svg" alt="" class='logo_footer'>
                        </li>
                        <li class="footer_whirl-item">
                            <div class="avtors">Built by<span><a href="#">Nikolai Bain.</a></span></div>
                            <div class="avtors">Powered by<span><a href="#">Webflow.</a></span></div>
                        </li>
                    </ul>
                    <ul class="footer_info">
                        <li class="footer_info-iteam footer-iteam iteam-title">info</li>
                        <li class="footer_info-iteam footer-iteam"><a href="#">Features</a></li>
                        <li class="footer_info-iteam footer-iteam"><a href="#">Pricing</a></li>
                        <li class="footer_info-iteam footer-iteam"><a href="#">Blog</a></li>
                        <li class="footer_info-iteam footer-iteam"><a href="#">Support</a></li>
                        <li class="footer_info-iteam footer-iteam"><a href="#">Terms & Conditions</a></li>
                        <li class="footer_info-iteam footer-iteam"><a href="#">Privacy Policy</a></li>
                    </ul>
                    <ul class="footer_admin">
                        <li class="footer_admin-iteam footer-iteam iteam-title">Admin</li>
                        <li class="footer_admin-iteam footer-iteam"><a href="#">Style Guide</a></li>
                        <li class="footer_admin-iteam footer-iteam"><a href="#">Licenses</a></li>
                        <li class="footer_admin-iteam footer-iteam"><a href="#">Instructions</a></li>
                        <li class="footer_admin-iteam footer-iteam"><a href="#">Changelog</a></li>
                        <li class="footer_admin-iteam footer-iteam"><a href="#">Password</a></li>
                        <li class="footer_admin-iteam footer-iteam"><a href="#">404</a></li>
                    </ul>
                    <ul class="footer_newsletter">
                        <li class="footer_newsletter-item iteam-title">Newsletter</li>
                        <li class="footer_newsletter-description">Sign up for the latest news, company insights, and
                            Whirl updates.</li>
                    </ul>
                </div>
                <div class="footer_bottom">
                    <div class="footer_bottom-text">© 2022 Whirl. All Rights Reserved. Illustrations by <a href="#"><span>Streamline.</span></a></div>
                    <ul class="social_media-icons">
                        <li class="social_media-icon">
                            <a href="#"><img src="images/icons/fb.svg" alt="" ></a>
                        </li>
                        <li class="social_media-icon">
                            <a href="#"><img src="images/icons/in.svg" alt="" ></a>
                        </li>
                        <li class="social_media-icon">
                            <a href="#"><img src="images/icons/tw.svg" alt="" ></a>
                        </li>
                    </ul>
                </div>
            </div>`

let header = document.querySelector('.header_top')
header.innerHTML = `<div class="container">
                    <div class="header_top-inner">
                        <a href="index.html" class="header_logo">
                            <img src="images/logos/logo-whirl.svg" alt="logo">
                        </a>
                        <button class="header_burger" type="button" aria-label="Open menu">
                            <span></span>
                        </button>
                        <nav class="header_nav" id="header-navigation">
                            <ul class="header_links">
                                <li class="header_link"><a href="#Features">Features</a></li>
                                <li class="header_link"><a href="#About">About us</a></li>
                                <li class="header_link"><a href="#Learn">Learn</a></li>
                                <li class="header_link"><a href="#Blog">Blog</a></li>
                                </ul>
                            <div class="burger__button-box">
                                <div class="header_link"><a href="#" class="header_top-link_btn button-link">Sign in</a></div>
                                <div class="header_mobile-cta"><a href="form.html" class="button">Book a demo</a></div>
                            </div>
                        </nav>
                        <div class="header_button-box button-box">
                            <a href="" class="header_top-link_btn button-link">Sign in</a>
                            <a href="form.html" class="header_top-btn button">Book a demo</a>
                        </div>
                    </div>
                </div>`


const $headerTop = $('.header_top');
const $headerBurger = $('.header_burger');

function closeHeaderMenu() {
    $headerTop.removeClass('header_top--menu-open');
}

$headerBurger.on('click', function () {
    $headerTop.toggleClass('header_top--menu-open').hasClass('header_top--menu-open');
});