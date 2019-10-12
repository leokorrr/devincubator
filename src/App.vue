<template>
  <div id="app" class="app">
    <app-menu></app-menu>
    <welcome></welcome>
    <about></about>
    <projects></projects>
    <join-us></join-us>
    <credits></credits>
  </div>
</template>

<script>
import welcome from './components/Welcome.vue'
import projects from './components/Projects.vue'
import credits from './components/Credits.vue'
import about from './components/About.vue'
import joinus from './components/JoinUs.vue'
import menu from './components/Menu.vue'

export default {
  name: 'app',
  components: {
    welcome,
    projects,
    credits,
    about,
    'join-us': joinus,
    'app-menu': menu
  }
}
</script>

<style lang="scss">

@mixin fluidTypography ($property, $unit, $minValue, $maxValue, $minWidth, $maxWidth) {
  #{$property}: calc(#{$minValue}#{$unit} + (#{$maxValue} - #{$minValue}) * ((100vw - #{$minWidth}px) / (#{$maxWidth} - #{$minWidth}))); 
}


html{
  scroll-behavior: smooth;
}

body{
  font-family: 'Questrial', sans-serif;
  margin: 0;
  padding: 0;
}

.section{
  position: relative;
}

.header{
  font-weight: normal;
  margin: 0;

  &--first{
    @include fluidTypography(font-size, px, 52, 180, 360, 1920);

  }

  &--second{
    font-size: 100px;

    @include fluidTypography(font-size, px, 80, 100, 991, 1920);

    @media (max-width: 768px) {
      @include fluidTypography(font-size, px, 35, 70, 360, 768);
    }
    
  }

  &--third{
    font-size: 50px;
  }

  &--fourth{
    font-size: 24px;
  }

  &--margin{
    margin: 15px 0;
  }
}

.btn{
  background-color: transparent;
  border: none;
  transition-duration: .4s;

  &--prim{
    border: 2px solid black;
    padding: 10px 36px;
    border-radius: 8px;
    font-size: 20px;

    &:hover{
      cursor: pointer;
      background-color: black;
      color: white;
    }
  }

  &--round{
    height: 55px;
    width: 55px;
    border: 2px solid black;
    border-radius: 50%;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    


    &:hover{
      cursor: pointer;
      background-color: black;
      color: white
    }

    &:focus{
      outline: none;
      background-color: transparent;
    }

    &:focus:hover{
      background-color: black;
    }

    &>svg{
      font-size: 25px;
    }
  }

  
}

.link{
  color: black;
  transition-duration: .4s;

  &:hover{
    color: lighten(black, 40%);
  }

  &:visited{
    color: black;
  }

  &:active{
    color: black;
  }

  &:focus{
    color: black
  }

  &--underline{
    text-decoration: underline
  }
}

.input-field{
  border: none;
  border-bottom: 1px solid black;
  padding: 3px 5px;

  &:focus{
    outline: none;
  }
}

.centered-content{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  &--projects{
    margin-top: 5%;
  }

  &__content{
    background-color: white;
    padding: 15px;

    &--welcome{
      position: absolute;

      @include fluidTypography(left, px, 0, 458, 360, 1920);

    }
  }
  
  &__btn{
    position: absolute;
    bottom: 15vh;
    opacity: 0;
  }

  &__flex-ctn{
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 40px;

    & .input-field{
      width: 80%;
      padding: 5px 15px;
      font-size: 24px;
    }
  }
}
</style>
