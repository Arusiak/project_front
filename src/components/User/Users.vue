<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <UserPage/>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <UserPageNavbar/>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <UsersNavbar/>
      </div>
    </div>
    <div class="row " style="justify-content: center;">
      <div class="col-sm-12 d-flex justify-content-center box">
          <OtherUsers/>
          <OtherUsers/>
          <OtherUsers/>
          <OtherUsers/>
          <OtherUsers/>
          <OtherUsers/>
        </div>

    </div>



  </div>

</template>
<script>
  import UserPageNavbar from "@/components/User/Navbars/UserPageNavbar";
  import UserPage from "@/views/UserPage";
  import UsersNavbar from "@/components/User/Navbars/UsersNavbar";
  import OtherUsers from "@/components/User/OtherUsers";
  export default {
    name: "Users",
    components: {OtherUsers, UsersNavbar, UserPage, UserPageNavbar}
  }
</script>