console.log("whatsapp.js loaded");

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxhlOcys92vrrg_uLdJllMDLuKvvYIFZCv3HhMnkrGlo_Z1fhnTdEOJU0VTOG4bX_eDrA/exec";

/* FORM SUBMIT → GOOGLE SHEET + WHATSAPP */
function submitOrder(e, product) {
  e.preventDefault();

  const form = e.target;
  const name = form[0].value;
  const mobile = form[1].value;
  const address = form[2].value;

  const data = {
    type: "order",
    product: product,
    name: name,
    mobile: mobile,
    address: address
  };

  fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(data),
    mode: "no-cors"
  });

  const msg = `New Order 🔔

Product: ${product}
Name: ${name}
Mobile: ${mobile}
Address: ${address}
City: Hyderabad`;

  window.open(
    "https://wa.me/916304782015?text=" + encodeURIComponent(msg),
    "_blank"
  );

  form.reset();
}

/* QUICK ORDER BUTTON */
function orderNow(productName) {
  const msg = `Hello 👋

I would like to enquire about:

Product: ${productName}
City: Hyderabad`;

  window.open(
    "https://wa.me/916304782015?text=" + encodeURIComponent(msg),
    "_blank"
  );
}

/* GENERIC WHATSAPP OPEN */
function openWhatsApp(message) {
  window.open(
    "https://wa.me/916304782015?text=" + encodeURIComponent(message),
    "_blank"
  );
}
