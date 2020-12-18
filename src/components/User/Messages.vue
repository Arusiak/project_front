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
      <div class="col-sm-4">
        <div class="messUsers">
          <MessageBox/>
          <MessageBox/>
          <MessageBox/>
          <MessageBox/>
          <MessageBox/>
        </div>
      </div>
      <div class="col-sm-8">
        <MessageForm/>
      </div>
    </div>

  </div>
</template>
<script>
  import UserPageNavbar from "@/components/User/Navbars/UserPageNavbar";
  import UserPage from "@/views/UserPage";
  import MessageForm from "@/components/User/MessageForm";
  import MessageBox from "@/components/User/MessageBox";
  export default {
    name: "Messages",
    components: {MessageBox, MessageForm, UserPage, UserPageNavbar},
  };
</script>