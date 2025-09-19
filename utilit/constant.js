export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const HEADER_MENU = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Product",
    path: "/product",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const PROFILE_MENU = [
  {
    name: "Profile",
    path: "/profile",
  },
  {
    name: "My Order",
    path: "/order",
  },
  {
    name: "Change password",
    path: "/change-password",
  },
  {
    name: "Payment History",
    path: "/paymet-history",
  },
];

export const ACCOUNT_MENU = [
  {
    section: "Manage My Account",
    items: [
      { name: "My Profile", href: "/account/profile" },
      { name: "Address Book", href: "/account/address-book" },
      { name: "My Payment Options", href: "/account/payment-options" },
    ],
  },
  {
    section: "My Orders",
    items: [
      { name: "My Returns", href: "/account/returns" },
      { name: "My Cancellations", href: "/account/cancellations" },
    ],
  },
  {
    section: "My WishList",
    items: [{ name: "My WishList", href: "/account/wishlist" }],
  },
];
export const PROTECTED_PATTERNS = [/^\/profile(\/.*)?$/, /^\/reels(\/.*)?$/];

export const AUTH_ROUTES = ["/login", "/signup", "/forgot-password"];
