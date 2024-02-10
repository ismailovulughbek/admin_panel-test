<template>
    <div class="nav">
        <div class="container">
            <div class="nav-info">
                <ul class="nav-info_list">
                    <li class="nav-info_list-li">
                        <router-link class="nav-info_list-li_link" to="/">
                            <img src="@/assets/images/home.svg" alt="">
                            <span>Home</span>
                        </router-link>
                    </li>
                    <li class="nav-info_list-li">
                        <a class="nav-info_list-li_link" href="#!">
                            <img src="@/assets/images/content.svg" alt="">
                            <span>Contents</span>
                        </a>
                    </li>
                    <li class="nav-info_list-li">
                        <a class="nav-info_list-li_link" href="#!">
                            <img src="@/assets/images/categories.svg" alt="">
                            <span>Categories</span>
                        </a>
                    </li>
                    <li class="nav-info_list-li">
                        <a class="nav-info_list-li_link" href="#!">
                            <img src="@/assets/images/settings.svg" alt="">
                            <span>Settings</span>
                        </a>
                    </li>
                </ul>
                <div class="nav-info_user">
                    <button>
                        <img src="@/assets/images/user.svg" alt="">
                        <span>Ulughbek Ismail</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>