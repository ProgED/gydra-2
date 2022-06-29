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
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
  import useValidate from "@vuelidate/core"
  import { email, required, minLength } from "@vuelidate/validators"
  import messages from "@/utils/messages"

  export default {
    name: "login",
    data: () => ({
      v$: useValidate(),
      email: "",
      password: ""
    }),
    validations() {
      return {
        email: { email, required },
        password: { required, minLength: minLength(6) }
      }
    },
    mounted() {
      if (messages[this.$route.query.message]) {
        this.$message(messages[this.$route.query.message])
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
          password: this.password
        }

        this.$router.push("/")
      }
    }
  }
</script>
