<!-- TODO: Make this a modal form to keep the user on the same page -->
<template>
  <v-row justify="center">
    <v-col class="my-auto" cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-title>
          Login
        </v-card-title>
        <v-card-text>
           <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            outlined
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field> 
          <v-text-field
            v-model="password"
            :error-messages="passwordErrors"
            label="Password"
            required
            outlined
            :type="showPswd ? 'text' : 'password'"
            :append-icon="showPswd ? 'mdi-eye' : 'mdi-eye-off'"
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            @click:append="showPswd = !showPswd"
          ></v-text-field>      
          <v-divider class="mt-3"></v-divider>            
        </v-card-text>  
        <div class="text-center">
            <v-btn color="primary" text to="/register">Register account</v-btn>
            
            <v-btn color="red" text @click="resetPassword">Reset Password</v-btn>
          </div>
        <v-divider class="mt-6"></v-divider>  
        <v-card-actions>
          <v-btn text  @click="clear">clear</v-btn>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="submit">submit</v-btn>
        </v-card-actions>        
      </v-card>
    </v-col>
    <v-snackbar
      v-model="snackbar"
    >
      {{error}}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
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
      snackbar: false,
      showPswd: false,
      email: "",
      password: "",
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
    resetPassword(){
      this.$v.email.$touch()
      if (this.$v.email.$invalid) return;
      firebase
      .auth()
      .sendPasswordResetEmail(this.email)
      .then(() =>{
        this.error = "Reset link has been set to the email you entered"
      })
      .catch(() =>{
        this.error = "Something went wrong when trying send reset link. Make sure your email is correct."; // update it
      })
      .finally(() =>{
        this.snackbar = true;
      })
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) return; // exit if bad data
      firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.$router.replace({ 
          name: "home" 
          });
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