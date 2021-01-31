<!-- TODO: Make this a modal form to keep the user on the same page -->
<template>
  <v-row justify="center">
    <v-alert
      :value="error"
      dismissible
      elevation="5"
      type="error"
    ></v-alert>
    <v-col class="my-auto" cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-title>
          Login
        </v-card-title>
        <v-card-text>
           <v-text-field
            v-model="form.email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            outlined
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field> 
          <v-text-field
            v-model="form.password"
            :error-messages="passwordErrors"
            label="Password"
            required
            outlined
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>      
          <v-divider class="mt-3"></v-divider>  
          <div class="text-center" >
            <v-btn text to="/register">Register account</v-btn>
          </div>
        </v-card-text>  
        <v-divider class="mt-12"></v-divider>  
        <v-card-actions>
          <v-btn text  @click="clear">clear</v-btn>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="submit">submit</v-btn>
        </v-card-actions>        
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required, email
} from "vuelidate/lib/validators";
import firebase from "firebase";

export default {
  mixins: [validationMixin],

  validations: {
    email: { required, email },
    password: { required },
  },

  data() {
    return {
      test: process.env.VUE_APP_TEST,

      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      firebase
      .auth()
      .signInWithEmailAndPassword(this.form.email, this.form.password)
      .then(() => {
        this.$router.replace({ name: "home" });
      })
      .catch(err => {
        this.error = err.message;
      });
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.password = "";
      this.repeatPassword = "";
    },
  },
};
</script>