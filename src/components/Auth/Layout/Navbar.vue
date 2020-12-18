<template>
    <div id="app">
      <div id="nav">
        <div class="row">
          <div class="col-sm-6">
            <router-link to="/">Sign In</router-link>
          </div>
          <div class="col-sm-6">
            <router-link to="/signup">SignUp</router-link>
          </div>
          <router-view />
        </div>
      </div>
    </div>

</template>
<script>
export default {
  name: "Navbar",
};
</script>