import React, { useState } from 'react';

// Hero Block 1: Simple Centered
export const Hero1 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-white dark:bg-gray-900 min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">YourCompany</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Product</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Features</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Marketplace</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Company</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Log in <span aria-hidden="true">&rarr;</span></a>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50" />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-white/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <span className="text-xl font-bold text-indigo-600">YourCompany</span>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-500/25">
                  <div className="space-y-2 py-6">
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">Product</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">Features</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">Marketplace</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">Company</a>
                  </div>
                  <div className="py-6">
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">Log in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      <div className="relative isolate px-6 lg:px-8 w-full">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-gray-400 ring-1 ring-gray-900/10 dark:ring-white/10 hover:ring-gray-900/20 dark:hover:ring-white/20">
              Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600 dark:text-indigo-400"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Data to enrich your online business</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+3rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
      </div>
    </div>
  );
};

// Hero Block 2: Split with Screenshot
export const Hero2 = () => (
  <div className="bg-white dark:bg-gray-900 min-h-[calc(100vh-4rem)] flex items-center justify-center">
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 dark:from-indigo-900/20 w-full">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-20">
        <div className="px-6 lg:px-0 lg:pt-4">
          <div className="mx-auto max-w-2xl">
            <div className="max-w-lg">
              <div className="h-11 flex items-center">
                <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">YourCompany</span>
              </div>
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <a href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-indigo-600/10 dark:bg-indigo-500/20 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400 ring-1 ring-inset ring-indigo-600/10 dark:ring-indigo-500/20">What's new</span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600 dark:text-gray-300">
                    <span>Just shipped v1.0</span>
                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </span>
                </a>
              </div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Supercharge your web applications</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
              <div className="mt-10 flex items-center gap-x-6">
                <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Documentation</a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">View on GitHub <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
          <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white dark:bg-gray-900 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 dark:ring-indigo-900/10 md:-mr-20 lg:-mr-36" aria-hidden="true"></div>
          <div className="shadow-lg md:rounded-3xl">
            <div className="bg-indigo-500 dark:bg-indigo-900 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
              <div className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 dark:bg-indigo-800 opacity-20 ring-1 ring-inset ring-white dark:ring-0 md:ml-20 lg:ml-36" aria-hidden="true"></div>
              <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                  <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">Notification.jsx</div>
                        <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                      </div>
                    </div>
                    <div className="px-6 pb-14 pt-6">
                      <pre className="text-sm text-gray-300">
                        <code>
                          {`import { useState } from 'react'
import { Switch } from '@headlessui/react'

function Example() {
  const [enabled, setEnabled] = useState(true)

  return (
    <form action="/notification-settings" method="post">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        name="notifications"
      >
        {/* ... */}
      </Switch>
      <button>Submit</button>
    </form>
  )
}`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white dark:from-gray-900 sm:h-32"></div>
    </div>
  </div>
);

// Hero Block 3: Split with Image
export const Hero3 = () => (
  <div className="relative bg-white dark:bg-gray-900 min-h-[calc(100vh-4rem)] flex items-center justify-center">
    <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 w-full">
      <div className="px-6 lg:col-span-7 lg:px-0 xl:col-span-6">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="h-11 flex items-center">
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">YourCompany</span>
          </div>
          <div className="hidden sm:mt-32 sm:flex lg:mt-16">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 dark:text-gray-400 ring-1 ring-gray-900/10 dark:ring-gray-300/20 hover:ring-gray-900/20 dark:hover:ring-gray-300/30">
              Anim aute id magna aliqua ad ad non deserunt sunt. <a href="#" className="whitespace-nowrap font-semibold text-indigo-600 dark:text-indigo-400"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:mt-10 sm:text-6xl">Data to enrich your online business</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
          <div className="mt-10 flex items-center gap-x-6">
            <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Learn more <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
        <img className="aspect-[3/2] w-full bg-gray-50 dark:bg-gray-800 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80" alt="" />
      </div>
    </div>
  </div>
);

// Hero Block 4: Split with Code Example
export const Hero4 = () => (
  <div className="overflow-hidden bg-white dark:bg-gray-900 py-24 sm:py-32 min-h-screen">
    <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
        <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Deploy faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">A better workflow</p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none">
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900 dark:text-white">
                  <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600 dark:text-indigo-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd" />
                  </svg>
                  Push to deploy.
                </dt>
                <dd className="inline"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
              </div>
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900 dark:text-white">
                  <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600 dark:text-indigo-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                  </svg>
                  SSL certificates.
                </dt>
                <dd className="inline"> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</dd>
              </div>
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900 dark:text-white">
                  <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600 dark:text-indigo-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                    <path fillRule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 010 1.5h-.01a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                  </svg>
                  Database backups.
                </dt>
                <dd className="inline"> Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="sm:px-6 lg:px-0">
          <div className="relative isolate overflow-hidden bg-indigo-500 dark:bg-indigo-700 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
            <div className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 dark:bg-indigo-800 opacity-20 ring-1 ring-inset ring-white dark:ring-0" aria-hidden="true"></div>
            <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80" alt="Product screenshot" className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10 object-cover" />
            </div>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Hero Block 5: Simple Centered with Background Image
export const Hero5 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-gray-900 dark:bg-black min-h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <span className="text-xl font-bold text-indigo-500 dark:text-indigo-400">YourCompany</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-white dark:text-gray-100">Product</a>
            <a href="#" className="text-sm font-semibold leading-6 text-white dark:text-gray-100">Features</a>
            <a href="#" className="text-sm font-semibold leading-6 text-white dark:text-gray-100">Marketplace</a>
            <a href="#" className="text-sm font-semibold leading-6 text-white dark:text-gray-100">Company</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white dark:text-gray-100">Log in <span aria-hidden="true">&rarr;</span></a>
          </div>
        </nav>
      </header>
      <div className="relative isolate overflow-hidden pt-14">
        <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 dark:text-gray-300 ring-1 ring-white/10 dark:ring-gray-600/20 hover:ring-white/20 dark:hover:ring-gray-500/30">
              Announcing our next round of funding. <a href="#" className="font-semibold text-white dark:text-gray-100"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white dark:text-gray-100 sm:text-6xl">Data to enrich your online business</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 dark:text-gray-400">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="rounded-md bg-indigo-500 dark:bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 dark:hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 dark:focus-visible:outline-indigo-500">Get started</a>
              <a href="#" className="text-sm font-semibold leading-6 text-white dark:text-gray-100">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+3rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
      </div>
    </div>
  );
};

// Hero Block 6: With Bordered App Screenshot
export const Hero6 = () => (
  <div className="bg-white dark:bg-gray-900 min-h-[calc(100vh-4rem)] flex items-center justify-center">
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 dark:from-indigo-900/20 w-full">
      <div className="absolute inset-y-0 right-1/2 -z-10 -mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white dark:bg-gray-900 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 dark:ring-indigo-800/20 sm:-mr-28 lg:-mr-0 xl:-mr-16 xl:origin-center"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="h-11 flex items-center">
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">YourCompany</span>
          </div>
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-600/10 dark:bg-indigo-500/20 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400 ring-1 ring-inset ring-indigo-600/10 dark:ring-indigo-500/20">Beta release</span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600 dark:text-gray-300">
                <span>Try our new features</span>
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Experience the future of development</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">Cutting-edge tools and frameworks that empower developers to build faster, smarter, and more scalable applications.</p>
          <div className="mt-10 flex items-center gap-x-6">
            <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Join beta</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">View roadmap <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white dark:from-gray-900 sm:h-32"></div>
    </div>
  </div>
);

// Hero Block 7: With App Screenshot
export const Hero7 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="relative isolate pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Deploy to the cloud with confidence</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Learn more <span aria-hidden="true">→</span></a>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80" alt="App screenshot" className="rounded-md shadow-2xl ring-1 ring-gray-900/10 object-cover w-full h-64 lg:h-96" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+3rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
      </div>
    </div>
  );
};

// Hero Block 8: Split with Image
export const Hero8 = () => (
  <div className="relative bg-white dark:bg-gray-900 min-h-[calc(100vh-4rem)] flex items-center justify-center">
    <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 w-full">
      <div className="px-6 lg:col-span-7 lg:px-0 xl:col-span-6">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="h-11 flex items-center">
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">YourCompany</span>
          </div>
          <div className="hidden sm:mt-32 sm:flex lg:mt-16">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 dark:text-gray-400 ring-1 ring-gray-900/10 dark:ring-gray-300/20 hover:ring-gray-900/20 dark:hover:ring-gray-300/30">
              New features available. <a href="#" className="whitespace-nowrap font-semibold text-indigo-600 dark:text-indigo-400"><span className="absolute inset-0" aria-hidden="true"></span>View changelog <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:mt-10 sm:text-6xl">Build faster with our platform</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">Streamline your development workflow with our comprehensive suite of tools and services designed to accelerate your project delivery.</p>
          <div className="mt-10 flex items-center gap-x-6">
            <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Start building</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">View examples <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
        <img className="aspect-[3/2] w-full bg-gray-50 dark:bg-gray-800 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="" />
      </div>
    </div>
  </div>
);

// Hero Block 9: With Angled Image on Right
export const Hero9 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white dark:fill-gray-900 lg:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>
            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="h-11 flex items-center mb-6">
                  <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">YourCompany</span>
                </div>
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 dark:text-gray-400 ring-1 ring-gray-900/10 dark:ring-gray-300/20 hover:ring-gray-900/20 dark:hover:ring-gray-300/30">
                    Anim aute id magna aliqua ad ad non deserunt sunt. <a href="#" className="whitespace-nowrap font-semibold text-indigo-600 dark:text-indigo-400"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                  </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Data to enrich your online business</h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Learn more <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="" />
        </div>
      </div>
    </div>
  );
};

// Hero Block 10: With Image Tiles
export const Hero10 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <main>
        <div className="relative isolate">
          <svg className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 dark:stroke-gray-700 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
            <defs><pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse"><path d="M.5 200V.5H200" fill="none" /></pattern></defs>
            <svg x="50%" y="-1" className="overflow-visible fill-gray-50 dark:fill-gray-800/20"><path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth="0" /></svg>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
          </svg>
          <div className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
            <div className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style={{ clipPath: 'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)' }}></div>
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <div className="h-11 flex items-center mb-6">
                    <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">YourCompany</span>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">We're changing the way people connect.</h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:max-w-md lg:max-w-none">Cupidatat minim id magna incididunt sint dolor lorem nulla est est. Ac officia laboris non nisi commodo culpa commodo ea consectetur paedicta.</p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Live demo <span aria-hidden="true">→</span></a>
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative"><img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" /><div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div></div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative"><img src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" /><div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div></div>
                    <div className="relative"><img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80" alt="" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" /><div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div></div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative"><img src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80" alt="" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" /><div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div></div>
                    <div className="relative"><img src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" /><div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Hero Block 11: With Offset Image
export const Hero11 = () => (
  <div className="relative bg-white dark:bg-gray-900 min-h-screen">
    <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
      <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="h-11 flex items-center">
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">YourCompany</span>
          </div>
          <div className="hidden sm:mt-32 sm:flex lg:mt-16">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 dark:text-gray-400 ring-1 ring-gray-900/10 dark:ring-gray-300/20 hover:ring-gray-900/20 dark:hover:ring-gray-300/30">
              Enterprise ready. <a href="#" className="whitespace-nowrap font-semibold text-indigo-600 dark:text-indigo-400"><span className="absolute inset-0" aria-hidden="true"></span>Learn more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:mt-10 sm:text-6xl">Scale your business with confidence</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">Enterprise-grade solutions designed to handle your growing business needs with reliability, security, and performance at scale.</p>
          <div className="mt-10 flex items-center gap-x-6">
            <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Contact sales</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Schedule demo <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
        <img className="aspect-[3/2] w-full bg-gray-50 dark:bg-gray-800 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80" alt="" />
      </div>
    </div>
  </div>
);

// Hero Block 12: Minimalist Centered
export const Hero12 = () => (
  <div className="bg-white dark:bg-gray-900 min-h-[calc(100vh-4rem)] flex items-center justify-center">
    <div className="relative isolate px-6 lg:px-8 w-full">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Ready to get started?</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">Join thousands of developers and businesses who trust our platform to build amazing products.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up for free</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Contact us <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+3rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
    </div>
  </div>
);
