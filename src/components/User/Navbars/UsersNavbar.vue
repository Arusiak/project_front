<template>
  <div id="app">
    <div id="nav">
      <div class="row">
        <div class="col-sm-6">
          <router-link to="/friends"><i class="fas fa-user-friends iconstyles"><span class="hideEl">Friends</span></i></router-link>
        </div>
        <router-view />
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: "UsersNavbar",
};
</script>