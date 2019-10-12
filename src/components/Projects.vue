<template>
    <div class="section" id="projects">
        <div class="centered-content centered-content--projects">
            <div class="centered-content__content">
                <h2 class="header header--second">What are we doing?</h2>
            </div>
            <div class="cards">
                <div class="card" data-aos="fade-up" data-aos-duration="1300" data-aos-easing="ease-in-out">
                        <div class="card__top">
                            <img src="../img/logo.png" alt="" class="card__img">
                        </div>
                        <div class="card__bottom">
                            <div class="card__desc">
                                <h4 class="header--fourth header--margin">Schedule.me</h4>
                                <p class="card__text">Schedule application for Pomeranian univercity.</p>
                            </div>
                            <div class="card__link">
                                <a href="https://git.devincubator.eu/lkochetkov/schedule" class="link">More...</a>
                            </div>
                        </div>
                    </div>
                <div class="card" data-aos="fade-up" data-aos-duration="1300" data-aos-delay="200" data-aos-easing="ease-in-out">
                        <div class="card__top">
                            <img src="../img/logo.png" alt="" class="card__img">
                        </div>
                        <div class="card__bottom">
                            <div class="card__desc">
                                <h4 class="header--fourth header--margin">Your project</h4>
                                <p class="card__text">This is place for your very own project</p>
                            </div>
                            <div class="card__link">
                                <a href="#" class="link">More...</a>
                            </div>
                        </div>
                </div>
                <div class="card" data-aos="fade-up" data-aos-duration="1300" data-aos-delay="400" data-aos-easing="ease-in-out">
                        <div class="card__top">
                            <img src="../img/logo.png" alt="" class="card__img">
                        </div>
                        <div class="card__bottom">
                            <div class="card__desc">
                                <h4 class="header--fourth header--margin">Your project</h4>
                                <p class="card__text">This is place for your very own project</p>
                            </div>
                            <div class="card__link">
                                <a href="#" class="link">More...</a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@mixin fluidTypography ($property, $unit, $minValue, $maxValue, $minWidth, $maxWidth) {
  #{$property}: calc(#{$minValue}#{$unit} + (#{$maxValue} - #{$minValue}) * ((100vw - #{$minWidth}px) / (#{$maxWidth} - #{$minWidth}))); 
}

.cards{
    display: flex;
    justify-content: space-around;
    width: 65%;
    margin-bottom: 5%;
    flex-wrap: wrap;
    @include fluidTypography(width, px, 723, 1248, 991, 1920);
}

.card{
    width: 320px;
    height: 370px;
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 15px;
    margin: 0 15px;
    @include fluidTypography(width, px, 299, 320, 991, 1920);
    margin-bottom: 30px;

    &__top{
        height: 60%;
        overflow: hidden;
        position: relative;
    }

    &__bottom{
        border-top: 1px solid #eeeeee
    }

    &__img{
        width: 215%;
        position: absolute;
        @include fluidTypography(left, px, -140, -160, 360, 1920);
        @include fluidTypography(bottom, px, -185, -225, 360, 1920);
    
    }

    &__text{
        font-size: 2418x;
    }
}


#projects {
    .centered-content {
        @media (max-width: 768px) {
            height: fit-content !important;
        }

        &__content {
            @media (max-width: 768px) {
                height: 80px !important;
            }
        }
    }

}
</style>

