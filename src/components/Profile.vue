<template>
  <v-row justify="center">
    <v-col class="my-auto" cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-title>
          {{user.data.displayName}}'s Profile
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
            label="Email"
            readonly
            outlined
          ></v-text-field>   
        </v-card-text>  
        <v-divider class="mt-12"></v-divider>  
        <v-card-actions>
          <v-btn text  to="/"> cancel </v-btn>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="submit"> update </v-btn>
        </v-card-actions>        
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
// import store from "../store/index.js"
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
import firebase from "firebase";

export default {
  mixins: [validationMixin],

  validations: {
    form: {     
      name: { required, minLength: minLength(4), maxLength: maxLength(25) }
    }    
  },

  data() {
    return {      
      form: {
        name: "",
        email: ""
      },
    };
  },

  created() {
    this.fetchData()
  },

  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user",
    }),
    nameErrors() {
      const errors = [];
      if (!this.$v.form.name.$dirty) return errors;
      !this.$v.form.name.minLength && errors.push("Username must be between 4 and 25 characters");
      !this.$v.form.name.maxLength && errors.push("Username must be between 4 and 25 characters");
      !this.$v.form.name.required && errors.push("Username is required");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) return; // exit if bad data
      firebase
        .auth()
        .currentUser
        .updateProfile({
          displayName: this.form.name,
        })
        .then(() => {
          // TODO get this to update user in the store
          //var user = this.user;
          //user.data.displayName = this.form.name;
          //store.dispatch("fetchUser", user);
          this.$router.replace({ name: "home" });
        });
    },
    fetchData() {
      this.form.name = this.user.data.displayName
      this.form.email = this.user.data.email
    }
  },
};
</script>