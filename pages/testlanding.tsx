import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logoSVG from '../public/howard-wangs-logo.svg'
import logoMarkSVG from '../public/howard-wangs-logomark.svg'
import chefFlamingWokFlyingFood from '../public/images/chef-flaming-wok-flying-food.jpg'

const navigation = [
  { name: 'Product', href: '/product' },
  { name: 'Features', href: '/features' },
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'Company', href: '/company' },
]

const TestLanding: NextPage = () => (
  <div className="relative overflow-hidden bg-white">
    <Head>
      <title>Test Landing Page | Howard Wang&lsquo;s Restaurants</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Test Landing Page | Howard Wang&lsquo;s Restaurants is a group of high-end Chinese restaurants based in Texas."
      />
    </Head>
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
                    <a>
                      <span className="sr-only">Workflow</span>
                      <Image
                        className="h-8 w-auto sm:h-10"
                        src={logoMarkSVG}
                        alt="Howard Wang&lsquo;s Logo Mark"
                        height="40"
                        width="40"
                      />
                    </a>
                  </Link>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                  href="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Log in
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
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                <Link href="/login">
                  <a className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100">
                    Log in
                  </a>
                </Link>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <Image
                className="h-8 w-auto sm:h-10"
                src={logoSVG}
                alt="Howard Wang&lsquo;s Logo"
                height="82"
                width="500"
              />
              <span className="block text-indigo-600 xl:inline">
                <span className="sr-only">Howard Wang&lsquo;s</span>
                <br />
                uptown
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="/get-started"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/demo"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <Image
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
        src={chefFlamingWokFlyingFood}
        alt="Chef with flaming wok and flying food"
        width="720"
        height="622"
      />
    </div>
  </div>
)

export default TestLanding
