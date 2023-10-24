<script>
	import { page } from '$app/stores';
	import '../app.postcss';
</script>

<div class="error">
	<h2>{$page.status}</h2>
	<p class="subhead">{$page.error.message}</p>

	<p><strong>Sorry!</strong> Maybe try one of these links?</p>
	<ul>
		<li><a href="/">Home</a></li>
	</ul>
</div>


<style>
	.error {
		height: 100%;
		display: grid;
		place-content: center;
	}
</style>