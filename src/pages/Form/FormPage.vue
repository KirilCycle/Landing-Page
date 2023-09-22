<template>
  <div class="form-page">
    <div class="form">
      <div class="card">
        <form-back-ground-card-svg />
      </div>
      <div class="form-content">
        <div class="form-wrap">
          <h2 class="form-header">Send your data</h2>
          <main-input class="input" placeholder="First Name" v-model="firstName" />
          <main-input class="input" placeholder="Second Name" v-model="secondName" />
          <main-input class="input" placeholder="Email" v-model="email" />
          <main-input class="input" placeholder="Adress" v-model="adress" />
          <main-button @click="showData" class="submit-btn">Submit</main-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FormBackGroundCardSvg from "@/svg/FormBackGroundCardSvg.vue";
import { ref } from "vue";

const firstName = ref("");
const secondName = ref("");
const email = ref("");
const adress = ref("");

function showData() {
    //comfort log format
    console.log({
        firstName: firstName.value,
        secondName: secondName.value,
        email: email.value,
        adress: adress.value,
    })

    return {
        showData
    }
}

</script>

<style lang="scss" scoped>
.form-page {
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 100px;
}
.form {
  max-width: 1240px;
  overflow: hidden;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  height: auto;
  margin-top: 100px;
  border-radius: 14px;

  .form-content {
    position: absolute;
    padding: 60px 0px 60px 0px;
    box-sizing: border-box;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 1240px;
    z-index: 2;
    height: 560px;
    max-height: 560px;

    .form-wrap {
      max-width: 400px;
      height: 100%;
      margin: 0% auto;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    
    .input {
      margin-top: 16px;
    }
    .form-header {
      line-height: 61px;
      letter-spacing: 0em;
      color: white;
      text-align: center;
      
    }

    .submit-btn {
      width: 392px;
      height: 58px;
      margin-top: 24px;
    }
  }

  .card {
    position: relative;
    width: 1240px;
    height: 560px;
  }
}

@media (max-width: 1260px) {
  .form-page {
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
  }
}
@media (max-width: 800px) { 
  .form-page {
    padding-top: 70px;
  }
}

@media (max-width: 500px) {
  .form-page {
    padding-top: 50px;
  }
  .form{
    .form-content {
      .submit-btn {
        width: 310px;
        height: 58px;
        margin-top: 21px;
      }
      .input {
        width: 310px;
        margin-top: 13px;
      }
    }
    .form-header {
      font-size: 37px;
    }
 
   
  }
}

</style>
