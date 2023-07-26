import React from "react";

const Banner = () => {
  return (
    <div>
      <div class="bg-slate-500">
        <img
          class="w-screen h-96"
          src="images/banner.jpg"
          alt="Girl in a jacket"
        />
      </div>

      <div>
        <div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                <div class="flex flex-col items-start">
                  <div class="box-content h-72 w-52 p-4 border-4 ..."></div>
                </div>
                <div class="flex flex-col items-start">
                  <div class="box-content h-72 w-52 p-4 border-4 ..."></div>
                </div>
              </dl>

              <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                <div class="flex flex-col items-start">
                  <div class="box-content h-72 w-52 p-4 border-4 ..."></div>
                </div>
                <div class="flex flex-col items-start">
                  <div class="box-content h-72 w-52 p-4 border-4 ..."></div>
                </div>
              </dl>
            </div>
          </div>

          <div
            class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
            aria-hidden="true"
          >
            <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"></div>
          </div>
        </div>
      </div>
      {/* //quote */}
      <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
        <div class="flex flex-col items-center py-16 ">
          <p class="font-bold  sm:text-sm   	font-style: normal text-xl font-serif text-white">
            WHERE MEMORIES ARE MADE
          </p>
          <p class="py-6  font-bold 	font-style: normal md:text-4xl lg:text-4xl sm:text-sm font-mono text-white  ">
            An unforgettable experience
          </p>
        </div>
      </div>

      {/* //Madikai sample images */}

      <div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div class="flex flex-col items-center py-16">
          <img class="h-screen " src="images/front1.jpg" alt="madikai" />
        </div>

        <div
          class="absolute left-1/2 top-16 -z-10 -translate-x-1/2 blur-3xl xl:-top-6 mt-40"
          aria-hidden="true"
        >
          <div class=" aspect-[1155/678] w-[72.1875rem] h-[52.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"></div>
        </div>
      </div>

      {/* //colour inversion */}
      <div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div
          class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div class="aspect-[1155/678] w-[72.1875rem]  bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

{
  /* 

<div class="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
  <div class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
    <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"></div>
  </div>
  <div class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
    <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"></div>
  </div>
  <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
    <p class="text-sm leading-6 text-gray-900">
      <strong class="font-semibold">GeneriCon 2023</strong><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>Join us in Denver from June 7 – 9 to see what’s coming next.
    </p>
    <a href="#" class="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Register now <span aria-hidden="true">&rarr;</span></a>
  </div>
  <div class="flex flex-1 justify-end">
    <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
      <span class="sr-only">Dismiss</span>
      <svg class="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </button>
  </div>
</div> */
}
