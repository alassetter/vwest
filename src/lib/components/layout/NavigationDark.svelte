<script>
	const vlogo = '/V-logo.svg';
  import { page } from '$app/stores';
  import MobileNav from '$lib/components/layout/MobileNav.svelte'
</script>

<section class="bg-white m-4 lg:m-10 shadow-sm shadow-gray-900/5 rounded-lg">
  <div class="w-full mx-auto">
    <div class="px-6">
    <div class="flex items-center justify-between py-6">
      <div class="w-auto">
        <div class="flex flex-wrap items-center">
          <div class="w-auto pr-2">
            <a href="/">
              <img class="h-8"  src={vlogo} alt="">
            </a>
          </div>
        </div>
      </div>
      <div class="w-auto">
        <div class="flex flex-wrap items-center">
          <div class="w-auto hidden lg:block">
            <ul class="flex items-center">
              <li class="mr-8 font-normal text-gray-800 hover:text-blue-600 tracking-tight transition duration-200 ease-out hover:ease-in">
                <a
                class="relative inline-block after:absolute after:bg-blue-600 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:trangray-y-1 after:opacity-0 hover:after:trangray-y-0 hover:after:opacity-100 after:transition after:ease-in-out after:duration-200 mr-4"
                href="/solutions" aria-current={$page.url.pathname === '/solutions'}>Solutions</a
              >
              </li>
              <li class="mr-8 font-normal text-gray-800 hover:text-blue-600 tracking-tight transition duration-200 ease-out hover:ease-in">
                <a
                class="relative inline-block after:absolute after:bg-blue-600 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:trangray-y-1 after:opacity-0 hover:after:trangray-y-0 hover:after:opacity-100 after:transition after:ease-in-out after:duration-200 mr-4"
                href="/services" aria-current={$page.url.pathname === '/solutions'}>Services</a
              >
              </li>
              <li class="mr-8 font-normal text-gray-800 hover:text-blue-600 tracking-tight transition duration-200 ease-out hover:ease-in">
                <a
                class="relative inline-block after:absolute after:bg-blue-600 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:trangray-y-1 after:opacity-0 hover:after:trangray-y-0 hover:after:opacity-100 after:transition after:ease-in-out after:duration-200 mr-4"
                href="/work" aria-current={$page.url.pathname === '/solutions'}>Work</a
              >
              </li>
              <li class="mr-8 font-normal text-gray-800 hover:text-blue-600 tracking-tight transition duration-200 ease-out hover:ease-in">
                <a
                class="relative inline-block after:absolute after:bg-blue-600 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:trangray-y-1 after:opacity-0 hover:after:trangray-y-0 hover:after:opacity-100 after:transition after:ease-in-out after:duration-200 mr-4"
                href="/about" aria-current={$page.url.pathname === '/services'}>About</a
              >
               
              </li>
              <li class="mr-8 font-normal text-gray-800 hover:text-blue-600 tracking-tight transition duration-200 ease-out hover:ease-in">
                <a
                class="relative inline-block after:absolute after:bg-blue-600 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:trangray-y-1 after:opacity-0 hover:after:trangray-y-0 hover:after:opacity-100 after:transition after:ease-in-out after:duration-200 mr-4"
                href="/insights" aria-current={$page.url.pathname === '/services'}>Insights</a
              >
               
              </li>
              <li class="font-normal text-gray-800 hover:text-blue-600 tracking-tight transition duration-200 ease-out hover:ease-in">
                <a
                class="relative inline-block after:absolute after:bg-blue-600 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:trangray-y-1 after:opacity-0 hover:after:trangray-y-0 hover:after:opacity-100 after:transition after:ease-in-out after:duration-200 mr-4"
                href="/contact" aria-current={$page.url.pathname === '/services'}>Contact</a
              >
               
              </li>
            </ul>
          </div>
          <div class="w-auto lg:hidden">
            <a href="/">
              <svg class="navbar-burger text-blue-600" width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                <path d="M37 32H19M37 24H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
 <MobileNav />
</section>

