import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Fragment } from 'react'
import { Popover, Transition, Disclosure } from '@headlessui/react'
import {
  LocationMarkerIcon,
  InboxIcon,
  MenuIcon,
  SparklesIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Footer from '../components/Footer'
import logoMarkSVG from '../public/howard-wangs-logomark.svg'
import combinationMarkSVG from '../public/howard-wangs-combinationmark.svg'
import chefFlamingWokDump from '../public/images/chef-flaming-wok-dump.jpg'
import stirFryWok from '../public/images/stir-fry-wok.jpg'
import steamingChickenDish from '../public/images/steaming-chicken-dish.jpg'

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
    href: '#news',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const news = [
  {
    title: 'Frisco Location Closed',
    text: 'We regret to inform you that The Star in Frisco is closing down for good. Unfortunately, the pandemic was not enough to sustain our restaurant. On a brighter note, we are opening a new location in far North Dallas on Hillcrest/Arapaho at Hillcrest Village. We wanted to take the time out to thank all of our loyal patrons throughout the years!',
  },
  {
    title: 'COVID Update',
    text: 'Now and always, the health and safety of our guests and team members remain our top priority. Please be assured that we are taking every possible safety protocol and are closely monitoring all CDC guidelines to protect against the exposure of the Coronavirus. During this time, our stores have new hours and will be offering Takeout and Delivery Only. Our 3rd Party Delivery services are taking additional steps to ensure safe food handling and protection for their drivers and our customers by offering non-contact delivery to your doorstep. Thank you for your support of our small family business as we navigate this challenging situation one day at a time. With love and gratitude, Howard & The Family',
  },
]

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
              <a className="flex md:hidden lg:flex">
                <span className="sr-only">Workflow</span>
                <Image
                  className="h-20 w-auto sm:h-10"
                  src={combinationMarkSVG}
                  alt="Howard Wang&lsquo;s Logo Mark"
                  height="50"
                  width="238"
                />
              </a>
            </Link>
            <Link href="/">
              <a className="hidden md:flex lg:hidden">
                <span className="sr-only">Workflow</span>
                <Image
                  className="h-20 w-auto sm:h-10"
                  src={logoMarkSVG}
                  alt="Howard Wang&lsquo;s Logo Mark"
                  height="50"
                  width="50"
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
                    <Popover.Panel className="absolute z-10 mt-3 -ml-4 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {locations.map((item) => (
                            <Link key={item.name} href={item.href}>
                              <a className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-red-700 text-white sm:h-12 sm:w-12">
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

            <Link href="#news">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                News
              </a>
            </Link>
            <Link href="#togo">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                To Go
              </a>
            </Link>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a
              href="http://ezcater.com/brand/pvt/howard-wangs-uptown"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
            >
              Catering
            </a>
            <a
              href="https://order.chownow.com/order/3661/locations"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-700 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-600"
              target="_blank"
              rel="noreferrer"
            >
              Order Online
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
                      className="h-20 w-auto sm:h-10"
                      src={logoMarkSVG}
                      alt="Howard Wang&lsquo;s Logo Mark"
                      height="50"
                      width="50"
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
                  <nav className="grid grid-cols-1 justify-center gap-7">
                    {locations.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a className="-m-3 flex items-center justify-center rounded-lg p-3 hover:bg-gray-50">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-red-700 text-white">
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
              <div className="px-5 py-6">
                <div className="grid grid-cols-1 gap-4">
                  <Link href="#news">
                    <a className="w-100 text-center text-base font-medium text-gray-900 hover:text-gray-700">
                      News
                    </a>
                  </Link>
                  <Link href="#togo">
                    <a className="w-100 text-center text-base font-medium text-gray-900 hover:text-gray-700">
                      To Go
                    </a>
                  </Link>
                  <Link href="http://ezcater.com/brand/pvt/howard-wangs-uptown">
                    <a
                      className="w-100 text-center text-base font-medium text-gray-900 hover:text-gray-700"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Catering
                    </a>
                  </Link>
                </div>
                <div className="mt-6">
                  <a
                    href="https://order.chownow.com/order/3661/locations"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-700 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-600"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Order Online
                  </a>
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
                src={chefFlamingWokDump}
                alt="Chef tilting flaming wok"
                layout="fill"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">Visit us today at</span>
                <span className="block text-white">Howard Wang&lsquo;s</span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                A uniquely luxurious yet welcoming group of restaurants in Texas
                where you will find a dining experience your whole family will
                not forget.
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                  <a
                    href="#locations"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-black shadow-sm hover:bg-gray-100 sm:px-8"
                  >
                    Locations
                  </a>
                  <Link href="#news">
                    <a className="flex items-center justify-center rounded-md border border-transparent bg-gray-500 bg-opacity-70 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-80 sm:px-8">
                      News
                    </a>
                  </Link>
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
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-red-700">
                    <InboxIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Dallas Observer Review
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    &ldquo;The first thing you notice is the sleek décor – then
                    the outstanding service. Of course, everything hinges on the
                    food, and here Howard Wang&lsquo;s delivers with top-notch
                    ingredients and preparation. Now when we want a Chinese food
                    fix, this is where we go.&ldquo;
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="relative -mr-48 pl-4">
                <Image
                  className="absolute left-0 w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                  src={stirFryWok}
                  alt="Wok with stir fry"
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
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-red-700">
                    <SparklesIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Tripadvisor Review
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    &ldquo;Chinese Food can be tricky, and it&lsquo;s sometimes
                    hard to find someone who does it right. Howard Wang&lsquo;s
                    is one of those places. The food is very fresh, and each
                    dish that I&lsquo;ve ordered here never disappoints. You
                    leave full, and you never regret coming. Check them
                    out!&ldquo;
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="relative -ml-48 pr-4">
                <Image
                  className="absolute right-0 w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                  src={steamingChickenDish}
                  alt="Steaming chicken dish"
                  width="952"
                  height="571"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div id="news" className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Latest News
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {news.map((item) => (
                <Disclosure as="div" key={item.title} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                          <span className="font-medium text-gray-900">
                            {item.title}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            <ChevronDownIcon
                              className={classNames(
                                open ? '-rotate-180' : 'rotate-0',
                                'h-6 w-6 transform'
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base text-gray-500">{item.text}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Gradient Feature Section */}
      <div id="locations" className="bg-black">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Locations
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-gray-200">
            In our several locations throughout Texas, Howard Wan&lsquo;s
            Restaurants offers an exceptional dining experience you will not
            want to miss. Click a location for more details.
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
                    <p className="mt-2 text-base text-gray-200">
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
      <div id="togo" className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Why not treat yourself?</span>
            <span className="-mb-1 block pb-1 text-red-700">
              Order to go from Mandarin, by Howard Wang&lsquo;s.
            </span>
          </h2>
          <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
            <a
              href="tel:4697944343"
              className="flex items-center justify-center rounded-md border border-transparent bg-red-700 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-red-600"
            >
              Call Now
            </a>
            <Link href="/testlanding">
              <a className="flex items-center justify-center rounded-md border border-transparent bg-black px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900">
                About Mandarin
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
)

export default TestHome
