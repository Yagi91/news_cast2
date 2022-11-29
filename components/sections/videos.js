export default function Videos({}) {
  return (
    <section class="lg:p-0 container mx-auto lg:grid lg:grid-cols-4 my-6">
      <div class="lg:col-span-3">
        <div class="px-6 flex items-center justify-between bg-[url('../public/images/promo_cover.jpg')] bg-cover">
          <div class="text-white font-light text-xs lg:text-base py-2">
            <p>Best selling book and magazine</p>
            <p>Theme of all time</p>
            <p class="font-header italic text-primary-600 my-1">
              Experience the change
            </p>
          </div>
          <div>
            <button class="bg-primary-500 hover:bg-primary-600 hover:transition-all text-white px-2 lg:px-6 lg:py-4 py-2">
              Purchase Now
            </button>
          </div>
        </div>
        <div class="p-4 lg:0 divide-y divide-ncDark">
          <h2 class="text-primary-500 font-header text-2xl py-2">Videos</h2>
          <div class="grid grid-cols-3 gap-4 py-4">
            <a href="#" class="block col-span-3">
              <div
                class="bg-cover h-96 p-4"
                // style="background-image: url('../assets/images/33.jpg')"
              >
                <div class="flex items-end justify-center h-1/2">
                  {/* <img src="../assets/images/play.svg" alt="" /> */}
                </div>
                <div class="flex flex-col justify-end h-1/2">
                  <p class="text-white font-light opacity-75">
                    Craig Bator - 27 Dec 2020
                  </p>
                  <h3 class="text-2xl font-bold text-white">
                    Play This Game for Free on Epic Store This Weekend
                  </h3>
                </div>
              </div>
            </a>
            <div class="col-span-3 lg:col-span-1">
              <a href="#" class="block">
                <div
                  class="bg-cover flex items-center h-48 justify-center"
                  // style="background-image: url('../assets/images/34.jpg')"
                >
                  {/* <img src="../assets/images/play.svg" alt="" srcset="" /> */}
                </div>
                <div class="mt-4">
                  <p class="font-light text-xs">Craig Bator - 27 Dec 2020</p>
                  <h3 class="font-header text-xl my-2">
                    At Value-Focused Hotels, the Free Breakfast Gets Bigger
                  </h3>
                </div>
              </a>
            </div>
            <div class="col-span-3 lg:col-span-1">
              <a href="#" class="block">
                <div
                  class="bg-cover flex items-center h-48 justify-center"
                  // style="background-image: url('../assets/images/35.jpg')"
                >
                  {/* <img src="../assets/images/play.svg" alt="" srcset="" /> */}
                </div>
                <div class="mt-4">
                  <p class="font-light text-xs">Craig Bator - 27 Dec 2020</p>
                  <h3 class="font-header text-xl my-2">
                    Failure is the condiment that gives success its flavor
                  </h3>
                </div>
              </a>
            </div>
            <div class="col-span-3 lg:col-span-1">
              <a href="#" class="block">
                <div
                  class="bg-cover flex items-center h-48 justify-center"
                  // style="background-image: url('../assets/images/36.jpg')"
                >
                  {/* <img src="../assets/images/play.svg" alt="" srcset="" /> */}
                </div>
                <div class="mt-4">
                  <p class="font-light text-xs">Craig Bator - 27 Dec 2020</p>
                  <h3 class="font-header text-xl my-2">
                    Les nouveaux maillots du Real Madrid pour la saison
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
