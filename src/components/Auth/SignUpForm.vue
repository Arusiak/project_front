<template>
  <div class="col-sm-4">
    <input type="text" name="username" placeholder="Username" />
    <input type="text" name="email" placeholder="E-mail" />
    <input type="password" name="password" placeholder="Password" />
    <input type="password" name="password2" placeholder="Retype password" />

    <input type="submit" name="signup_submit" value="Sign me up" class="authbtn"/>
  </div>
</template>
<script>
export default {
  name: "SignUpForm",
}
</script>