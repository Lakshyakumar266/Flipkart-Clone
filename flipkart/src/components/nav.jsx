import React from 'react'

function nav() {
    return (
        <>
            <nav className="navigation d-flex flex-center">
                {/* Flipkart Logo Area */}
                <div className="logo d-flex flex-colum">
                    <a href="/" className="flipkartlogoaril d-flex flex-center">
                        <img width="75" src={'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'} alt="Flipkart" title="Flipkart" className="flipkartlogo" />
                    </a>
                    <a className="explore-plus" href="/plus">
                        Explore
                        <span className="plus"> Plus</span>
                        <img width="10" src={'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png'} alt="plus" />
                    </a>
                </div>

                <form action="/" method="POST" className="search-form d-flex flex-center">
                    <input type="text" name="search" id="search" placeholder="Search for products, brands and more" />
                    <button type="submit" className="search-btn d-flex flex-center"><svg width="20" height="20" viewBox="0 0 17 18" className="" xmlns="http://www.w3.org/2000/svg"><g fill="#2874F1" ><path className="_34RNph" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path className="_34RNph" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg></button>
                </form>

                <a href="/" className="btn login-btn">Login</a>

                <div className="nav-more-item d-flex flex-center">
                    <a href="/" className="more-option no-hover">More</a>
                    <svg className="more-item-hover" width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" ><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"></path></svg>
                    <div className="nav-item-options-warper">
                        <div className="nav-item-box"></div>
                        <div className="nav-items-container">
                            <div className="item-holder-warper">
                                <div className="menu-item d-flex"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" class="" viewBox="0 0 12 14"><g fill="none" fill-rule="evenodd"><path d="M-4-3h20v20H-4z"></path><path fill="#2874F1" d="M6.17 13.61c-1.183 0-1.922-.723-1.922-1.88H8.09c0 1.157-.74 1.88-1.92 1.88zm4.222-5.028l1.465 1.104v1.07H0v-1.07l1.464-1.104v-2.31h.004c.035-2.54 1.33-4.248 3.447-4.652V.992C4.915.446 5.37 0 5.928 0c.558 0 1.014.446 1.014.992v.628c2.118.404 3.412 2.112 3.446 4.65h.004v2.312z"></path></g></svg> Notification Preferences</div>
                                <div className="menu-item d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" class="" viewBox="0 0 16 14"><g fill="none" fill-rule="evenodd"><path d="M-2-3h20v20H-2V-3zm8.333 4.167h3.334v1.666H6.333V1.167zm0 0h3.334v1.666H6.333V1.167z"></path><path fill="#2874F0" fill-rule="nonzero" d="M6.467 10.067V9.3h-5.36L1.1 12.367c0 .85.682 1.533 1.533 1.533h10.734c.85 0 1.533-.682 1.533-1.533V9.3H9.533v.767H6.467zm7.666-6.9H11.06V1.633L9.526.1H6.459L4.926 1.633v1.534h-3.06c-.843 0-1.533.69-1.533 1.533V7c0 .851.683 1.533 1.534 1.533h4.6V7h3.066v1.533h4.6c.844 0 1.534-.69 1.534-1.533V4.7c0-.843-.69-1.533-1.534-1.533zm-4.6 0H6.467V1.633h3.066v1.534z"></path></g></svg> Sell on Flipkart</div>
                                <div className="menu-item d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="" viewBox="0 0 14 17"><g fill="none" fill-rule="evenodd"><path fill="#2874F0" fill-rule="nonzero" d="M12.25.542H1.75c-.833 0-1.5.675-1.5 1.5v10.5c0 .825.667 1.5 1.5 1.5h3L7 16.292l2.25-2.25h3c.825 0 1.5-.675 1.5-1.5v-10.5c0-.825-.675-1.5-1.5-1.5zm-4.5 12h-1.5v-1.5h1.5v1.5zM9.303 6.73l-.676.69c-.54.547-.877.997-.877 2.122h-1.5v-.375c0-.825.338-1.575.877-2.123l.93-.945c.278-.27.443-.646.443-1.058 0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5H4c0-1.658 1.342-3 3-3s3 1.342 3 3c0 .66-.27 1.26-.697 1.687z"></path></g></svg> 24x7 Customer Care</div>
                                <div className="menu-item d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" class="" viewBox="0 0 18 10"><g fill="none" fill-rule="evenodd"><path fill="#2874F0" fill-rule="nonzero" d="M12.333 0l1.91 1.908-4.068 4.067-3.333-3.333L.667 8.825 1.842 10l5-5 3.333 3.333 5.25-5.24L17.333 5V0"></path></g></svg> Advertise</div>
                                <div className="menu-item d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" class="" viewBox="0 0 12 14"><g fill="none" fill-rule="evenodd"><path d="M-4-3h20v20H-4z"></path><path fill="#2874F0" fill-rule="nonzero" d="M12 4.94H8.57V0H3.43v4.94H0l6 5.766 6-5.765zM0 12.354V14h12v-1.647H0z"></path></g></svg> Download App</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="go-cart">
                    <a className="go-cart-ancor no-hover" href="/viewcart?otracker=Cart_Icon_Click">
                        <svg width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                        <span>Cart</span>
                    </a>
                </div>
            </nav>
            <br />
            <br />
            <br />
            <div className="items-options-container d-flex flex-center">
                <a href="/" className="item-of-option">
                    <div className="item-option-image">
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/634095dbd3751807.png" alt="img" />
                    </div>
                    <div className="item-option-name">
                        Mobiles
                    </div>
                </a>
                <a href="/" className="item-of-option">
                    <div className="item-option-image">
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/75202e93f94951fc.png" alt="img" />
                    </div>
                    <div className="item-option-name">
                        Fashion
                    </div>
                </a>
                <a href="/" className="item-of-option">
                    <div className="item-option-image">
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/f9c1bab8f5391f89.png" alt="img" />
                    </div>
                    <div className="item-option-name">
                        Electronics
                    </div>
                </a>
                <a href="/" className="item-of-option">
                    <div className="item-option-image">
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/08eae8a37b9b570d.png" alt="img" />
                    </div>
                    <div className="item-option-name">
                        Home
                    </div>
                </a>
                <a href="/" className="item-of-option">
                    <div className="item-option-image">
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/bc37959077392a55.png" alt="img" />
                    </div>
                    <div className="item-option-name">
                        Appliances
                    </div>
                </a>
                <a href="/" className="item-of-option">
                    <div className="item-option-image">
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/ead6248cbbf91935.png" alt="img" />
                    </div>
                    <div className="item-option-name">
                        Travel
                    </div>
                </a>
                <a href="/" className="item-of-option">
                    <div className="item-option-image">
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/17171e66f571833d.png" alt="img" />
                    </div>
                    <div className="item-option-name">
                        Beauty,Toys &amp; More
                    </div>
                </a>
                <a href="/" className="item-of-option">
                    <div className="item-option-image">
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/769f17a5217139d9.png" alt="img" />
                    </div>
                    <div className="item-option-name">
                        Furniture
                    </div>
                </a>
                <a href="/" className="item-of-option">
                    <div className="item-option-image">
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/60a5618cf67774f2.png" alt="img" />
                    </div>
                    <div className="item-option-name">
                        Grocery
                    </div>
                </a>
            </div>
        </>
    )
}

export default nav
