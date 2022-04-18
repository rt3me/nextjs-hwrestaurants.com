import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  LocationMarkerIcon,
  InboxIcon,
  MenuIcon,
  SparklesIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Footer from '../components/Footer'

const locations = [
  {
    name: 'Preston Hollow',
    description:
      'The ultra contemporary atmosphere brings customers a feeling of relaxation and comfort while dining with family and friends.',
    addressStreet: '4343 W Northwest Hwy #345',
    addressCityStateZip: 'Dallas, TX 75220',
    icon: LocationMarkerIcon,
    href: '/testlanding',
  },
  {
    name: 'Uptown',
    description:
      "Since our opening in April of 2011, Howard Wang's Uptown China Brasserie has quickly become THE destination for quality Chinese cuisine.",
    addressStreet: '3223 Lemmon Ave #103',
    addressCityStateZip: 'Dallas, TX 75204',
    icon: LocationMarkerIcon,
    href: '/testlanding',
  },
  {
    name: 'Mandarin To Go',
    description:
      "A new concept by Howard Wang's restaurants, Mandarin to Go is the source for your to go meals.",
    addressStreet: '921 W Commerce St',
    addressCityStateZip: 'Dallas, TX 75208',
    icon: LocationMarkerIcon,
    href: '/testlanding',
  },
  {
    name: 'Frisco at the Star',
    description:
      'We regret to inform you that The Star in Frisco is closing down for good.',
    addressStreet: '6740 Winning Dr Suite 1000',
    addressCityStateZip: 'Frisco, TX 75034',
    icon: LocationMarkerIcon,
    href: '#frisco',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const TestHome: NextPage = () => (
  <>
    <Head>
      <title>Test Home Page | Howard Wang&lsquo;s Restaurants</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Test Home Page | Howard Wang&lsquo;s Restaurants is a group of high-end Chinese restaurants based in Texas."
      />
    </Head>
    <header>
      <Popover className="relative bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">Workflow</span>
                <Image
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                  alt="Logo"
                  width="40"
                  height="40"
                />
              </a>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    )}
                  >
                    <span>Locations</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {locations.map((item) => (
                            <Link key={item.name} href={item.href}>
                              <a className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:h-12 sm:w-12">
                                  <item.icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link href="/pricing">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Pricing
              </a>
            </Link>
            <Link href="/partners">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Partners
              </a>
            </Link>
            <Link href="/company">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Company
              </a>
            </Link>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
            >
              Sign up
            </a>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                      alt="Workflow"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">
                    {locations.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">
                            {item.name}
                          </div>
                        </a>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/pricing">
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Pricing
                    </a>
                  </Link>
                  <Link href="/partners">
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Partners
                    </a>
                  </Link>
                  <Link href="/company">
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Company
                    </a>
                  </Link>
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?
                    <a href="#" className="text-gray-900">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>

    <main>
      {/* Hero section */}
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                alt="People working on laptops"
                layout="fill"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">Take control of your</span>
                <span className="block text-indigo-200">customer support</span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alternating Feature Sections */}
      <div className="relative overflow-hidden pt-16 pb-32">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
        />
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
                    <InboxIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Stay on top of customer support
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Semper curabitur ullamcorper posuere nunc sed. Ornare
                    iaculis bibendum malesuada faucibus lacinia porttitor.
                    Pulvinar laoreet sagittis viverra duis. In venenatis sem
                    arcu pretium pharetra at. Lectus viverra dui tellus ornare
                    pharetra.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="relative -mr-48 pl-4">
                <Image
                  className="absolute left-0 w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                  alt="Inbox user interface"
                  width="952"
                  height="571"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
                    <SparklesIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Better understand your customers
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Semper curabitur ullamcorper posuere nunc sed. Ornare
                    iaculis bibendum malesuada faucibus lacinia porttitor.
                    Pulvinar laoreet sagittis viverra duis. In venenatis sem
                    arcu pretium pharetra at. Lectus viverra dui tellus ornare
                    pharetra.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="relative -ml-48 pr-4">
                <Image
                  className="absolute right-0 w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                  alt="Customer profile user interface"
                  width="952"
                  height="571"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Feature Section */}
      <div className="bg-gradient-to-r from-purple-800 to-indigo-700">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Locations
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-purple-200">
            In our several locations throughout Texas, Howard Wan&lsquo;s
            Restaurants offers an exceptional dining experience you will not
            want to miss.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
            {locations.map((location) => (
              <Link href={location.href} key={location.name}>
                <a className="block">
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                      <location.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white">
                      {location.name}
                    </h3>
                    <p className="mt-2 text-base text-purple-200">
                      {location.addressStreet}
                      <br />
                      {location.addressCityStateZip}
                      <br />
                      <br />
                      {location.description}
                    </p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-4xl py-16 px-4 sm:px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="-mb-1 block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text pb-1 text-transparent">
              Get in touch or create an account.
            </span>
          </h2>
          <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
            >
              Learn more
            </a>
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-50 px-4 py-3 text-base font-medium text-indigo-800 shadow-sm hover:bg-indigo-100"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
)

export default TestHome
