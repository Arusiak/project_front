<template>
  <div class="messagebox">
    <div class="row">
      <div class="col-sm-12">
        <div class="messages">
          <MyMessage/>
          <MyMessage/>
          <MyMessage/>
          <MyMessage/>
          <MyMessage/>
          <MyMessage/>
          <MyMessage/>
          <MyMessage/>
          <MyMessage/>
          <MyMessage/>
          <MyMessage/>
          <MyMessage/>
          <MyMessage/>
          <MyMessage/>
          <MyMessage/>
        </div>
      </div>
    </div>
    <MessageSend/>
  </div>
</template>
<script>
import MyMessage from "@/components/User/MyMessage";
import MessageSend from "@/components/User/MessageSend";
export default {
  name: "MessageForm",
  components: {MessageSend, MyMessage},
}
</script>