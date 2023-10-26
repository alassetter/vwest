<script>
	const vlogo = '/V-logo.svg';
</script>


<div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-full sm:max-w-full z-50">
  <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
  <nav class="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
    <div class="flex flex-wrap justify-between h-full">
      <div class="w-full">
        <div class="flex items-center justify-between -m-2">
          <div class="w-auto p-2">
            <a class="inline-block" href="/">
              <img class="h-8" src={vlogo} alt="">
            </a>
          </div>
          <div class="w-auto p-2">
            <a class="navbar-burger" href="/">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="/111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center py-16 w-full">
        <ul>
          <li>
            <a class="p-0 m-0 text-xl font-medium leading-7 text-left text-black align-baseline border-0 cursor-pointer md:text-3xl md:text-gray-800 hover:text-blue-700" href="/">Menu Item</a>
          </li>
          <li>
            <a class="p-0 m-0 text-xl font-medium leading-7 text-left text-black align-baseline border-0 cursor-pointer md:text-3xl md:text-gray-800 hover:text-blue-700" href="/">Menu Item</a>
            </li>
          <li class="font-medium hover:text-gray-900 tracking-tight">					
             <a class="p-0 m-0 text-xl font-medium leading-7 text-left text-black align-baseline border-0 cursor-pointer md:text-3xl md:text-gray-800 hover:text-blue-700" href="/">Menu Item</a>
          </li>
        </ul>
      </div>
  </nav>
</div>