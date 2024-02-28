const paymet_form = document.querySelector("#paymentForm");
const payment_alt = document.querySelector("#alert-to-sent-mail");
const payment_type = document.querySelector("#payment-method");
const cash_payment = document.querySelector("#ref_div_show");
const online_payment = document.querySelector("#tr_id_div_show");
const bkash = document.querySelector("#bksh_nm_div_show");
const nagad = document.querySelector("#Nagad_nmbr_div");
const contact_Section = document.querySelector("#contact_section");
//------------------------------------------------------------
const confirm_pmnt = document.querySelector("#confirm_btn");
const ref_nmbr = document.querySelector("#ref_name");
const tr_nmbr = document.querySelector("#tr_id");
const bk_nmbr = document.querySelector("#bksh_nmr");
const ng_nmbr = document.querySelector("#Nagad_number");
const payment_mthd = document.querySelector("#payment-method");
//------------------------------------------------------------
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
confirm_pmnt.addEventListener("click", () => {
  if (payment_mthd.value == 2) {
    console.log("BKash");
    console.log(bk_nmbr.value);
    console.log(tr_nmbr.value);
    bk_nmbr.value = "";
    tr_nmbr.value = "";
    payment_mthd.value = 0;
    paymet_form.classList.add("hidden");
    paymet_form.classList.remove("flex");
    payment_alt.classList.remove("hidden");
    contact_Section.classList.remove("hidden");
    contact_Section.classList.add("flex");
  } else if (payment_mthd.value == 3) {
    console.log("Nagad");
    console.log(ng_nmbr.value);
    console.log(tr_nmbr.value);
    ng_nmbr.value = "";
    tr_nmbr.value = "";
    payment_mthd.value = 0;
    paymet_form.classList.add("hidden");
    paymet_form.classList.remove("flex");
    payment_alt.classList.remove("hidden");
    contact_Section.classList.remove("hidden");
    contact_Section.classList.add("flex");
  } else if (payment_mthd.value == 1) {
    console.log("Cash");
    console.log(ref_nmbr.value);
    ref_nmbr.value = "";
    payment_mthd.value = 0;
    paymet_form.classList.add("hidden");
    paymet_form.classList.remove("flex");
    payment_alt.classList.remove("hidden");
    contact_Section.classList.remove("hidden");
    contact_Section.classList.add("flex");
  }
});