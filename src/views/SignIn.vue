<template>
  <div class="container-fluid pagecolor">
    <div class="row">
      <div class="col-sm-12">
        <Navbar/>
      </div>
      <div class="row d-flex justify-content-center">
      <div class="col-sm-8">
        <div id="login-box">
          <div class="left">
            <div class="row">
              <div class="col-sm-12">
                <SignInHeader/>
              </div>
            </div>
            <div class="row d-flex justify-content-evenly">
              <SignInForm/>
              <SignInWithSocial/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>


</template>

<script>
import SignInHeader from "@/components/Auth/SignInHeader"
import SignInForm from "@/components/Auth/SignInForm";
import SignInWithSocial from "@/components/Auth/SignInWithSocial";
import Navbar from "@/components/Auth/Layout/Navbar";
export default {
  name: "SignIn",
  components: {
    Navbar,
    SignInWithSocial,
    SignInForm,
    SignInHeader
  }
};
</script>
