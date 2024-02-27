//All Variables

const info_form = document.querySelector("#info");
let namee, email, phone, id, section;
const alrt_sc = document.querySelector("#success_alt");
//All Variables
info_form.addEventListener("submit", (e) => {
  e.preventDefault();
  namee = info_form.name.value;
  email = info_form.email.value;
  phone = info_form.phn_nmbr.value;
  id = info_form.st_id.value;
  section = info_form.st_sec.value;
  const data = {
    namee,
    email,
    phone,
    id,
    section,
  };
  if (data.length != 0) {
    info_form.reset();
    alrt_sc.classList.remove("hidden");
    alrt_sc.classList.add("flex");
    setTimeout(() => {
      alrt_sc.classList.add("hidden");
      alrt_sc.classList.remove("flex");
      location.href = "payment.html";
      console.log(data);
    }, 3000);
  } else {
    alert("Please Fill All The Fields");
  }
});

/// For Page Change
window.history.forward();
function noBack() {
  window.history.forward();
}
