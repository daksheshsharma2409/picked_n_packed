import fetchUsingApi from "../services/api.js";
const container = document.getElementById("shop-container");

const renderData = async () => {
  const fetchedData = await fetchUsingApi();
  const json_data = fetchedData.products;
  let all_html = "";
  json_data.map((obj) => {
    let tags_form = `<ul class="flex flex-wrap gap-1.5 mt-3" id="tags_container">`;
    obj.tags.map((tag) => {
      tags_form += `<li class="text-[10.5px] font-semibold uppercase tracking-wide px-2.5 py-0.5 bg-white rounded-full border-[1.5px] border-[#b8a490] text-[#7a6a58] hover:border-[#7a6a58] hover:bg-[#f5e8d4] cursor-pointer transition-all">
       ${tag}
     </li>`;
    });
    tags_form += "</ul>";

    let stars_html = `<div class="flex gap-0.5" id="stars-container">`;
    for (let i = 0; i < Math.round(obj.rating); i++) {
      stars_html += `<i
                data-lucide="star"
                class="w-[15px] h-[15px] fill-[#e8a020] stroke-[#e8a020]"
              ></i>`;
    }
    for (let i = 0; i < 5 - Math.round(obj.rating); i++) {
      stars_html += `<i
                data-lucide="star"
                class="w-[15px] h-[15px] fill-[#d4c0a8] stroke-[#d4c0a8]"
              ></i>`;
    }
    stars_html += `</div>
            <span class="text-[12px] font-semibold text-[#5a4030]">${obj.rating}</span>
            <span class="text-[12px] text-[#8a7060]">(${Math.floor(Math.random() * (9000 - 1000 + 1)) + 1000} reviews)</span>`;

    const html_data = `<div
        class="w-full pb-5 border-2 border-solid border-[#908373] rounded-3xl bg-[#FBEFE0] shadow-[6px_6px_0px_#c2a98a] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
      >
        <div
          class="mx-5 mt-5 rounded-2xl border-2 border-solid border-[#c2af9b] bg-white overflow-hidden aspect-square"
        >
          <img
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            src=${obj.thumbnail}
            alt=${obj.title}
          />
        </div>

        <div class="px-5 pt-3">
          <p
            class="text-[11px] font-semibold tracking-widest uppercase text-[#a08060]"
          >
            ${obj.brand ? obj.brand : ""}
          </p>

          <h2 class="text-[17px] font-bold text-[#3a2e22] leading-snug mt-1">
            ${obj.title}
          </h2>

          <div class="flex items-center gap-1.5 mt-2">
            ${stars_html}
          </div>

          <p
            class="text-[12.5px] text-[#6b5a48] leading-relaxed mt-2 line-clamp-3"
          >
            ${obj.description}
          </p>

          ${tags_form}

          <div
            class="flex items-center justify-between mt-4 pt-3 border-t-[1.5px] border-[#d9c9b4]"
          >
            <div class="text-[22px] font-bold text-[#3a2e22] font-serif">
              $${((obj.price * (100 - obj.discountPercentage)) / 100).toFixed(2)}
              <span
                class="text-[13px] font-normal text-[#a08060] line-through ml-1"
                >$${obj.price}</span
              >
            </div>
            <button
              class="flex items-center gap-1.5 bg-[#3a2e22] text-[#FBEFE0] text-[12px] font-semibold px-3.5 py-2 rounded-xl hover:bg-[#5a4838] hover:scale-105 transition-all"
            >
              <i data-lucide="shopping-cart" class="w-[14px] h-[14px]"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>`;

    all_html += html_data;
  });
  container.innerHTML = all_html;
  if (window.lucide) {
    lucide.createIcons();
  }
};

renderData();

const toTop = document.getElementById("getToTop");
toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  toTop.style.opacity = window.scrollY > 300 ? "1" : "0";
  toTop.style.pointerEvents = window.scrollY > 300 ? "auto" : "none";
});
