<template>
    <div id="about" class="section">
        <div class="centered-content">
            <div class="centered-content__content">
                <h2 class="header header--second">Who we are?</h2>
            </div>
        </div>
        <div class="about__text about__text--bottom no-animation" data-aos="fade-right" data-aos-duration="1200" data-aos-easing="ease-in-sine">
            <p>
                We are <strong>creators</strong>.
                We are <strong>programmers</strong>.
                We are <strong>designers</strong>.
                We are <strong>students</strong>.
                We are <strong>guys</strong>.
                We are <strong>girls</strong>.
                We are <strong>pupils</strong>.
                We are <strong>mentors</strong>.
                We are <strong>people</strong>.
                We are <strong>innovators</strong>.
            </p>
        </div>
        <div class="about__text about__text--top no-animation" data-aos="fade-left" data-aos-duration="1200" data-aos-easing="ease-in-sine">
            <p>
                <strong>DevIncubator</strong> is a programmers <strong>community</strong> based in <strong>Pomeranian Academy</strong>.
                 We are specialized in <strong>web applications</strong> with using such technologies as 
                 <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong> and <strong>PHP</strong>.
            </p>
        </div>
    </div>
</template>

<style lang="scss">
@mixin fluidTypography ($property, $unit, $minValue, $maxValue, $minWidth, $maxWidth) {
  #{$property}: calc(#{$minValue}#{$unit} + (#{$maxValue} - #{$minValue}) * ((100vw - #{$minWidth}px) / (#{$maxWidth} - #{$minWidth}))); 
}

.about{

    &__text{
        max-width: 500px;
        font-size: 30px;
        position: absolute;
        line-height: 1.2;
        letter-spacing: 1.1px;

        @media (max-width: 768px) {
            max-width: unset;
            position: relative;
            display: flex;
            justify-content: center;
            padding: 15px 30px;
            @include fluidTypography(font-size, px, 18, 30, 360, 768);

            & p {
                margin: 0 0 20px 0px;
            }
        }

        &--top{
            top: 60px;
            @include fluidTypography(right, px, 100, 120, 991, 1920);

            @media (max-width: 768px) {
                right: unset;
                top: unset;
            }
        }

        &--bottom{
            bottom: 60px;
            @include fluidTypography(left, px, 100, 120, 991, 1920);

            @media (max-width: 768px) {
                left: unset;
                bottom: unset;
            }
        }
    }

}

.no-animation {
    @media (max-width: 768px) {
        transform: none !important;
        opacity: 1 !important;
    }
}

#about {
    .centered-content {
        @media (max-width: 768px) {
            height: 80px !important;
        }

    }

}

</style>
