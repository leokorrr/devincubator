<template>
    <div class="app-menu menu-animations" dir="rtl">
       <ul class="app-menu__list">
           <li class="app-menu__list-item list-item active welcome">
               <div class="list-item__header">
                   <a href="#welcome" class="list-item__link">Home</a>
               </div>
           </li>
           <li class="app-menu__list-item list-item about">
               <div class="list-item__header">
                   <a href="#about" class="list-item__link">About</a>
               </div>
           </li>
           <li class="app-menu__list-item list-item project">
               <div class="list-item__header">
                   <a href="#projects" class="list-item__link">Projects</a>
               </div>
           </li>
           <li class="app-menu__list-item list-item join">
               <div class="list-item__header">
                   <a href="#join" class="list-item__link">Join</a>
               </div>
           </li>
           <li class="app-menu__list-item list-item credits" >
               <div class="list-item__header">
                  <a href="#credits" class="list-item__link">Credits</a> 
               </div>
           </li>
       </ul>
    </div>
</template>

<script>
export default {
    methods: {
        isActive: function(){
            $('.app-menu__list').on('click','li', function(){
                $(this).addClass('active').siblings().removeClass('active');
            });
        }
    }
}
</script>


<style lang="scss">
@keyframes showMenu{
    0% { opacity: 0; }
    100% { opacity: 1; }
}
.menu-animations{
    animation: showMenu 1s linear 3.5s forwards;
}
.app-menu{
    min-width: 5%;
    position: fixed;
    right: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .5s;
    z-index: 9999;
    opacity: 0;

    @media (max-width: 991px) {
        display: none;
    }
    
    &__list{
        position: absolute;
    }

    &__list-item{
        font-size: 20px;
        cursor: pointer;
    }
}

.list-item{
    transition: .4s;
    text-align: right;
    padding-left: 25px;

    &__header{
        position: absolute;
        display: none;
    }

    &:hover{
        font-size: 28px;
        margin-right: 3px;
        & .list-item__header{
            display: inline;
        }
    }

    &__link{
        padding: 0;
        margin: 0;
        color: black;

        &:hover{
            color: black;
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
    }
    
}

li.active{
    font-size: 28px;
    margin-right: 3px;

    & .list-item__header{
        display: inline;
    }
}

</style>
