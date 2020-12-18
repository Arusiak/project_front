<template>
  <div class="container-fluid pagecolor">
    <div class="row">
      <div class="col-sm-12">
        <Navbar/>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-sm-8">
        <div id="login-box">
          <div class="left">
            <div class="row">
              <div class="col-sm-12">
                <SignUpHeader/>
              </div>
            </div>
            <div class="row d-flex justify-content-evenly">
              <SignUpForm/>
              <SignInWithSocial/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpHeader from "@/components/Auth/SignUpHeader"
import SignUpForm from "@/components/Auth/SignUpForm";
import SignInWithSocial from "@/components/Auth/SignInWithSocial";
import Navbar from "@/components/Auth/Layout/Navbar";
export default {
  name: "SignUp",
  components: {
    Navbar,
    SignInWithSocial,
    SignUpForm,
    SignUpHeader
  }
};
</script>
