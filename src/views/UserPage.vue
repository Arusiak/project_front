<template>

   <div class="row mt-3 d-flex justify-content-between">
     <div class="col-sm-auto ">
       <UserName/>
     </div>
     <div class="col-sm-auto d-flex justify-content-end">
      <Logout/>
     </div>
   </div>

</template>

<script>

import UserName from "@/components/User/UserName";
import Logout from "@/components/User/Logout";
export default {
  name: "UserPage",
  components: {
    Logout,
    UserName

  }
};
</script>
