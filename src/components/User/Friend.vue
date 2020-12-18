<template>
  <div class="row mt-2">
    <div class="col-sm-12 d-flex justify-content-center">
      <div class="row justify-content-around addfriendbox">
        <div class="col-sm-2 d-flex align-items-center">
          <img alt="avatar" src="../../assets/img/avatar.png" class="img-fluid"/>
        </div>
        <div class="col-sm-auto d-flex align-items-center">
          <span>username</span>
        </div>
        <div class="col-sm-3 d-flex align-items-center justify-content-end">
          <button type="submit" class="btn btn-secondary"><i class="fas fa-comment"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Friend"
}
</script>