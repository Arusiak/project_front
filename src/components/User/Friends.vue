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
        <Friend/>
        <Friend/>
        <Friend/>
        <Friend/>
        <Friend/>
        <Friend/>
      </div>
    </div>
  </div>
</template>
<script>
import UsersNavbar from "@/components/User/Navbars/UsersNavbar";
import UserPageNavbar from "@/components/User/Navbars/UserPageNavbar";
import UserPage from "@/views/UserPage";
import Friend from "@/components/User/Friend";
export default {
  name: "Friends",
  components: {Friend, UserPage, UserPageNavbar, UsersNavbar},
};
</script>




