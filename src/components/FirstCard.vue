<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex>
          <v-text-field v-model="form.name" label="name" outline></v-text-field>
          <v-text-field
            v-model="form.email"
            label="email"
            outline
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "firstCard",
  props: {
    form: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
