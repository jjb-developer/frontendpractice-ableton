<script>
import Item from './item.svelte'
import { menu } from '../../store.js'
</script>

<div class="fixed px-[5%] capitalize text-zinc-900 text-lg font-medium top-20 inset-0 w-full bg-crema duration-300 overflow-x-auto {$menu ? 'h-screen pb-20':'h-0'} lg:hidden">
	<ul class='mt-[1em]'>
		<Item title='live'/>
		<Item title='node'/>
		<Item title='link'/>
		<Item title='shop'/>
		<Item title='packs'/>
		<Item title='help'/>
	</ul>
	<ul class='flex flex-col'>
		<Item title='try live for free'/>
		<li>
			<button class='mb-[1em] relative text-xs px-4 py-2 border-2 border-azul/20 capitalize font-medium after:absolute after:w-full after:h-full after:-inset-1 after:box-content after:border-[3px] after:opacity-0 after:scale-125 after:duration-300 hover:after:scale-100 hover:after:opacity-100 hover:after:border-azul'>log in or register</button>
		</li>
	</ul>
	<div class='lg:hidden'>
		<div class='mt-4'>
			<h3 class='text-2xl tracking-tighter font-medium py-2'>More on Ableton.com:</h3>
			<ul class='mt-4 text-sm flex flex-col gap-y-4'>
				<a class='cursor-pointer duration-200 hover:text-azul'>Blog</a>
				<a class='cursor-pointer duration-200 hover:text-azul'>Ableton for the Classroom</a>
				<a class='cursor-pointer duration-200 hover:text-azul'>Ableton for Colleges and Universities</a>
				<a class='cursor-pointer duration-200 hover:text-azul'>Certified Training</a>
				<a class='cursor-pointer duration-200 hover:text-azul text-azul'>About Ableton</a>
				<a class='cursor-pointer duration-200 hover:text-azul'>Jobs</a>
				<a class='cursor-pointer duration-200 hover:text-azul'>Apprenticeships</a>
			</ul>
		</div>
		<div class='my-8'>
			<h3 class='text-2xl tracking-tighter font-medium py-1'>More from Ableton:</h3>
			<div class='max-w-[230px] xm:max-w-[490px] ml:max-w-[710px] mx-auto'>
				<ul class='mt-4 text-sm flex flex-wrap justify-center ml:justify-start gap-4'>
					<li class='cursor-pointer w-56 border-[0.05rem] border-zinc-400 py-3 px-4'>
						<h3 class='font-medium text-lg py-1'>Loop</h3>
						<p class='leading-6 text-xs'>Watch Talks, Performances and Features from Ableton's Summit for Music Makers</p>
					</li>
					<li class='cursor-pointer w-56 border-[0.05rem] border-zinc-400 py-3 px-4'>
						<h3 class='font-medium text-lg py-1'>Learning Music</h3>
						<p class='leading-6 text-xs'>Learn the fundamentals of music making right in your browser.</p>
					</li>
					<li class='cursor-pointer w-56 border-[0.05rem] border-zinc-400 py-3 px-4'>
						<h3 class='font-medium text-lg py-1'>Learning Synths</h3>
						<p class='leading-6 text-xs'>Get started with synthesis using a web-based synth and accompanying lessons.</p>
					</li>
					<li class='cursor-pointer w-56 border-[0.05rem] border-zinc-400 py-3 px-4'>
						<h3 class='font-medium text-lg py-1'>Making Music</h3>
						<p class='leading-6 text-xs'>Some tips from 74 Creative Strategies for Electronic Producers.</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>