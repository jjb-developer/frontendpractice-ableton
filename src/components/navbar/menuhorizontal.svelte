<script>
import { menu, more } from '../../store.js'

function activeMore(){
	more.set(!$more)
	return;
}

function activeMenu(){
	menu.set(!$menu)
	return;
}

</script>
<section class='fixed py-6 top-0 left-0 px-[5%] flex z-[99] gap-x-7 justify-between w-full bg-zinc-50 lg:relative'>
	<div class='flex items-center gap-x-7'>
		<!-- Logo -->
		<a class='cursor-pointer'>
			<svg role="img" aria-labelledby="logo" class='fill-gris' xmlns="http://www.w3.org/2000/svg" width="57" height="32" viewBox="0 0 45 21"><title id="logo">Ableton Homepage</title><path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path></svg>
		</a>
		<!-- Texto Menu -->
		<a on:click={ activeMenu } class='lg:hidden flex items-center gap-x-2 cursor-pointer'>
			<span class='logo text-lg capitalize tracking-tighter'>menu</span>
			<svg xmlns="http://www.w3.org/2000/svg" class='mt-1 {$menu ? 'rotate-180':'rotate-0'}' width="10" height="10" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/></svg>
		</a>
	</div>
	<!-- Navegacion -->
	<div class='hidden text-sm font-medium lg:w-full lg:flex lg:justify-between'>
		<ul class='hidden lg:flex lg:items-center lg:gap-x-5'>
			<li class='capitalize cursor-pointer hover:text-tomato duration-200'>live</li>
			<li class='capitalize cursor-pointer hover:text-tomato duration-200'>node</li>
			<li class='capitalize cursor-pointer hover:text-tomato duration-200'>link</li>
			<li class='capitalize cursor-pointer hover:text-tomato duration-200'>shop</li>
			<li class='capitalize cursor-pointer hover:text-tomato duration-200'>packs</li>
			<li on:click={ activeMore } class='capitalize text-tomato cursor-pointer flex items-center gap-x-1'>more<span class='text-xl mb-0.5'>{$more ? '-':'+'}</span></li>
		</ul>
		<div class='hidden lg:flex lg:gap-x-7'>
			<button class='capitalize hover:text-azul duration-200'>try live for free</button>
			<button class='relative text-xs px-4 py-2 text-tomato capitalize border-2 border-tomato/10 duration-300 font-medium after:absolute after:w-full after:h-full after:inset-0 after:border-2 after:border-tomato after:opacity-0 after:scale-125 after:duration-300 hover:after:scale-100 hover:after:opacity-100'>log in or register</button>
		</div>
	</div>
</section>