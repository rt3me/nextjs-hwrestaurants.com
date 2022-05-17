import type { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Disclosure } from '@headlessui/react'
import {
  LocationMarkerIcon,
  SparklesIcon,
  InboxIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

import Layout from '../components/Layout'
import type { NextPageWithLayout } from './_app'

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

const Page: NextPageWithLayout = () => (
  <>
    {/*
      This example requires updating your template:

      ```
      <html class="h-full bg-gray-100">
      <body class="h-full">
      ```
    */}
    <Head>
      <title>Test Home Page | Howard Wang&lsquo;s Restaurants</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Test Home Page | Howard Wang&lsquo;s Restaurants is a group of high-end Chinese restaurants based in Texas."
      />
    </Head>
    {/* Replace with your content */}
    <div className="sm:py-4">
      {/* <div className="border-4 border-gray-200 border-dashed rounded-lg h-96" /> */}
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
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-700 mix-blend-multiply" />
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
    </div>
    {/* /End replace */}
  </>
)

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
