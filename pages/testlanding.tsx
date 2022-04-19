import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, NewspaperIcon } from '@heroicons/react/outline'
import Footer from '../components/Footer'
import logoSVG from '../public/howard-wangs-logo.svg'
import logoMarkSVG from '../public/howard-wangs-logomark.svg'
import chefFlamingWokFlyingFood from '../public/images/chef-flaming-wok-flying-food.jpg'
import varietyChineseDishes from '../public/images/variety-chinese-dishes.jpg'

const navigation = [
  { name: 'Menu', href: '#menu' },
  { name: 'Delivery', href: '#deliverytakeout' },
  { name: 'Reservations', href: '#reservations' },
  { name: 'All Locations', href: '/' },
]

const TestLanding: NextPage = () => (
  <>
    <Head>
      <title>Uptown | Howard Wang&lsquo;s Restaurants</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Uptown Howard Wang&lsquo;s Restaurants is a group of high-end Chinese restaurants based in Texas."
      />
    </Head>
    <header>
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Popover>
              <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                    <div className="flex w-full items-center justify-between md:w-auto">
                      <Link href="/">
                        <a className="flex">
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
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a className="font-medium text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </Link>
                    ))}
                    <a
                      href="#specials"
                      className="font-medium text-red-700 hover:text-red-600"
                    >
                      Specials
                    </a>
                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                >
                  <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                    <div className="flex items-center justify-between px-5 pt-4">
                      <div>
                        <Image
                          className="h-8 w-auto"
                          src={logoMarkSVG}
                          width="40"
                          height="40"
                          alt="Howard Wang&lsquo;s Logo"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600">
                          <span className="sr-only">Close main menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="space-y-1 px-2 pt-2 pb-3">
                      {navigation.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                    <Link href="#specials">
                      <a className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-red-700 hover:bg-gray-100">
                        Specials
                      </a>
                    </Link>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <div className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <Image
                    className="h-8 w-auto sm:h-10"
                    src={logoSVG}
                    alt="Howard Wang&lsquo;s Logo"
                    height="82"
                    width="500"
                  />
                  <span className="block text-red-700">
                    <span className="sr-only">Howard Wang&lsquo;s</span>
                    uptown
                  </span>
                </h1>
                <p className="mt-3 block text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="https://order.chownow.com/order/3661/locations"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-700 px-8 py-3 text-base font-medium text-white hover:bg-red-600 md:py-4 md:px-10 md:text-lg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Order Online
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="http://ezcater.com/brand/pvt/howard-wangs-uptown"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-900 md:py-4 md:px-10 md:text-lg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Catering
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#contact"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-900 md:py-4 md:px-10 md:text-lg"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:absolute lg:inset-y-0 lg:right-0 lg:hidden lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src={chefFlamingWokFlyingFood}
            alt="Chef with flaming wok and flying food"
            width="1024"
            height="400"
          />
        </div>
        <div className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src={chefFlamingWokFlyingFood}
            alt="Chef with flaming wok and flying food"
            layout="fill"
          />
        </div>
      </div>
    </header>
    <main>
      {/* Contact section */}
      <div className="bg-black">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="divide-y-2 divide-gray-500">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                Details
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                <div id="deliverytakeout">
                  <h3 className="text-lg font-bold leading-6 text-gray-100">
                    Delivery / Takeout
                  </h3>
                  <dl className="mt-2 text-base text-gray-400">
                    <div>
                      <dt className="sr-only">Delivery and takeout</dt>
                      <dd>
                        Please call us for take out and delivery orders. We
                        offer curbside pick up and deliver within a 2.5 mile
                        radius.
                      </dd>
                    </div>
                  </dl>
                </div>
                <div id="reservations">
                  <h3 className="text-lg font-bold leading-6 text-gray-100">
                    Reservations
                  </h3>
                  <dl className="mt-2 text-base text-gray-400">
                    <div>
                      <dt className="sr-only">Reservations</dt>
                      <dd>Please call the restaurant to make a reservation.</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-6 text-gray-100">
                    Hours of Operation
                  </h3>
                  <dl className="mt-2 text-base text-gray-400">
                    <div>
                      <dt className="sr-only">Hours of operation</dt>
                      <dd>Mon-Thur: 11am - 2pm; 4pm - 9pm</dd>
                      <dd>Fri: 11am - 2pm; 4pm - 10pm</dd>
                      <dd>Sat: 11:30am - 10pm</dd>
                      <dd>Sun: 11:30am - 9pm</dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Happy hour</dt>
                      <dd>Happy hour lounge and patio only:</dd>
                      <dd>Mon-Fri: 4pm - 7pm</dd>
                    </div>
                  </dl>
                </div>
                <div id="contact">
                  <h3 className="text-lg font-bold leading-6 text-gray-100">
                    Get In Touch
                  </h3>
                  <dl className="mt-2 text-base text-gray-400">
                    <div>
                      <dt className="sr-only">Address</dt>
                      <dd>3223 Lemmon Ave #103</dd>
                      <dd>Dallas, TX 75204</dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>
                        phone: <a href="tel:214-954-9558">214-954-9558</a>
                      </dd>
                      <dd>fax: 214-954-0988</dd>
                    </div>
                    <div className="mt-3">
                      <dt className="sr-only">
                        Call 2149549558 for takeout and delivery orders
                      </dt>
                      <dd>
                        <a
                          href="tel:214-954-9558"
                          className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-700 px-8 py-3 text-base font-medium text-white hover:bg-red-600 sm:w-fit md:py-4 md:px-10 md:text-lg"
                        >
                          Call now
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div
              id="menu"
              className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8"
            >
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                Menu
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                <div>
                  <h3 className="text-lg font-bold leading-6 text-gray-100">
                    Dinner Menu
                  </h3>
                  <div className="mt-2 text-base text-gray-400">
                    <a
                      href="/downloads/menu-dinner.pdf"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-700 px-8 py-3 text-base font-medium text-white hover:bg-red-600 sm:w-fit md:py-4 md:px-10 md:text-lg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <NewspaperIcon
                        className="mr-2 h-8 w-8 text-white"
                        aria-hidden="true"
                      />
                      Download dinner menu
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-6 text-gray-100">
                    Catering Menu
                  </h3>
                  <div className="mt-2 text-base text-gray-400">
                    <a
                      href="/downloads/menu-catering.pdf"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-700 px-8 py-3 text-base font-medium text-white hover:bg-red-600 sm:w-fit md:py-4 md:px-10 md:text-lg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <NewspaperIcon
                        className="mr-2 h-8 w-8 text-white"
                        aria-hidden="true"
                      />
                      Download catering menu
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="specials"
              className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8"
            >
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                Specials
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                <div>
                  <h3 className="mb-4 text-5xl font-bold text-gray-100">
                    Happy Hour: Bites
                  </h3>
                  <h4 className="text-gray-400">
                    4pm - 7pm Monday thru Friday
                  </h4>
                  <h4 className="text-gray-400">Lounge, bar, and patio only</h4>
                  <div className="mt-2 text-base text-gray-400">
                    <p className="mt-1">
                      <span className="font-bold text-gray-100">$2</span>
                      <br />
                      Egg Roll (1pc)
                      <br />
                      Veggie Spring Roll (1pc)
                      <br />
                      Edamame (half order)
                    </p>
                    <p className="mt-1">
                      <span className="font-bold text-gray-100">$3</span>
                      <br />
                      Crab Wonton (2pc)
                      <br />
                      Shrimp Toast (2pc)
                      <br />
                      Fried Potstickers (4pc)
                      <br />
                      (Chicken or pork)
                    </p>
                    <p className="mt-1">
                      <span className="font-bold text-gray-100">$5</span>
                      <br />
                      Asian Chicken Wings (4pc)
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 text-5xl font-bold text-gray-100">
                    Happy Hour: Beverages
                  </h3>
                  <h4 className="text-gray-400">
                    4pm - 7pm Monday thru Friday
                  </h4>
                  <h4 className="text-gray-400">Lounge, bar, and patio only</h4>
                  <div className="mt-2 text-base text-gray-400">
                    <p className="mt-1">
                      <span className="font-bold text-gray-100">$1</span> Hot
                      Sake (small)
                    </p>
                    <p className="mt-1">
                      <span className="font-bold text-gray-100">$2</span>{' '}
                      Sapporo Draft
                    </p>
                    <p className="mt-1">
                      <span className="font-bold text-gray-100">$3</span> Well
                      Drinks
                    </p>
                    <p className="mt-1">
                      <span className="font-bold text-gray-100">$4</span>{' '}
                      Selected Wine
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 text-5xl font-bold text-gray-100">
                    Half Price Wine
                  </h3>
                  <h4 className="text-gray-400">
                    Monday and Thursday all day long
                  </h4>
                  <div className="mt-2 text-base text-gray-400">
                    <p className="mt-1">
                      <span className="font-bold text-gray-100">50% Off</span>{' '}
                      Wine and sake bottles over $35
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About section */}
      <div id="about" className="relative bg-white">
        <div className="lg:absolute lg:inset-0 lg:hidden">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <Image
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src={varietyChineseDishes}
              alt="About Image"
              width="1024"
              height="400"
            />
          </div>
        </div>
        <div className="hidden lg:inset-0 lg:block first-letter:lg:absolute">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <Image
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src={varietyChineseDishes}
              alt="About Image"
              layout="fill"
            />
          </div>
        </div>
        <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
              <h2 className="font-semibold uppercase leading-6 tracking-wide text-red-600">
                About Us
              </h2>
              <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                Our Story
              </h3>
              <p className="mt-8 text-lg text-gray-800">
                Since our opening in April of 2011, Howard Wang&lsquo;s Uptown
                China Brasserie has quickly become THE destination for quality
                Chinese cuisine, great drinks and a relaxing, modern atmosphere.
              </p>
              <div className="prose prose-red mt-5 text-gray-600">
                <p>
                  The recipes used are family recipes that breed a very loyal
                  following at Howard Wang&lsquo;s China Grill. With a
                  commitment to quality, the rolls and dumplings are prepared
                  fresh daily.
                </p>
                <p>
                  A short stroll from the Katy Trail and Cole Outlet, patrons
                  are able to sample a full menu of family recipes for lunch,
                  dinner, take out or delivery. We also offer room service for
                  Post Katy Trail residents! Cool off with a refreshing beer
                  (including 3 Asian beers on tap), glass of wine or a house
                  cocktail while enjoying the nice Texas evening on our outdoor
                  porch.
                </p>
                <h3>How we&lsquo;re different</h3>
                <p>
                  The restaurant is designed to bring customers a feeling of
                  relaxation and comfort while dining with family and friends.
                  The Brasserie will offer a &ldquo;taste around&ldquo;
                  (Emperors Feast) menu that is created for you for any
                  occasion. The private dining room at the Brasserie is a
                  perfect setting for this culinary journey.
                </p>
                <p>
                  We will take you and your guests through a culinary journey
                  with our Emperor&lsquo;s Feast, created for you by our chefs
                  to suit any occasion or event. We can also bring the taste of
                  China to you with our exquisite catering services. The Wang
                  family and committed staff look forward to serving you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
)

export default TestLanding
