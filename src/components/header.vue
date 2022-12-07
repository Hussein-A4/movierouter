<script setup>
</script>

<template>
    <div class="header">
        <h1>Welcome</h1>
        <RouterLink to="/login" custom v-slot="{ navigate }">
            <button @click="navigate" role="link" class="sign_in">Login</button>
        </RouterLink>
    </div>
</template>

<style scoped>
</style>