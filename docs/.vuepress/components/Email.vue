<template lang="html">
<div is="sui-container">
<div class="form-title">
<h1>Sign up to receive weekly updates on all our ride alongs</h1>
</div>
<div class="form-email">
<div id="mc_embed_signup">
<sui-form>
<form action="https://ridewithme.us19.list-manage.com/subscribe/post?u=4363965f46ffc679a11237dad&amp;id=b9221904a3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	
<sui-form-field>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address </label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
</sui-form-field>
<sui-form-field>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4363965f46ffc679a11237dad_b9221904a3" tabindex="-1" value=""></div>
</sui-form-field>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</sui-form>
</div>
</div>
</div>
</template>

<script>
import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';

Vue.use(SuiVue);

export default {
  name: 'Email',
};
</script>

<style scoped>
.form-email {
    width: 50%;
}
.form-title {
    margin-bottom: 1rem;
    margin-top: 3rem;
}
</style>