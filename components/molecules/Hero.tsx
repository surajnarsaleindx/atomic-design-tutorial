const Hero = () => {
  return (
    <div className="bg-gray-50">
      <header className="relative z-10 py-4 md:py-6" x-data="{expanded: false}">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="flex-shrink-0">
              <a
                href="#"
                title=""
                className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                <img
                  className="h-8 w-auto"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg"
                  alt=""
                />
              </a>
            </div>

            <div className="flex md:hidden">
              <button type="button" className="text-gray-900">
                <span x-show="!expanded" aria-hidden="true">
                  <svg
                    className="h-7 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>

                <span x-show="expanded" aria-hidden="true">
                  <svg
                    className="h-7 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <div className="hidden md:absolute md:inset-y-0 md:left-1/2 md:flex md:-translate-x-1/2 md:items-center md:justify-center md:space-x-10 lg:space-x-16">
              <a
                href="#"
                title=""
                className="font-pj rounded text-base font-medium text-gray-900 transition-all duration-200 hover:text-opacity-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {' '}
                Features{' '}
              </a>

              <a
                href="#"
                title=""
                className="font-pj rounded text-base font-medium text-gray-900 transition-all duration-200 hover:text-opacity-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {' '}
                Pricing{' '}
              </a>

              <a
                href="#"
                title=""
                className="font-pj rounded text-base font-medium text-gray-900 transition-all duration-200 hover:text-opacity-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {' '}
                Support{' '}
              </a>
            </div>

            <div className="hidden md:flex">
              <a
                href="#"
                title=""
                className="font-pj inline-flex items-center justify-center rounded border border-transparent bg-gray-900 px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                role="button"
              >
                Try for free
              </a>
            </div>
          </div>

          {/* <nav x-collapse>
            <div className="px-1 py-8">
              <div className="grid gap-y-7">
                <a
                  href="#"
                  title=""
                  className="font-pj -m-3 flex items-center rounded p-3 text-base font-medium text-gray-900 transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {' '}
                  Features{' '}
                </a>

                <a
                  href="#"
                  title=""
                  className="font-pj -m-3 flex items-center rounded p-3 text-base font-medium text-gray-900 transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {' '}
                  Pricing{' '}
                </a>

                <a
                  href="#"
                  title=""
                  className="font-pj -m-3 flex items-center rounded p-3 text-base font-medium text-gray-900 transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {' '}
                  Support{' '}
                </a>

                <a
                  href="#"
                  title=""
                  className="font-pj inline-flex items-center justify-center rounded border border-transparent bg-gray-900 px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                  role="button"
                >
                  Try for free
                </a>
              </div>
            </div>
          </nav> */}
        </div>
      </header>

      <section className="relative py-12 sm:py-16 lg:pb-40">
        <div className="absolute bottom-0 right-0 overflow-hidden">
          <img
            className="h-auto w-full origin-bottom-right scale-150 transform lg:mx-auto lg:w-auto lg:scale-75 lg:object-cover"
            src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
            alt=""
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:items-center xl:grid-cols-2">
            <div className="text-center md:px-16 lg:px-0 lg:text-left xl:col-span-1 xl:pr-20">
              <h1 className="font-pj text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
                An editor that helps you write clean codes.
              </h1>
              <p className="font-inter mt-2 text-lg text-gray-600 sm:mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim
                luctus. Rutrum arcu.
              </p>

              <a
                href="#"
                title=""
                className="font-pj mt-8 inline-flex rounded border border-transparent bg-gray-900 px-8 py-4 text-lg font-bold text-white transition-all duration-200 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 sm:mt-10"
                role="button"
              >
                Try our free editor
              </a>

              <div className="mt-8 sm:mt-16">
                <div className="flex items-center justify-center lg:justify-start">
                  <svg
                    className="h-5 w-5 text-[#FDB241]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="h-5 w-5 text-[#FDB241]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="h-5 w-5 text-[#FDB241]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="h-5 w-5 text-[#FDB241]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="h-5 w-5 text-[#FDB241]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <blockquote className="mt-6">
                  <p className="font-pj text-lg font-bold text-gray-900">
                    Best code editor in market!
                  </p>
                  <p className="font-inter mt-3 text-base leading-7 text-gray-600">
                    Consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu, aliquam
                    nulla tincidunt gravida. Cursus convallis dolor semper pretium ornare.
                  </p>
                </blockquote>

                <div className="mt-3 flex items-center justify-center lg:justify-start">
                  <img
                    className="h-6 w-6 flex-shrink-0 overflow-hidden rounded-full object-cover"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/avatar-female.png"
                    alt=""
                  />
                  <p className="font-pj ml-2 text-base font-bold text-gray-900">Denny Jones</p>
                </div>
              </div>
            </div>

            <div className="xl:col-span-1">
              <img
                className="mx-auto w-full"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Hero
