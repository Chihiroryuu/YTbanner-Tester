const upload = document.getElementById("upload");
const banner = document.getElementById("banner");
const bannerMobile = document.getElementById("banner-mobile");

upload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    banner.src = reader.result;
    bannerMobile.src = reader.result;
  };
  reader.readAsDataURL(file);
});
