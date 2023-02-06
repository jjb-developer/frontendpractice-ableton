<script>
const estilo = ['top-0 left-[35%] bottom-0 -right-16','top-0 -left-16 bottom-0 right-[35%]','top-[7%] left-[12%] bottom-[7%] right-[12%]','top-0 left-[27%] bottom-0 right-[27%]']

export let bg,tipo;
</script>

<section class='relative flex items-center justify-around py-[8%] z-[-1]'>
	<div class='w-5/12'>
		<figure style='background-image: url(./ableton.jpg);' class='bg-no-repeat bg-cover bg-center aspect-square'></figure>
	</div>
	<div class='w-[36%]'>
		<figure style='background-image: url(./work.jpg);' class='bg-no-repeat bg-cover bg-bottom aspect-[6/4]'></figure>
	</div>
	<div class='z-[-1] absolute { estilo[tipo] } { bg }'>
	</div>
</section>