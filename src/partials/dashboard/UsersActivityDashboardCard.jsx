import React from 'react';

import Image01 from '../../images/user-36-05.jpg';
import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-07.jpg';
import Image04 from '../../images/user-36-08.jpg';
import Image05 from '../../images/user-36-09.jpg';

import { useTexts } from "../../texts/TextsContext";

function UsersActivityDashboardCard() {

  const { texts, lang, setLang } = useTexts();

  return (
    <div className="col-span-full xl:col-span-4 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">{texts.recentActivity}</h2>
      </header>
      <div className="p-3">

        {/* Card content */}
        {/* "Today" group */}
        <div>
          <header className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 rounded-xs font-semibold p-2">Today</header>
          <ul className="my-1">
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-violet-500 my-2 mr-3">
                <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                  <img className="rounded-full" src={Image01} width="40" height="40" />
                </div>
              </div>
              <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Alex Shatov</a> {texts.stamped} <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">1 {texts.time}</a> {texts.inAvsallar}</div>
                  <div className="shrink-0 self-end ml-2">
                    {/* <a className="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a> */}
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-violet-500 my-2 mr-3">
                <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                  <img className="rounded-full" src={Image02} width="40" height="40" />
                </div>
              </div>
              <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Philip Harbach</a> {texts.stamped} <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">2 {texts.time}</a> {texts.inAvsallar}</div>
                  <div className="shrink-0 self-end ml-2">
                    {/* <a className="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a> */}
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-violet-500 my-2 mr-3">
                <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                  <img className="rounded-full" src={Image03} width="40" height="40" />
                </div>
              </div>
              <div className="grow flex items-center text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Mirko Fisuk</a> {texts.stamped} <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">1 time</a> {texts.inAvsallar}</div>
                  <div className="shrink-0 self-end ml-2">
                    {/* <a className="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a> */}
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-violet-500 my-2 mr-3">
                <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                  <img className="rounded-full" src={Image04} width="40" height="40" />
                </div>
              </div>
              <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Olga Semklo</a> {texts.stamped} <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">3 {texts.time}</a> {texts.inAvsallar}</div>
                  <div className="shrink-0 self-end ml-2">
                    {/* <a className="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a> */}
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-violet-500 my-2 mr-3">
                <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                  <img className="rounded-full" src={Image05} width="40" height="40" />
                </div>
              </div>
              <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Burak Long</a> {texts.stamped} <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">1 time</a> {texts.inAvsallar}</div>
                  <div className="shrink-0 self-end ml-2">
                    {/* <a className="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a> */}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* "Yesterday" group */}
        <div>
          <header className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 rounded-xs font-semibold p-2">Yesterday</header>
          <ul className="my-1">
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-violet-500 my-2 mr-3">
                <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                  <img className="rounded-full" src={Image01} width="40" height="40" />
                </div>
              </div>
              <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Alex Shatov</a> {texts.stamped} <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">1 time</a> {texts.inAvsallar}</div>
                  <div className="shrink-0 self-end ml-2">
                    {/* <a className="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a> */}
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-violet-500 my-2 mr-3">
                <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                  <img className="rounded-full" src={Image02} width="40" height="40" />
                </div>
              </div>
              <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Philip Harbach</a> {texts.stamped} <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">2 {texts.time}</a> {texts.inAvsallar}</div>
                  <div className="shrink-0 self-end ml-2">
                    {/* <a className="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a> */}
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-violet-500 my-2 mr-3">
                <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                  <img className="rounded-full" src={Image03} width="40" height="40" />
                </div>
              </div>
              <div className="grow flex items-center text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Mirko Fisuk</a> {texts.stamped} <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">1 time</a> {texts.inAvsallar}</div>
                  <div className="shrink-0 self-end ml-2">
                    {/* <a className="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a> */}
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-violet-500 my-2 mr-3">
                <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                  <img className="rounded-full" src={Image04} width="40" height="40" />
                </div>
              </div>
              <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Olga Semklo</a> {texts.stamped} <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">3 {texts.time}</a> {texts.inAvsallar}</div>
                  <div className="shrink-0 self-end ml-2">
                    {/* <a className="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a> */}
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-violet-500 my-2 mr-3">
                <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                  <img className="rounded-full" src={Image05} width="40" height="40" />
                </div>
              </div>
              <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Burak Long</a> {texts.stamped} <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">1 time</a> {texts.inAvsallar}</div>
                  <div className="shrink-0 self-end ml-2">
                    {/* <a className="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a> */}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default UsersActivityDashboardCard;
