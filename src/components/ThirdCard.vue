<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex>
          <v-text-field
            v-model="form.image"
            label="image"
            outline
          ></v-text-field>
          <v-text-field
            v-model="form.cardTemplate"
            label="cardTemplate"
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
