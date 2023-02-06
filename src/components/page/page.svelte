<script>
import SectionTexto from './sectiontexto.svelte'
import SectionImage from './sectionimage.svelte'
import HeaderPage from './headerpage.svelte'
</script>

<main class='pt-10'>
	<div class='w-[90%] mx-auto'>

		<HeaderPage/>

		<SectionTexto 
		subtitulo='We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.' parrafo='Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.'/>

		<SectionImage bg='bg-crema' tipo='0'/>

		<SectionTexto 
		subtitulo='Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.' 
		parrafo='We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.'/>

		<section>
			<iframe class='w-[80%] h-auto mx-auto aspect-video' width="560" height="315" src="https://www.youtube.com/embed/iwaUan_AA2A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		</section>

		<SectionTexto 
		subtitulo='We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.' 
		parrafo='Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.'/>

		<SectionImage bg='bg-turquesa' tipo='1'/>

		<SectionTexto 
		subtitulo='We’re passionate about what we do, but we’re equally passionate about improving who we are.' 
		parrafo='We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.<br><br>Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.'/>

		<SectionImage bg='bg-lila' tipo='2'/>

		<SectionTexto 
		subtitulo='>We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.' 
		parrafo='If you’re joining us in Berlin, well help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.'/>

		<SectionImage bg='bg-cielo' tipo='3'/>

	</div>
</main>