<script>
import MoreMenu from './moremenu.svelte'
import MenuVertical from './menuvertical.svelte'
import MenuHorizontal from './menuhorizontal.svelte'
</script>

<nav class='lg:flex lg:gap-x-8'>
	<MenuHorizontal/>
	<MenuVertical/>
</nav>
<MoreMenu/>