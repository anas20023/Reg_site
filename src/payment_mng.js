const paymet_form = document.querySelector("#paymentForm");
const payment_alt = document.querySelector("#alert-to-sent-mail");
const payment_type = document.querySelector("#payment-method");
const cash_payment = document.querySelector("#ref_div_show");
const online_payment = document.querySelector("#tr_id_div_show");
const bkash = document.querySelector("#bksh_nm_div_show");
const nagad = document.querySelector("#Nagad_nmbr_div");
payment_type.addEventListener("change", () => {
  let method = payment_type.value;
  if (method == 1) {
    cash_payment.classList.remove("hidden");
    cash_payment.classList.add("flex");
    online_payment.classList.remove("flex");
    online_payment.classList.add("hidden");
    bkash.classList.remove("flex");
    bkash.classList.add("hidden");
    nagad.classList.remove("flex");
    nagad.classList.add("hidden");
  } else if (method == 2) {
    cash_payment.classList.remove("flex");
    cash_payment.classList.add("hidden");
    online_payment.classList.remove("hidden");
    online_payment.classList.add("flex");
    bkash.classList.remove("hidden");
    bkash.classList.add("flex");
    nagad.classList.remove("flex");
    nagad.classList.add("hidden");
  } else if (method == 3) {
    cash_payment.classList.remove("flex");
    cash_payment.classList.add("hidden");
    online_payment.classList.remove("hidden");
    online_payment.classList.add("flex");
    bkash.classList.remove("flex");
    bkash.classList.add("hidden");
    nagad.classList.remove("hidden");
    nagad.classList.add("flex");
  }
});
paymet_form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  evt.stopPropagation();
  bk = paymet_form.bksh_nmr.value;
  ng = paymet_form.Nagad_number.value;
  tr = paymet_form.tr_id.value;
  ref_nm = paymet_form.ref_name.value;
  data = {
    bk,
    ng,
    tr,
    ref_nm,
  };
  if (data.length != 0) {
    paymet_form.reset();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    payment_alt.classList.remove("hidden");
    console.log(data);
  }
});
