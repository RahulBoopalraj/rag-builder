"use client"

import Image from "next/image"
import Link from "next/link"
 import React, { useState } from 'react';


export default function Pricing() {
   
    const [monthly, setMonthly] = useState(true);
    const [yearly, setYearly] = useState(false);

  return (
    <div>
        <header>
  <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Pricing</h1>

        <p className="mt-1.5 text-sm text-gray-500">Choose a Plan that&apos;s right for you</p>
      </div>

      <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
        <button
          className={"inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 " + (!!monthly && "ring" )}
          type="button"
          onClick={() => {setMonthly(true); setYearly(false)}}
        >
          <span className="text-sm font-medium"> Monthly </span>
        </button>

        <button
          className={"inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 " + (!!yearly && "ring" )}
          type="button"
          onClick={() => {setMonthly(false); setYearly(true)}}
        >
          <span className="text-sm font-medium"> Yearly </span>
        </button>
      </div>
    </div>
  </div>
</header>
    <div className="flex justify-center">
        
   { monthly &&
    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-6">
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
      <div className="p-6 sm:px-8">
        <h2 className="text-lg font-medium text-gray-900">
          Starter
          <span className="sr-only">Plan</span>
        </h2>

        <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 20$ </strong>

          <span className="text-sm font-medium text-gray-700">/month</span>
        </p>

        <a
          className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
          href="#"
        >
          Get Started
        </a>
      </div>

      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium text-gray-900 sm:text-xl">Whats included:</p>

        <ul className="mt-2 space-y-2 sm:mt-4">
          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> 10 users </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> 2GB of storage </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Email support </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-red-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <span className="text-gray-700"> Help center access </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-red-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <span className="text-gray-700"> Phone support </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-red-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <span className="text-gray-700"> Community access </span>
          </li>
        </ul>
      </div>
    </div>

    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
      <div className="p-6 sm:px-8">
        <h2 className="text-lg font-medium text-gray-900">
          Pro
          <span className="sr-only">Plan</span>
        </h2>

        <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 30$ </strong>

          <span className="text-sm font-medium text-gray-700">/month</span>
        </p>

        <a
          className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
          href="#"
        >
          Get Started
        </a>
      </div>

      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium text-gray-900 sm:text-xl">Whats included:</p>

        <ul className="mt-2 space-y-2 sm:mt-4">
          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> 20 users </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> 5GB of storage </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Email support </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Help center access </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-red-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <span className="text-gray-700"> Phone support </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-red-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <span className="text-gray-700"> Community access </span>
          </li>
        </ul>
      </div>
    </div>

    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
      <div className="p-6 sm:px-8">
        <h2 className="text-lg font-medium text-gray-900">
          Enterprise
          <span className="sr-only">Plan</span>
        </h2>

        <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 100$ </strong>

          <span className="text-sm font-medium text-gray-700">/month</span>
        </p>

        <a
          className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
          href="#"
        >
          Get Started
        </a>
      </div>

      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium text-gray-900 sm:text-xl">Whats included:</p>

        <ul className="mt-2 space-y-2 sm:mt-4">
          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> 50 users </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> 20GB of storage </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Email support </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Help center access </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Phone support </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Community access </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div> }


   { yearly &&
    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-6">
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
      <div className="p-6 sm:px-8">
        <h2 className="text-lg font-medium text-gray-900">
          Starter
          <span className="sr-only">Plan</span>
        </h2>

        <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 200$ </strong>

          <span className="text-sm font-medium text-gray-700">/year</span>
        </p>

        <a
          className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
          href="#"
        >
          Get Started
        </a>
      </div>

      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium text-gray-900 sm:text-xl">Whats included:</p>

        <ul className="mt-2 space-y-2 sm:mt-4">
          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> 10 users </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> 2GB of storage </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Email support </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-red-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <span className="text-gray-700"> Help center access </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-red-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <span className="text-gray-700"> Phone support </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-red-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <span className="text-gray-700"> Community access </span>
          </li>
        </ul>
      </div>
    </div>

    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
      <div className="p-6 sm:px-8">
        <h2 className="text-lg font-medium text-gray-900">
          Pro
          <span className="sr-only">Plan</span>
        </h2>

        <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 300$ </strong>

          <span className="text-sm font-medium text-gray-700">/year</span>
        </p>

        <a
          className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
          href="#"
        >
          Get Started
        </a>
      </div>

      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium text-gray-900 sm:text-xl">Whats included:</p>

        <ul className="mt-2 space-y-2 sm:mt-4">
          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> 20 users </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> 5GB of storage </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Email support </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Help center access </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-red-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <span className="text-gray-700"> Phone support </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-red-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <span className="text-gray-700"> Community access </span>
          </li>
        </ul>
      </div>
    </div>

    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
      <div className="p-6 sm:px-8">
        <h2 className="text-lg font-medium text-gray-900">
          Enterprise
          <span className="sr-only">Plan</span>
        </h2>

        <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 1000$ </strong>

          <span className="text-sm font-medium text-gray-700">/year</span>
        </p>

        <a
          className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
          href="#"
        >
          Get Started
        </a>
      </div>

      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium text-gray-900 sm:text-xl">Whats included:</p>

        <ul className="mt-2 space-y-2 sm:mt-4">
          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> 50 users </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> 20GB of storage </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Email support </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Help center access </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Phone support </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Community access </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div> }

  </div>
</div>

  )
}