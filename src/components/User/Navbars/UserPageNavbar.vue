<template>
  <div id="app">
    <div id="nav">
      <div class="row">
        <div class="col-sm-6">
          <router-link to="/users"><i class="fas fa-users iconstyles"><span class="hideEl">Users</span></i></router-link>
        </div>
        <div class="col-sm-6">
          <router-link to="/messages"><i class="fas fa-comments iconstyles"><span class="hideEl">Messages</span></i></router-link>
        </div>
        <router-view />
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: "UserPageNavbar",
};
</script>