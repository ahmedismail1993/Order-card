<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex>
          <v-text-field
            v-model="form.phone"
            label="phone"
            outline
          ></v-text-field>
          <v-text-field
            v-model="form.address"
            label="address"
            outline
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "secondCard",
  props: {
    form: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
