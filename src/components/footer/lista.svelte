<script>
export let title, ul;
</script>
<div>
	<h3 class='font-medium { title ? 'block':'hidden'}'>{ title }</h3>
	<ul class='flex flex-col tracking-tight text-[0.97rem] py-1'>
		{#each ul as li}
		<li><span class='cursor-pointer hover:text-tomato duration-200'>{ li }</span></li>
		{/each}
	</ul>
</div>