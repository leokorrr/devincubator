<template>
    <div class="section" id="welcome">
        <div class="centered-content">
            <div class="centered-content__content centered-content__content--welcome ">
                <h1 class="header header--first">
                    <svg class="intro" viewbox="0 0 200 86">
                        <text text-anchor="start" x="10" y="30" class="text text-stroke stroke" clip-path="url(#text1)">devIncubator</text>
                        <text text-anchor="start" x="10" y="30" class="text text-stroke text-stroke-2 stroke" clip-path="url(#text1)">devIncubator</text>
                        <defs>
                            <clipPath id="text1">
                                <text text-anchor="start" x="10" y="30" class="text">devIncubator</text>
                            </clipPath>
                        </defs>
                    </svg>
                </h1>
            </div>
            <div class="centered-content__btn  btn-animations">
                <a href="#about">
                    <button class="btn btn--round"><font-awesome-icon icon="arrow-down" /></button>
                </a>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss">

// Animation code
@keyframes slideUpNDown{
    0% { bottom: 15vh; }
    25% { bottom: 18vh; }
    50% { bottom: 15vh; }
    75% { bottom: 18vh; }
    100% { bottom: 15vh; }
}

@keyframes showBtn{
    0% { opacity: 0; }
    100% { opacity: 1; }
}

// Animation class
.btn-animations{
    animation: showBtn 1s linear 3.5s forwards, slideUpNDown 1.8s linear 4.5s 2;
}

svg{
    overflow: inherit;
}

svg.intro {
  .text { 
    display: none;
  }
  &.go {
    .text {
      display: block;
    }
    .text-stroke {
      fill: none;
      stroke: black;
      stroke-width: 3px;
      stroke-dashoffset: -900;
      stroke-dasharray: 900;
      stroke-linecap: butt;
      stroke-linejoin: round;
      animation: dash 3s linear forwards, stroke 3s linear 4s forwards;
    }
    .text-stroke:nth-child(2) {
      animation-delay: .3s;
    }
    .text-stroke:nth-child(3) {
      animation-delay: .9s;
    }
    .text-stroke-2 {
      stroke: black;
      animation-delay: 1.2s;
    }
    .text-stroke:nth-child(5) {
      animation-delay: 1.5s;
    }
    .text-stroke:nth-child(6) {
      animation-delay: 1.8s;
    }
  }
}


@keyframes dash {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes stroke {
    0% {
        stroke-width: 3px;
    }
    100% {
      stroke-width: 22px;
    }
}

</style>