<script>
import { more } from '../../store.js'
</script>

<div class='hidden bg-crema duration-300 overflow-hidden {$more ? 'h-72':'h-0'} lg:mt-0 lg:flex lg:flex-col lg:justify-evenly'>
	<div class='px-[5%]'>
		<h3 class='text-2xl tracking-tighter font-medium py-1'>More on Ableton.com:</h3>
		<ul class='text-sm flex gap-x-5'>
			<a class='cursor-pointer'>Blog</a>
			<a class='cursor-pointer'>Ableton for the Classroom</a>
			<a class='cursor-pointer'>Ableton for Colleges and Universities</a>
			<a class='cursor-pointer'>Certified Training</a>
			<a class='cursor-pointer text-tomato'>About Ableton</a>
			<a class='cursor-pointer'>Jobs</a>
			<a class='cursor-pointer'>Apprenticeships</a>
		</ul>
	</div>
	<div class='px-[5%]'>
		<h3 class='text-2xl tracking-tighter font-medium py-1'>More from Ableton:</h3>
		<ul class='text-sm grid grid-cols-4 gap-x-10'>
			<li class='cursor-pointer'>
				<h3 class='font-medium py-1'>Loop</h3>
				<p class='leading-6 text-xs'>Watch Talks, Performances and Features from Ableton's Summit for Music Makers</p>
			</li>
			<li class='cursor-pointer'>
				<h3 class='font-medium py-1'>Learning Music</h3>
				<p class='leading-6 text-xs'>Learn the fundamentals of music making right in your browser.</p>
			</li>
			<li class='cursor-pointer'>
				<h3 class='font-medium py-1'>Learning Synths</h3>
				<p class='leading-6 text-xs'>Get started with synthesis using a web-based synth and accompanying lessons.</p>
			</li>
			<li class='cursor-pointer'>
				<h3 class='font-medium py-1'>Making Music</h3>
				<p class='leading-6 text-xs'>Some tips from 74 Creative Strategies for Electronic Producers.</p>
			</li>
		</ul>
	</div>
</div>