<!-- TODO: change this to a modal form so user can stay on page -->
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
          Register User
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="form.name"
            :error-messages="nameErrors"
            label="Username"
            required
            outlined
            @input="$v.form.name.$touch()"
            @blur="$v.form.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="form.email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            outlined
            @input="$v.form.email.$touch()"
            @blur="$v.form.email.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="form.password"
            :error-messages="passwordErrors"
            label="Password"
            required
            outlined
            :type="showPswd ? 'text' : 'password'"
            :append-icon="showPswd ? 'mdi-eye' : 'mdi-eye-off'"
            @input="$v.form.password.$touch()"
            @blur="$v.form.password.$touch()"
            @click:append="showPswd = !showPswd"
          ></v-text-field>
          <v-text-field
            v-model="form.repeatPassword"
            :error-messages="repeatPasswordErrors"
            label="Repeat Password"
            required
            outlined
            :type="showPswd ? 'text' : 'password'"
            :append-icon="showPswd ? 'mdi-eye' : 'mdi-eye-off'"
            @input="$v.form.repeatPassword.$touch()"
            @blur="$v.form.repeatPassword.$touch()"
            @click:append="showPswd = !showPswd"
          ></v-text-field>          
        </v-card-text>  
        <v-divider class="mt-12"></v-divider>  
        <v-card-actions>
          <v-btn text  @click="clear"> clear </v-btn>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="submit"> submit </v-btn>
        </v-card-actions>        
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";
import firebase from "firebase";

export default {
  mixins: [validationMixin],

  validations: {
    form: {     
      name: { required, minLength: minLength(4), maxLength: maxLength(25) },
      email: { required, email },
      password: {
        required,
        minLength: minLength(6),
      },
      repeatPassword: {
        required,
        sameAsPassword: sameAs("password"),
      }
    }    
  },

  data() {
    return {
      
      showPswd: false,
      form: {
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
      },
      error: null,
    };
  },

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.form.name.$dirty) return errors;
      // BUG: might need to use min/max length instead. between is for numbers
      !this.$v.form.name.minLength && errors.push("Username must be between 4 and 25 characters");
      !this.$v.form.name.maxLength && errors.push("Username must be between 4 and 25 characters");
      !this.$v.form.name.required && errors.push("Username is required");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.form.email.$dirty) return errors;
      !this.$v.form.email.email && errors.push("Must be valid e-mail");
      !this.$v.form.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.form.password.$dirty) return errors;
      !this.$v.form.password.minLength &&
        errors.push("Password must be at least 6 characters");
      !this.$v.form.password.required && errors.push("Password is required");
      return errors;
    },
    repeatPasswordErrors() {
      const errors = [];
      if (!this.$v.form.password.$dirty) return errors;
      !this.$v.form.repeatPassword.required && errors.push("Must repeat password");
      !this.$v.form.repeatPassword.sameAsPassword &&
        errors.push("Passwords must match");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) return; // exit if bad data
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: this.form.name,
            })
            .then(() => {
              this.$router.replace({ name: "home" });
            });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
    clear() {
      this.$v.$reset();
      this.form.name = "";
      this.form.email = "";
      this.form.password = "";
      this.form.repeatPassword = "";
    },
  },
};
</script>