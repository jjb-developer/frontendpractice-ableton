<script>
import Navbar from './components/navbar/navbar.svelte'
import MenuSticky from './components/navbar/menusticky.svelte'
import Page from './components/page/page.svelte'
import FooterPage from './components/footer/footerpage.svelte'
import AlertSendEmail from './components/AlertSendEmail.svelte'
</script>

<div style='display: unset;' class='select-none'>
	<Navbar/>
	<MenuSticky/>
	<Page/>
	<FooterPage/>
	<AlertSendEmail/>
</div>
