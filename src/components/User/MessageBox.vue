<template>
  <div class="row mt-2">
    <div class="col-sm-12 d-flex justify-content-evenly">
      <div class="row justify-content-around addfriendbox senduser">
        <div class="col-sm-3 d-flex align-items-center">
          <img alt="avatar" src="../../assets/img/avatar.png" class="img-fluid"/>
        </div>
        <div class="col-sm-auto d-flex align-items-center">
          <span class="messageUserName">username</span>
        </div>
        <div class="col-sm-3 d-flex align-items-center justify-content-end messagetime">
          7:11
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MessageBox"
}
</script>