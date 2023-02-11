<script>
import Lista from './lista.svelte'
import LogoFooter from './logo-f.svelte'
import { sendEmail } from '../../store.js'

function send(){
	sendEmail.set(true)
	setTimeout(()=>sendEmail.set(false),2000)
	return;
}

const education = ['Offers for students and teachers >','Ableton for the Classroom >','Ableton for Colleges and Universities >']
const community = ['Find Ableton User Groups >','Find Certified Training >','Become a Certified Trainer >']
const distributors = ['Find Distributors >','Try Push in-store >']
const listaOne = ['Register Live or Push >','About Ableton >','Jobs >']
</script>

<footer class='mt-10 px-[5%] py-20 text-lg'>
	<div class='py-10'>
		<LogoFooter/>
	</div>
	<div class='flex flex-col gap-y-5 lg:flex-row lg:flex-wrap lg:gap-x-5 lg:justify-evenly'>
		<div class='lg:w-[27%]'>
			<Lista title={null} ul={listaOne}/>
			<div class='pt-2'>
				<ul class='flex gap-x-1'>
					<div class='bg-sky-500 w-9 h-9'></div>
					<div class='bg-cyan-300 w-9 h-9'></div>
					<div class='bg-rose-500 w-9 h-9'></div>
					<div class='bg-orange-400 w-9 h-9'></div>
				</ul>
			</div>
		</div>
		<div class='lg:w-[27%]'>
			<Lista title='Education' ul={education}/>
		</div>
		<div class='order-first lg:w-96 lg:order-none lg:w-[40%]'>
			<div>
				<h3 class='font-medium'>Sign up to our newsletter</h3>
				<div class='tracking-tight text-[0.97rem] py-1'>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</div>
				<div class='flex items-center pt-2'>
					<input type="Email" name="newsletter" placeholder="Email" class='w-full border border-zinc-400 focus:ring-0 h-10 focus:border-azul'>
					<button on:click={ send } class='py-1.5 px-6 w-32 shrink-0 bg-azul text-zinc-50 font-medium placeholder-zinc-50 cursor-pointer'>Sign up</button>
				</div>
			</div>
		</div>
		<div class='lg:w-[27%]'>
			<Lista title='Community' ul={community}/>
		</div>
		<div class='lg:w-[27%]'>
			<Lista title='Distributors' ul={distributors}/>
		</div>
		<div class='lg:w-[40%]'>
			<div>
				<h3 class='font-medium'>Language and Location</h3>
				<div class='tracking-tight text-[0.97rem] py-1'>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</div>
			</div>
		</div>
	</div>
	<div class='text-sm py-10 font-medium tracking-tight flex flex-col gap-y-4 lg:flex-row lg:items-center lg:justify-between'>
		<ul class='flex flex-col gap-y-2 lg:flex-row lg:gap-x-3'>
			<li class='cursor-pointer duration-200 hover:text-tomato'>Contact Us</li>
			<li class='cursor-pointer duration-200 hover:text-tomato'>Press Resources</li>
			<li class='cursor-pointer duration-200 hover:text-tomato'>Legal Info</li>
			<li class='cursor-pointer duration-200 hover:text-tomato'>Privacy Policy</li>
			<li class='cursor-pointer duration-200 hover:text-tomato'>Cookie Settings</li>
			<li class='cursor-pointer duration-200 hover:text-tomato'>Imprint</li>
		</ul>
		<div class='flex items-center gap-x-4'>
			<span class='cursor-pointer'>Made in Berlin</span>
			<img src="logo.svg" alt='logot'>
		</div>
	</div>
</footer>
