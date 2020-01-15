<template>
  <div class="order">
    <v-container>
      <v-layout row wrap>
        <CardFram>
          <template slot="header" slot-scope="{age}">
              {{age}}
            <keep-alive>
              <transition name="fade" mode="out-in">
                <component :form="form" :is="components[counter]"></component>
              </transition>
            </keep-alive>
          </template>
          <template slot="actions">
            <v-layout row wrap>
              <v-flex md="6">
                <template v-for="(item, index) in components">
                  <span
                    @click="checkActiveCard(index)"
                    :class="{ 'active-card': handleActiveCard(index) }"
                    :key="index"
                  ></span>
                </template>
              </v-flex>
              <v-flex md="6" class="text-md-right">
                <v-btn
                  @click="handleNextCard"
                  color="primary"
                  class="primary"
                  >{{ TextButton }}</v-btn
                >
              </v-flex>
            </v-layout>
          </template>
        </CardFram>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  name: "Order",
  components: {
    CardFram: () => import("@/components/CardFram"),
    firstCard: () => import("@/components/FirstCard"),
    secondCard: () => import("@/components/SecondCard"),
    thirdCard: () => import("@/components/ThirdCard")
  },
  data() {
    return {
      components: ["firstCard", "secondCard", "thirdCard"],
      counter: 0,
      form: {
        name: "",
        email: "",
        address: "",
        phone: "",
        image: "",
        cardTemplate: ""
      }
    };
  },
  methods: {
    handleActiveCard(index) {
      if (index === this.counter) {
        return true;
      } else {
        return false;
      }
    },
    handleNextCard() {
      if (this.counter >= this.components.length - 1) {
        return;
      }
      this.counter++;
    },
    checkActiveCard(index) {
      this.counter = index;
    }
  },
  computed: {
    TextButton() {
      if (this.counter === this.components.length - 1) {
        return "finished";
      } else {
        return "next";
      }
    }
  },
  validations: {
    form: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      phone: {
        required
      },
      address: {
        required
      },
      image: {
        required
      },
      cardTemplate: {
        required
      }
    }
  }
};
</script>

<style lang="scss">
.order {
  margin-top: 100px;
  button {
    background-color: blue !important;
    border-radius: 5px !important;
  }
  span {
    width: 15px;
    height: 15px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
  }
  .active-card {
    background-color: orange;
    border: 1px solid rgb(196, 134, 19);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
