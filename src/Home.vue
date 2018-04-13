<template>
  <div class="welcome-block">
    <img src="./assets/DevDog-AlexaSkill.png">
    <div class="welcome-block main">
      <h1>Developer Dog Alexa Skill</h1>
      <h2>...just the 🐶 facts</h2>
      <p>
        <button v-on:click="getRandomDogFact()">Get Random Developer Dog Fact</button>
      </p>
    </div>
    <audio class="barky" src="./static/BarkBark.wav"></audio>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      loading: true,
      facts: []
    }
  },
  mounted () {
    let vm = this;
    fetch('./static/facts.json')
      .then(res => res.json())
      .then(res => {
        vm.facts = res.results;
        vm.loading = false;
      })
      .catch(err => {
        vm.facts = [];
        console.error(err);
        this.loading = false;
      });
  },
  methods: {
    getRandomDogFact () {
      let vm = this;
      let factIndex = Math.floor(Math.random() * vm.facts.length);
      let randomFact = vm.facts[factIndex];
      const a = document.querySelector('.barky');
      a.currentTime = 0;
      a.play();
      vm.$dialog.open('Doggy Developer Facts!',{
        html: true,
        okText: 'OK',
        cancelText: 'Cancel',
        message: '<p>'+randomFact+'</p>'
      })
        .then(() => {
            // This will be triggered when user clicks on proceed
        })
        .catch(() => {
            // This will be triggered when user clicks on cancel
        });
    }
  }
}
</script>

<style lang="scss">
  .welcome-block {
    display: inline-flex;
    flex-wrap: wrap;
    img, .main {
      margin-left: auto;
      margin-right: auto;
    }
    .main {
      display: inline-block;
    }
  }
  button {
    padding: .75rem 1.25rem;
    font-size: 1.25rem;
    color: #fff;
    background-color: #42b983;
    border-color: #42b983;
    border-radius: .3rem;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    white-space: nowrap;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    border: .0625rem solid transparent;
    vertical-align: middle;
    cursor: pointer;
  }
</style>
