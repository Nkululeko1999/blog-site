import './Footer.scss';
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="text-light py-5 footer-section">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h3>About Us</h3>
                    <p className='my-3'>Your Travel Blog is your go-to destination for travel inspiration, tips, and stories. Explore the world with us!</p>
                </div>
                <div class="col-md-6">
                    <form method="post" class="footer-content">
                    <h3>Subscribe to Our Newsletter</h3>
                    <p className='my-3'>Stay updated with our latest travel stories and tips by subscribing to our newsletter.</p>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Enter your email" aria-label="Enter your email" aria-describedby="button-addon2" />
                        <button class="btn" type="button" id="button-addon2">Subscribe</button>
                    </div>
                    </form>
                </div>
            </div>

            <div class="row">
            <div class="col-lg-4">
                <h5>Explore</h5>
                <ul class="list-unstyled mt-3">
                    <li>
                        <NavLink to={"/destinations"} className={"nav-link"}>Destinations</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/categories"} className={"nav-link"}>Categories</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact-us"} className={"nav-link"}>Contact Us</NavLink>
                    </li>
                </ul>
            </div>
            <div class="col-lg-4">
                <h5>Connect</h5>
                <ul class="d-flex justify-content-start list-unstyled mt-3">
                    <li>
                        <i class="bi bi-facebook social-icons btn"></i>
                    </li>
                    <li>
                        <i class="bi bi-linkedin social-icons btn"></i>
                    </li>
                    <li>
                        <i class="bi bi-instagram social-icons btn"></i>
                    </li>
                    <li>
                        <i class="bi bi-twitter social-icons btn"></i>
                    </li>
                    <li>
                        <i class="bi bi-twitter-x social-icons btn"></i>
                    </li>
                    <li>
                        <i class="bi bi-tiktok social-icons btn"></i>
                    </li>
                </ul>
            </div>
            <div class="col-lg-4">
                <h5>Legal</h5>
                <ul class="list-unstyled mt-3">
                <li>
                    <NavLink to={"/privacy-policy"} className={"nav-link"}>Privacy Policy</NavLink>
                </li>
                <li>
                    <NavLink to={"/terms-of-use"} className={"nav-link"}>Terms of Use</NavLink>
                </li>
                </ul>
            </div>
            </div>
        </div>
    </footer>
  )
}
