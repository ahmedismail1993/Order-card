<template>
  <div class="mx-auto">
    <section>
      <v-card width="500px">
        <v-card-text>
          <slot :age="age" name="header">defult body</slot>
        </v-card-text>
        <v-card-actions>
          <slot name="actions"> default acitons</slot>
        </v-card-actions>
      </v-card>
    </section>
  </div>
</template>

<script>
export default {
  name: "CardFram",
  data() {
      return {
          age:26
      }
  },
};
</script>
