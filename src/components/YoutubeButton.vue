<template>
    <a 
        :href="href" 
        target="_blank" 
        class="px-3 py-2 rounded border-2 border-red-600 bg-red-500 hover:bg-red-600 transition-colors text-white">
        <slot>Youtube</slot>
    </a>
</template>

<script>
export default {

    props: {
        href: String
    }

}
</script>

<style>

</style>