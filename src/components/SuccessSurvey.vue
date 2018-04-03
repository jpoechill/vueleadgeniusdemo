<template>
  <div class="main">
    <div class="box-border">
      <p class="title-text title-text-dark">
        Your survey has been created!
      </p>
      <p>
        <button @click="startNewSurvey">Start Another Survey</button>
      </p>
    </div>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'SucessSurvey',
  methods: {
    startNewSurvey: function () {
      router.push('/')
    }
  }
}
</script>