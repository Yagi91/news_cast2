export default function Footer({}) {
  return (
    <footer className="bg-ncDark">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-4 lg:col-span-1 space-y-8">
            <div className="gap-4 items-center flex">
              {/* <img src="../assets/images/logo.png" alt="" /> */}
              <h1 className="font-header font-bold text-4xl text-white cursor-pointer">
                News<span className="text-primary-500 font-header">cast</span>
              </h1>
            </div>
            <p className="text-white opacity-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque,
              pellentesque dictum posuere id diam rutrum.
            </p>
            <div className="flex items-center justify-start gap-x-8">
              <div className="h-12 w-12 rounded-[48px] flex bg-[#1B7BFD] justify-center items-center">
                {/* <img src="../assets/images/facebook.svg" alt="" /> */}
              </div>
              <div className="h-12 w-12 rounded-[48px] bg-[#42C0F5] flex justify-center items-center">
                {/* <img src="../assets/images/twitter.svg" alt="" /> */}
              </div>
              <div className="h-12 w-12 rounded-[48px] bg-[#C23785] flex justify-center items-center">
                {/* <img src="../assets/images/instagram.svg" alt="" /> */}
              </div>
              <div className="h-12 w-12 rounded-[48px] bg-[#EF5043] flex justify-center items-center">
                {/* <img src="../assets/images/youtube.svg" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
