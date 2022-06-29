<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model="email"
          :class="{ invalid: v$.email.$error }"
        />
        <label for="email">Email</label>
        <small class="helper-text invalid" v-if="v$.email.$error"
          >Укажите коректный Email
        </small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model="password"
          :class="{ invalid: v$.password.$error }"
        />
        <label for="password">Пароль</label>
        <small class="helper-text invalid" v-if="v$.password.$error"
          >Пароль должен быть больше 6 символов</small
        >
      </div>
      <div class="input-field">
        <input
          id="userName"
          type="text"
          v-model="userName"
          :class="{ invalid: v$.userName.$error }"
        />
        <label for="userName">Имя</label>
        <small class="helper-text invalid" v-if="v$.userName.$error"
          >Укажите имя пользователя
        </small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>
      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
  import useValidate from "@vuelidate/core"
  import { email, required, minLength } from "@vuelidate/validators"

  export default {
    name: "register",
    data: () => ({
      v$: useValidate(),
      email: "",
      password: "",
      userName: "",
      agree: false
    }),
    validations() {
      return {
        email: { email, required },
        password: { required, minLength: minLength(6) },
        userName: { required },
        agree: { checked: (v) => v }
      }
    },
    methods: {
      submitHandler() {
        this.v$.$validate()
        if (this.v$.$invalid) {
          this.v$.$touch()
          return
        }

        const formData = {
          email: this.email,
          password: this.password,
          userName: this.userName
        }

        this.$router.push("/")
      }
    }
  }
</script>
